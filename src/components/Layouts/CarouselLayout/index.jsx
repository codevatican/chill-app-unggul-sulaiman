import React, { useRef } from 'react'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

const CarouselLayout = ({children}) => {
const ref = useRef(null)
const scroll = (offset) => {
    ref.current.scrollLeft += offset
}
  return (
    <div className='relative overflow-visible rounded-lg'>
        <div className='flex justify-between absolute inset-0 w-full h-full overflow-visible pointer-events-none'>
            <button 
                onClick={() => scroll(-500)}
                className='pointer-events-auto absolute -left-5 top-1/2 -translate-y-1/2 
               z-10 bg-gray-800 hover:bg-blue-900/50 text-white opacity-75 
               transition-all ease-in-out duration-300 h-10 w-10 rounded-full 
               border flex items-center justify-center'
            >
                <GoChevronLeft size={40}/>
            </button>
            <button 
                onClick={() => scroll(500)}
                className='pointer-events-auto absolute -right-5 top-1/2 -translate-y-1/2 
               z-10 bg-gray-800 hover:bg-blue-900/50 text-white opacity-75 
               transition-all ease-in-out duration-300 h-10 w-10 rounded-full 
               border flex items-center justify-center'
            >
                <GoChevronRight size={40}/>
            </button>
        </div>
        <div 
            ref={ref}
            className='carousel relative flex overflow-x-auto scroll-smooth space-x-2 no-scrollbar px-12'
        >
            {children}
        </div>
    </div>
  )
}

export default CarouselLayout