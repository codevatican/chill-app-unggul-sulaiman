import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Skeleton from '@mods/BrowsePage/MovieCard/Skeleton'
import {GoPlay, GoPlusCircle, GoChevronDown} from 'react-icons/go'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { getMovieDetail } from '@/utils/getMovieDetail'
import { idMovieAtom, isFetchingAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getVideoUrl } from '@/utils/getVideoURL'
import { useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { LIST_VIDEO_RECOMMENDATION } from '@/constants/dummyVideo'

const MovieCard = ({ data, index, latestMovieId, isHover, setIsHover, showOverlay }) => {
  const navigate = useNavigate()

  const [idMovie, setIdMovie] = useAtom(idMovieAtom)
  const [, setIsOpenModal] = useAtom(isOpenModalAtom)
  const [isFetching] = useAtom(isFetchingAtom)

  const [videoURL, setVideoURL] = useState(null)
  const [movieDetail, setMovieDetail] = useState([])

  if(isFetching) return <Skeleton />

  const formatRuntime = (minutes) => {
    if (!minutes) return ''
    const h = Math.floor(minutes / 60)
    const m = minutes % 60
    return `${h > 0 ? h + 'j ' : ''}${m}m`
  }

  return (
    <>
    {isHover && idMovie === data.id ? (
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className='absolute top-0 left-1/2 z-50 shadow-2xl cursor-pointer w-[300px] rounded-lg overflow-hidden pointer-events-none'
        style={{ transformOrigin: 'center center', translateX: '-50%' }}
      >
          <ReactPlayer 
              url={`https://youtube.com/watch?v=${videoURL}`}
              playing={true}
              loop={true}
              muted={true}
              width={'100%'}
              height={'180px'}
              controls={false}
          />
        <div className='h-auto p-2 bg-zinc-900 flex flex-col gap-1.5 pointer-events-auto'>
            <section className='mt-1 flex justify-between'>
              <div className='flex gap-2'>
                <button 
                  onClick={() => navigate('/watch/' + videoURL)}
                >
                  <GoPlay size={32}/>
                </button>
                <button>
                  <GoPlusCircle size={32}/>
                </button>
              </div>
              <div>
                <button 
                  onClick={() => setIsOpenModal(true)}
                  className='rounded-full p-1 border'
                >
                  <GoChevronDown size={20}/>
                </button>
              </div>
            </section>
            <section className='text-left'>
              <h2 className='font-semibold'>{data.title}</h2>
            </section>
            {movieDetail && (
              <section className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                  <span className='px-2 py-1 rounded-full text-white text-sm bg-gray-700'>
                    {movieDetail.adult ? '18+' : '13+'}
                  </span>
                  <span className='px-2 py-1 text-white text-sm'>
                    {formatRuntime(movieDetail.runtime)}
                  </span>
                </div>
                <div className='flex flex-wrap gap-2 text-gray-300 text-sm'>
                  {(movieDetail?.genres || []).map((g, i) => (
                    <span key={g.id}>
                      {g.name}{i !== (movieDetail?.genres?.length || 0) - 1 && ' •'}
                    </span>
                  ))}
                </div>
              </section>
            )}
        </div>
      </motion.div>
    ) : 
      <div 
        className="relative h-full w-full cursor-pointer overflow-hidden"
        onMouseEnter={() => {
          if (!data?.id) return;
          setIsHover(true); 
          setIdMovie(data.id)
          getVideoUrl({movie_id: data.id}).then(result => setVideoURL(result))
        }}
      >
        <img 
          src={!data.poster_path ? LIST_VIDEO_RECOMMENDATION[0].image : `${import.meta.env.VITE_URL_BASE_URL_TMDB_IMAGE}${data.poster_path}`}
          className="h-full w-full object-cover rounded-lg"
        />

        {data.id === latestMovieId && (
            <div className="absolute top-1 left-0">
              <div className="bg-blue-800 px-4 py-1 rounded-full m-3 text-white text-sm font-semibold">
                Episode Baru
              </div>
            </div>
        )}
        {index <= 10 && (
            <div className="absolute top-0 right-4">
              <div className="bg-red-700 px-2 py-3 rounded-bl-md rounded-tr-md 
                    text-white text-sm font-medium flex flex-col items-center leading-tight">
                <span>Top</span>
                <span>10</span>
              </div>
            </div>
        )}
        {showOverlay && (
          <div className="absolute bottom-0 left-0 w-full px-2 pb-6 flex justify-between items-end                       bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
            <h3 className="text-white text-lg font-bold truncate max-w-[70%]">
              {data.title}
            </h3>
            <div className="flex items-center gap-1">
              <FaStar className="text-white w-4 h-4" />
              <span className="text-white text-lg">{data.vote_average.toFixed(1)} / 10</span>
            </div>
          </div>
        )}
      </div>
      
    }
    </>
  )
}

export default MovieCard