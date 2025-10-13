import EachUtils from '@/utils/EachUtils'
import React, { useEffect, useState } from 'react'
import { GoPlay } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, setSelectedMovieId } from '@/store/redux/movieSlice'
import { getMoviesRecommendation } from '@/utils/getMoviesRecommendation'
import { getVideoUrl } from '@/utils/getVideoURL'
import { useNavigate } from 'react-router-dom'

const Recommendation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const idMovie = useSelector((state) => state.movie.selectedMovieId)

  const [moviesRecommendation, setMoviesRecommendation] = useState([])
  const [videoURL, setVideoURL] = useState(null)

  useEffect(() => {
    if (idMovie) {
      getMoviesRecommendation({ movie_id: idMovie }).then(setMoviesRecommendation)
    }
  }, [idMovie])

  const handlePlay = (id) => {
    getVideoUrl({ movie_id: id }).then((url) => {
      navigate('/watch/' + url)
      dispatch(closeModal())
    })
  }

  return (
    <div className='px-4 py-2'>
      <h2 className='text-2xl font-bold mt-4'>Movies Recommendation</h2>
      <div className='grid grid-cols-3 gap-2 mt-4'>
        <EachUtils
          of={moviesRecommendation}
          render={(item, index) => (
            <div
              key={index}
              className='w-full h-auto cursor-pointer rounded-md bg-[#141414]'
              onMouseEnter={() => getVideoUrl({ movie_id: item.id }).then(setVideoURL)}
              onClick={() => handlePlay(item.id)}
            >
              <div className='relative'>
                <img
                  src={import.meta.env.VITE_URL_BASE_URL_TMDB_IMAGE + item.poster_path}
                  className='w-full h-48 rounded-t-md'
                />
                <button className='absolute top-10 left-1/2 -translate-x-1/2'>
                  <GoPlay size={44} />
                </button>
              </div>
              <div className='p-2'>
                <div className='flex gap-2'>
                  <p>{item.release_date}</p>
                  <p className='text-green-400/90'>{item.vote_average}</p>
                </div>
                <p className='text-wrap pt-2 max-h-32 overflow-y-scroll'>{item.overview}</p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Recommendation