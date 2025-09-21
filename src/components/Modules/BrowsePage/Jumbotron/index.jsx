import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { GoPlay, GoMute, GoUnmute } from 'react-icons/go'
import { getMoviesByType } from '@/utils/getMoviesByType'
import { useAtom } from 'jotai'
import { idMovieAtom, isOpenModalAtom } from '@/jotai/atoms'
import { getVideoUrl } from '@/utils/getVideoURL'
import { useNavigate } from 'react-router-dom'
import { FiInfo } from 'react-icons/fi'

const Jumbotron = () => {
    const navigate = useNavigate()
    const [idMovie, setIdMovie] = useState(null)
    const [, setIdMovieAtom] = useAtom(idMovieAtom)
    const [, setIsOpenModal] = useAtom(isOpenModalAtom)
    const [isMute, setIsMute] = useState(true)
    const [topMovies, setTopMovies] = useState([])
    const [videoURL, setVideoURL] = useState(null)

    useEffect(() => {
        getMoviesByType({moviesType: "top_rated"}).then((result) => {
            setTopMovies(result[0])
            setIdMovie(result[0].id)    
        }).finally(() => getVideoUrl({movie_id: idMovie}).then(result => setVideoURL(result)))
    },[idMovie])

  return (
    <div className='relative top-0 left-0 h-[60vw] w-full '>
        <ReactPlayer
            url={'https://www.youtube.com/watch?v=' + videoURL}
            width={'100%'}
            height={'100%'}
            playing={true}
            muted={isMute}
            controls={false}
            loop={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent">
            <div className='absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-3xl'>
                <div className='flex flex-col gap-4 text-white'>
                    <h1 className='text-5xl font-black'>{topMovies.title}</h1>
                    <p>{topMovies.overview}</p>
                </div>
                <div className='flex gap-4 mt-4'>
                    <button 
                        onClick={() => {
                            navigate('/watch/' + videoURL)
                            setIsMute(true)
                        }}
                        className='bg-blue-800 py-2 px-8 rounded-full text-xl font-semibold text-white flex items-center gap-1'
                        >
                        <GoPlay />Mulai
                    </button>
                    <button 
                        onClick={() => {
                            setIdMovieAtom(idMovie)
                            setIsOpenModal(true)
                        }}
                        className='bg-gray-600/80 py-2 px-8 rounded-full text-semibold text-white flex gap-2 items-center justify-center'
                    >
                        <FiInfo size={24} />Selengkapnya
                    </button>
                    <div className='border rounded-full p-2'>
                        18+
                    </div>
                </div>
            </div>
            <div className='absolute top-115 p-8 right-6 text-white'>
                <div 
                    className='border rounded-full p-2 cursor-pointer'
                    onClick={() => setIsMute(!isMute)}
                >
                    {isMute?<GoMute size={24}/>:<GoUnmute size={24}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Jumbotron