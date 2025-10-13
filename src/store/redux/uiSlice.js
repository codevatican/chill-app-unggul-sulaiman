import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchQuery: null,
  isFetching: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload
    },
  },
})

export const { setSearchQuery, setIsFetching } = uiSlice.actions
export default uiSlice.reducer