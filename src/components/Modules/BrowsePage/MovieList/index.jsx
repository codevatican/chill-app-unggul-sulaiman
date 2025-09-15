import React, { useEffect, useState } from 'react'
import EachUtils from '@/utils/EachUtils'
import MovieCard from '@mods/BrowsePage/MovieCard'
import CarouselLayout from '@/components/Layouts/CarouselLayout'
import { useAtom } from 'jotai'
import { idMovieAtom, isFetchingAtom} from '@/jotai/atoms'
import { getMoviesByType } from '@/utils/getMoviesByType'

const MovieList = ({ title, moviesType }) => {
    const [isHover, setIsHover] = useState(false);
    const [, setIdMovie] = useAtom(idMovieAtom); 
    const [, setIsFetching] = useAtom(isFetchingAtom);

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        if(moviesType){
            getMoviesByType({moviesType}).then((result) => {
                setIsFetching(true)
                setMovieList(result)
            }).finally(() => {
                setTimeout(() => {
                    setIsFetching(false)
                }, 500)
            })
        }
    }, [moviesType])

  return (
    <>
    {moviesType === "now_playing" ? (
        <section className='px-8 py-4 bg-zinc-900'>
        <h3 className='text-white text-3xl font-semibold mb-2'>{title}</h3>
        <CarouselLayout>
            <EachUtils
                of={movieList}
                render={(item, index) => (
                    <div 
                        className='carousel-item h-72 w-1/4 mt-4'
                        key={index}
                        
                        onMouseLeave={() => {
                            setIsHover(false); 
                            setIdMovie(null)
                        }}
                    >
                        <MovieCard 
                            data={item} 
                            isHover={isHover} 
                            setIsHover={setIsHover}
                        />
                    </div>
                )}                   
            />
            </CarouselLayout>
        </section>
    ) : (
        <section className='px-8 py-4 bg-zinc-900'>
        <h3 className='text-red text-3xl font-semibold mb-2'>{title}</h3>
        <CarouselLayout>
            <EachUtils
                of={movieList}
                render={(item, index) => (
                    <div 
                        className='carousel-item w-[160px] h-[240px] mt-4'
                        key={index}
                        
                        onMouseLeave={() => {
                            setIsHover(false); 
                            setIdMovie(null)
                        }}
                    >
                        <MovieCard 
                            data={item} 
                            isHover={isHover} 
                            setIsHover={setIsHover}
                        />
                    </div>
                )}                   
            />
            </CarouselLayout>
        </section>
    )} 
    </>
  )
}

export default MovieList