import React from 'react'
import Navbar from '@/pages/Browse/Navbar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/utils/firebase'

const BrowseLayout = ({ children }) => {
  const [user, loading, error] = useAuthState(auth)
  
  if (loading) {
    return <p>Loading...</p>
  }
  
  if (error) {
    return <p>Error: {error.message}</p>
  }
  
  if(!user){
    return location.replace('/login')
  }

  return (
    <>
        <Navbar />
        <div>
            {children}
        </div>
    </>
  )
}

export default BrowseLayout