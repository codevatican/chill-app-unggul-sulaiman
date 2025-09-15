import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import {GoPlay, GoPlusCircle, GoChevronDown} from 'react-icons/go'
import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { idMovieAtom, isFetchingAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getVideoUrl } from '@/utils/getVideoURL'
import Skeleton from '@mods/BrowsePage/MovieCard/Skeleton'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ data, isHover, setIsHover }) => {
  const navigate = useNavigate()

  const [idMovie, setIdMovie] = useAtom(idMovieAtom)
  const [, setIsOpenModal] = useAtom(isOpenModalAtom)
  const [isFetching] = useAtom(isFetchingAtom)

  const [videoURL, setVideoURL] = useState(null)

  if(isFetching) return <Skeleton />

  return (
    <>
    {isHover && idMovie === data.id ? (
      <motion.div
        initial={{ scale: 0, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        transition={{ease: 'easeInOut', duration: 0}}
        className='relative shadow-md cursor-pointer transition-all w-full'
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
        <div className='h-auto p-2 bg-zinc-900 flex flex-col gap-1.5'>
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
              <p className='text-green-400'>Popularity: {data.popularity}</p>
            </section>
        </div>
      </motion.div>
    ) : 
      <img 
        onMouseEnter={() => {
                            setIsHover(true); 
                            setIdMovie(data.id)
                            getVideoUrl({movie_id: data.id}).then(result => setVideoURL(result))
                        }}
        src={`${import.meta.env.VITE_URL_BASE_URL_TMDB_IMAGE}${data.poster_path}`}
        className='max-h-48 w-full object-cover cursor-pointer'
      /> 
    }
    </>
  )
}

export default MovieCard