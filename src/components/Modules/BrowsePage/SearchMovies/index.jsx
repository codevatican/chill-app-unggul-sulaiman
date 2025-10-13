import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '@/utils/searchMovies'
import EachUtils from '@/utils/EachUtils'
import MovieCard from '@mods/BrowsePage/MovieCard'
import { setSelectedMovieId } from '@/store/redux/movieSlice'
import { setIsFetching } from '@/store/redux/uiSlice'

const SearchMovies = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector((state) => state.ui.searchQuery)
  const [isHover, setIsHover] = useState(false)
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    if (searchQuery) {
      dispatch(setIsFetching(true))
      searchMovies({ query: searchQuery }).then(setMovieList).finally(() => {
        setTimeout(() => dispatch(setIsFetching(false)), 500)
      })
    }
  }, [searchQuery, dispatch])

  return (
    <div className='grid grid-cols-4 p-8 mt-10 gap-4'>
      <EachUtils
        of={movieList}
        render={(item, index) => (
          <div
            className='h-72 mt-4'
            key={index}
            onMouseLeave={() => {
              setIsHover(false)
              dispatch(setSelectedMovieId(null))
            }}
          >
            <MovieCard data={item} isHover={isHover} setIsHover={setIsHover} />
          </div>
        )}
      />
    </div>
  )
}

export default SearchMovies