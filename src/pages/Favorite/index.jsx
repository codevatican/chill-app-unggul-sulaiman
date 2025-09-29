import BrowseLayout from '@/components/Layouts/BrowseLayout';
import MovieCard from '@/components/Modules/BrowsePage/MovieCard';
import { LIST_VIDEO_RECOMMENDATION } from '@/constants/dummyVideo'
import { idMovieAtom } from '@/jotai/atoms';
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai';
import React, { useState } from 'react'

const Favorite = () => {
        const [isHover, setIsHover] = useState(false);
        const [, setIdMovie] = useAtom(idMovieAtom);
  return (
      <BrowseLayout>
        <div className='px-8 mt-20'>
            <h3 className='text-white font-bold text-2xl'>Daftar Saya</h3>
        </div>
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 px-8 py-8'> 
            <EachUtils
            of={LIST_VIDEO_RECOMMENDATION} 
            render={(item, index) => (
                <div 
                    className={'h-full'}
                    key={index}
                            
                    onMouseLeave={() => {
                                setIsHover(false); 
                                setIdMovie(null)
                            }}
                        >
                    <MovieCard 
                        data={item} 
                        index={index}                
                        isHover={isHover} 
                        setIsHover={setIsHover}
                    />
                </div>
            )}
            />
        </div>
    </BrowseLayout>
  )
}

export default Favorite