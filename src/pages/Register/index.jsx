import { JUMBOTRON_IMAGE } from '@/constants/listAsset'
import { emailAtom } from '@/jotai/atoms'
import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { GoChevronLeft } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import BgRegister from '../../../dist/bg-register.jpg'
import LogoChill from '../../../dist/chill-logo.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useAtom(emailAtom)
    const [password, setPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault()
        alert('register di klik')
    }

  return (
    <div>
        <>
            <img 
                src={BgRegister}
                className='min-h-screen bg-cover bg-center flex items-center justify-center'
            />
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-zinc-900/50 px-8 py-16 rounded-xl max-w-xl w-full'>
                <form className='flex flex-col gap-4'>
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <img src={LogoChill} alt="Chill Movie" className="mb-4" />
                        <h1 className="text-white text-4xl font-medium font-myfont">Daftar</h1>
                        <span className="text-white text-lg font-normal font-myfont">Selamat Datang!</span>
                    </div>
                    <div className='relative'>
                        <label className='font-semibold text-white'>Username</label>
                        <div className='relative mt-2'>
                            <input
                            
                                placeholder='Masukkan Username'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full p-4 bg-black/50 rounded-full border border-white/50 peer placeholder-transparent' 
                            />
                            <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>Username</label>
                        </div>
                    </div>
                    <div className='relative'>
                        <label className='font-semibold text-white'>Kata Sandi</label>
                        <div className='relative mt-2'>
                            <input 
                                placeholder='password'
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full p-4 bg-black/50 rounded-full border border-white/50 peer placeholder-transparent' 
                            />
                            <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)} 
                                className='absolute top-4.5 right-6 pl-4'
                            >
                                {showPassword ? <AiFillEyeInvisible size={22} className="text-gray-400 hover:text-gray-200 transition" /> : <AiFillEye size={22} className="text-gray-400 hover:text-gray-200 transition" />}
                            </button>
                        </div>
                    </div>
                    <div className='relative'>
                        <label className='font-semibold text-white'>Konfirmasi Kata Sandi</label>
                        <div className='relative mt-2'>
                            <input 
                                placeholder='password'
                                type={showConfirmPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                className='w-full p-4 bg-black/50 rounded-full border border-white/50 peer placeholder-transparent' 
                            />
                            <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>confirm password
                            </label>
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                                className='absolute top-4.5 right-6 pl-4'
                            >
                                {showConfirmPassword ? <AiFillEyeInvisible size={22} className="text-gray-400 hover:text-gray-200 transition" /> : <AiFillEye size={22} className="text-gray-400 hover:text-gray-200 transition" />}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-gray-400 font-semibold'>Sudah Punya Akun? 
                            <span 
                                onClick={() => navigate("/login")}
                                className='text-white font-bold cursor-pointer ml-2'
                            >
                                Masuk
                            </span>
                        </p>
                        <button
                            onClick={handleRegister}
                            className='bg-gray-500 py-3 w-full text-white font-bold rounded-full'
                        >
                            Daftar
                        </button>
                        <div className="flex items-center my-2">
                            <div className="flex-grow "></div>
                            <span className="px-4 text-gray-300">Atau</span>
                            <div className="flex-grow "></div>
                        </div>
                        <button
                            onClick={handleRegister}
                            className='bg-transparent border border-gray-500 py-3 w-full text-white font-bold rounded-full flex gap-2 items-center justify-center'
                        >
                            <img
                                src="../../../dist/google-icon.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Daftar Dengan Google
                        </button>
                    </div>
                </form>
            </div>
        </>
    </div>
  )
}

export default Register