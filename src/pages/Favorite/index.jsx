import BrowseLayout from '@/components/Layouts/BrowseLayout'
import MovieCard from '@mods/BrowsePage/MovieCard'
import { LIST_VIDEO_RECOMMENDATION } from '@/constants/dummyVideo'
import EachUtils from '@/utils/EachUtils'
import { useDispatch } from 'react-redux'
import { setSelectedMovieId } from '@/store/redux/movieSlice'
import React, { useState } from 'react'

const Favorite = () => {
  const dispatch = useDispatch()
  const [isHover, setIsHover] = useState(false)

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
                setIsHover(false)
                dispatch(setSelectedMovieId(null))
              }}
            >
              <MovieCard data={item} index={index} isHover={isHover} setIsHover={setIsHover} />
            </div>
          )}
        />
      </div>
    </BrowseLayout>
  )
}

export default Favorite