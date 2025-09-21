import React, { useEffect, useState } from 'react'
import EachUtils from '@/utils/EachUtils'
import MovieCard from '@mods/BrowsePage/MovieCard'
import CarouselLayout from '@/components/Layouts/CarouselLayout'
import { useAtom } from 'jotai'
import { idMovieAtom, isFetchingAtom} from '@/jotai/atoms'
import { getMoviesByType } from '@/utils/getMoviesByType'

const MovieList = ({ title, moviesType }) => {
    const [isHover, setIsHover] = useState(false);
    const [latestMovieId, setLatestMovieId] = useState(null);
    const [, setIdMovie] = useAtom(idMovieAtom); 
    const [, setIsFetching] = useAtom(isFetchingAtom);

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        if(moviesType){
            getMoviesByType({moviesType}).then((result) => {
                setIsFetching(true)
                setMovieList(result)
                const latest = result.reduce((prev, curr) => {
                    const prevDate = new Date(prev.release_date || prev.first_air_date || 0)
                    const currDate = new Date(curr.release_date || curr.first_air_date || 0)
                    return currDate > prevDate ? curr : prev
                }, result[0])
                setLatestMovieId(latest?.id || null)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }
    }, [moviesType])

  return (
    <>
        <section className='px-8 py-4 bg-zinc-900 z-0'>
        <h3 className='text-white text-3xl font-semibold mb-2'>{title}</h3>
        <CarouselLayout>
            <EachUtils
                of={movieList}
                render={(item, index) => (
                    <div 
                        className={moviesType === "now_playing" 
                                    ? 'carousel-item h-72 w-1/3 mt-4'
                                    : 'carousel-item w-[220px] h-[330px] mt-4 flex-shrink-0'}
                        key={index}
                        
                        onMouseLeave={() => {
                            setIsHover(false); 
                            setIdMovie(null)
                        }}
                    >
                        <MovieCard 
                            data={item} 
                            index={index}                
                            latestMovieId={latestMovieId} 
                            isHover={isHover} 
                            setIsHover={setIsHover}
                            showOverlay={moviesType === "now_playing"}
                        />
                    </div>
                )}                   
            />
            </CarouselLayout>
        </section>
    </>
  )
}

export default MovieList