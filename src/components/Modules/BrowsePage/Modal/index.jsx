import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Recommendation from '@mods/BrowsePage/Modal/Recommendation'
import { MdClose } from 'react-icons/md'
import { GoPlay, GoPlusCircle } from 'react-icons/go'
import { getMovieDetail } from '@/utils/getMovieDetail'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '@/store/redux/movieSlice'
import { getVideoUrl } from '@/utils/getVideoURL'
import { useNavigate } from 'react-router-dom'

const Modal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isOpenModal = useSelector((state) => state.movie.isModalOpen)
  const idMovie = useSelector((state) => state.movie.selectedMovieId)

  const [movieDetail, setMovieDetail] = useState({})
  const [videoURL, setVideoURL] = useState(null)

  useEffect(() => {
    if (idMovie && isOpenModal) {
      getMovieDetail({ movie_id: idMovie }).then(setMovieDetail)
      getVideoUrl({ movie_id: idMovie }).then(setVideoURL)
    }
  }, [idMovie, isOpenModal])

  const genreMapping = (genres) => {
    if (!genres) return ''
    return genres.map((g) => g.name).join(', ')
  }

  const handlePlay = () => {
    navigate('/watch/' + videoURL)
    dispatch(closeModal())
  }

  return (
    <dialog className={`modal ${isOpenModal ? 'modal-open' : ''}`}>
      <div className='modal-box w-full max-w-screen-md p-0'>
        <div className='relative'>
          <div className='h-[400px] w-full'>
            <ReactPlayer
              width={'100%'}
              height={'100%'}
              url={`https://www.youtube.com/watch?v=${videoURL}`}
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
          <button
            onClick={() => dispatch(closeModal())}
            className='absolute top-2 right-2 rounded-full border p-1'
          >
            <MdClose size={24} color='white' />
          </button>
          <div className='absolute bottom-1/2 left-10'>
            <h2 className='text-4xl font-black text-white'>{movieDetail?.title}</h2>
          </div>
          <div className='absolute bottom-1/2 translate-y-14 left-10'>
            <div className='flex gap-4'>
              <button onClick={handlePlay} className='bg-slate-50 w-32 text-black flex items-center justify-center gap-1 p-1.5 rounded-md font-bold text-xl'>
                <GoPlay size={32} /> Play
              </button>
              <button className='text-slate-200 hover:text-white'>
                <GoPlusCircle size={44} />
              </button>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-1 px-4 py-2 text-white'>
          <div>
            <div className='flex gap-2'>
              <p>{movieDetail?.release_date}</p>
              <p className='text-green-400/90'>{movieDetail?.runtime} Minutes</p>
            </div>
            <p className='mt-4'>{movieDetail?.overview}</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p>Genre: {genreMapping(movieDetail?.genres)}</p>
            <p>Popularity: {movieDetail?.popularity}</p>
          </div>
        </div>
        <Recommendation />
      </div>
    </dialog>
  )
}

export default Modal