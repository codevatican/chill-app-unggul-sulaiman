import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('token') || null,
  email: localStorage.getItem('email') || null,
  password: localStorage.getItem('password') || null,
  language: localStorage.getItem('language') || 'id',
  emailInput: null, // for temporary form input
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      if (action.payload) localStorage.setItem('token', action.payload)
      else localStorage.removeItem('token')
    },
    setEmail: (state, action) => {
      state.email = action.payload
      if (action.payload) localStorage.setItem('email', action.payload)
      else localStorage.removeItem('email')
    },
    setPassword: (state, action) => {
      state.password = action.payload
      if (action.payload) localStorage.setItem('password', action.payload)
      else localStorage.removeItem('password')
    },
    setLanguage: (state, action) => {
      state.language = action.payload
      localStorage.setItem('language', action.payload)
    },
    setEmailInput: (state, action) => {
      state.emailInput = action.payload
    },
    logout: (state) => {
      state.token = null
      state.email = null
      state.password = null
      state.emailInput = null
      localStorage.removeItem('token')
      localStorage.removeItem('email')
      localStorage.removeItem('password')
    },
  },
})

export const {
  setToken,
  setEmail,
  setPassword,
  setLanguage,
  setEmailInput,
  logout,
} = authSlice.actions

export default authSlice.reducer