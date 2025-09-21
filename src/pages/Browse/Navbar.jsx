import EachUtils from '@/utils/EachUtils'
import React from 'react'
import { LIST_NAVBAR } from '@/constants/listNavbar'
import InputSearchMovies from '@mods/BrowsePage/InputSearchMovies'
import AccountMenu from '@mods/BrowsePage/AccountMenu'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

  return (
    <header className='relative'>
        <nav className='bg-zinc-900 fixed text-white top-0 left-0 px-8 py-4 w-full z-50'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img 
                        onClick={() => navigate('/')}
                        src='../../../dist/chill-logo.svg' 
                        alt="" 
                        className='w-[120px] ml-2 cursor-pointer hover:scale-105 transition-all'
                    />
                    <ul className='sm:flex hidden items-center gap-4'>
                        <EachUtils
                            of={LIST_NAVBAR}
                            render={(item, index) => (
                                <li key={index}>
                                    <a href={item.url} className='px-4 py-2'>{item.title}</a>
                                </li>
                            )}
                        />
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <InputSearchMovies />
                    <AccountMenu />
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar