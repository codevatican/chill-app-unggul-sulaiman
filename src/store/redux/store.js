import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/store/redux/authSlice'
import uiReducer from '@/store/redux/uiSlice'
import movieReducer from '@/store/redux/movieSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    movie: movieReducer,
  },
})