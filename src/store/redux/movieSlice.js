import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedMovieId: null,
  isModalOpen: false,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    closeModal: (state) => {
      state.isModalOpen = false
      state.selectedMovieId = null
    },
  },
})

export const { setSelectedMovieId, setIsModalOpen, closeModal } = movieSlice.actions
export default movieSlice.reducer