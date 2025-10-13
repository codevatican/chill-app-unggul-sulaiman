import React from 'react'
import { FaSignOutAlt, FaStar, FaUser } from 'react-icons/fa'
import { GoChevronDown } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '@/store/redux/authSlice'
import { auth } from '@/utils/firebase'
import { signOut } from 'firebase/auth'

const AccountMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await signOut(auth)
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} className="flex items-center gap-2 cursor-pointer">
        <div className="avatar">
          <div className="w-10 rounded">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <GoChevronDown size={20} className="text-white" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-zinc-900 text-white rounded-box w-40"
      >
        <li>
          <button onClick={() => console.log('Profile Saya')} className='hover:bg-blue-500'>
            <FaUser size={16} /> Profile Saya
          </button>
          <button onClick={() => console.log('Ubah Premium')} className='hover:bg-blue-500'>
            <FaStar size={16} /> Ubah Premium
          </button>
          <button onClick={handleLogout} className='hover:bg-blue-500'>
            <FaSignOutAlt size={16} /> Keluar
          </button>
        </li>
      </ul>
    </div>
  )
}

export default AccountMenu