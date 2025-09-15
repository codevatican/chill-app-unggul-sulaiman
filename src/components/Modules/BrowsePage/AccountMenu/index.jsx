import React from 'react'
import { FaSignOutAlt, FaStar, FaUser } from 'react-icons/fa'
import { GoChevronDown } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'


const AccountMenu = () => {
  const navigate = useNavigate()
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
        className="dropdown-content menu p-2 shadow bg-zinc-900 text-white rounded-box w-40 "
      >
        <li className=''>
            <button onClick={() => console.log('Profile Saya')} className='hover:bg-blue-500'><FaUser size={16} className="" />Profile Saya</button>
            <button onClick={() => console.log('Ubah Premium')} className='hover:bg-blue-500'><FaStar size={16} className="" />Ubah Premium</button>
            <button onClick={() => navigate('/login')} className='hover:bg-blue-500'><FaSignOutAlt size={16} className="" />Keluar</button>
        </li>
      </ul>
    </div>
  )
}

export default AccountMenu