import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '@/store/redux/uiSlice'

const InputSearchMovies = () => {
  const [isShow, setIsShow] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    if (value.length > 3) {
      dispatch(setSearchQuery(value))
    } else {
      dispatch(setSearchQuery(null))
    }
  }

  return (
    <div className='relative'>
      <motion.input
        initial={{ translateX: -20 }}
        animate={{ translateX: isShow ? 0 : -20, opacity: isShow ? 1 : 0 }}
        className='bg-black border py-1 pl-12 rounded-md w-full'
        style={{ display: isShow ? 'block' : 'none' }}
        onChange={handleChange}
        placeholder='title, people, genres...'
      />
      <GoSearch
        className={isShow ? 'absolute top-1/2 -translate-y-1/2 left-3 z-10' : null}
        size={24}
        onClick={() => setIsShow(!isShow)}
      />
    </div>
  )
}

export default InputSearchMovies