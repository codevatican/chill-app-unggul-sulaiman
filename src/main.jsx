import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/store/redux/store'
import './index.css'

import Browse from '@/pages/Browse'
import Watch from '@/pages/Watch'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Favorite from '@/pages/Favorite'

const router = createBrowserRouter([
  { path: '/', element: <Browse /> },
  { path: '/watch/:id', element: <Watch /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  { path: '/daftar_saya', element: <Favorite /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)