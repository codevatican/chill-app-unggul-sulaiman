import React from 'react'
import Navbar from '@/pages/Browse/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/firebase'
import { useSelector } from 'react-redux'

const BrowseLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  const token = useSelector((state) => state.auth.token)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!user || !token) {
    window.location.replace('/login')
    return null
  }

  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  )
}

export default BrowseLayout