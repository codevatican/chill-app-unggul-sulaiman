import React, { useRef } from 'react'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

const CarouselLayout = ({children}) => {
const ref = useRef(null)
const scroll = (offset) => {
    ref.current.scrollLeft += offset
}
  return (
    <div className='relative overflow-hidden'>
        <div className='flex justify-between absolute left-0 w-full h-full'>
            <button 
                onClick={() => scroll(-500)}
                className='z-10 bg-gray-800 hover:bg-blue-900/50 text-white text-center opacity-75 transition-all ease-in-out duration-300 h-8 w-8 mt-24 rounded-full border flex items-center justify-center'
            >
                <GoChevronLeft size={20}/>
            </button>
            <button 
                onClick={() => scroll(500)}
                className='z-10 bg-gray-800 hover:bg-blue-900/50 text-white text-center opacity-75 transition-all ease-in-out duration-300 h-8 w-8 mt-24 rounded-full border flex items-center justify-center'
            >
                <GoChevronRight size={20}/>
            </button>
        </div>
        <div 
            ref={ref}
            className='carousel relative scroll-smooth space-x-2'
        >
            {children}
        </div>
    </div>
  )
}

export default CarouselLayout