import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BgRegister from '../../../dist/bg-register.jpg'
import LogoChill from '../../../dist/chill-logo.png'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { auth } from '@/utils/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setEmailInput } from '@/store/redux/authSlice'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmailLocal] = useState('')
  const [password, setPasswordLocal] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    if (!password || !confirmPassword) {
      setError('Password dan Konfirmasi Password wajib diisi')
      return
    }
    if (password !== confirmPassword) {
      setError('Konfirmasi password tidak sama')
      return
    }
    try {
      const register = await createUserWithEmailAndPassword(auth, email, password)
      if (register) {
        toast('register success')
        setTimeout(() => navigate('/login'), 2000)
      }
    } catch (error) {
      toast(error.message)
    }
  }

  return (
    <div>
      <ToastContainer position='top-center' theme='dark' autoClose={2000} />
      <img src={BgRegister} className='min-h-screen bg-cover bg-center flex items-center justify-center' />
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 bg-zinc-900/50 px-8 py-16 rounded-xl max-w-xl w-full'>
        <form className='flex flex-col gap-4'>
          <div className='flex flex-col items-center gap-2 mb-4'>
            <img src={LogoChill} alt='Chill Movie' className='mb-4' />
            <h1 className='text-white text-4xl font-medium font-myfont'>Daftar</h1>
            <span className='text-white text-lg font-normal font-myfont'>Selamat Datang!</span>
          </div>
          <div className='relative'>
            <label className='font-semibold text-white'>Username</label>
            <div className='relative mt-2'>
              <input
                placeholder='Masukkan Username'
                type='email'
                value={email}
                onChange={(e) => {
                  setEmailLocal(e.target.value)
                  dispatch(setEmailInput(e.target.value))
                }}
                className='w-full p-4 bg-black/50 rounded-full border border-white/50 peer placeholder-transparent'
              />
              <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>
                Username
              </label>
            </div>
          </div>
          <div className='relative'>
            <label className='font-semibold text-white'>Kata Sandi</label>
            <div className='relative mt-2'>
              <input
                placeholder='password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPasswordLocal(e.target.value)}
                className='w-full p-4 bg-black/50 rounded-full border border-white/50 peer placeholder-transparent'
              />
              <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>
                password
              </label>
              <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute top-4.5 right-6 pl-4'>
                {showPassword ? <AiFillEyeInvisible size={22} className='text-gray-400 hover:text-gray-200 transition' /> : <AiFillEye size={22} className='text-gray-400 hover:text-gray-200 transition' />}
              </button>
            </div>
          </div>
          <div className='relative'>
            <label className='font-semibold text-white'>Konfirmasi Kata Sandi</label>
            <div className='relative mt-2'>
              <input
                placeholder='confirm password'
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-4 bg-black/50 rounded-full border border-white/50 peer placeholder-transparent'
              />
              <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-3.5 peer-focus:-top-[6px] transition-all text-lg -z-10'>
                confirm password
              </label>
              <button
                type='button'
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className='absolute top-4.5 right-6 pl-4'
              >
                {showConfirmPassword ? <AiFillEyeInvisible size={22} className='text-gray-400 hover:text-gray-200 transition' /> : <AiFillEye size={22} className='text-gray-400 hover:text-gray-200 transition' />}
              </button>
            </div>
            {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-400 font-semibold'>
              Sudah Punya Akun?{' '}
              <span onClick={() => navigate('/login')} className='text-white font-bold cursor-pointer ml-2'>
                Masuk
              </span>
            </p>
            <button onClick={handleRegister} className='bg-gray-500 py-3 w-full text-white font-bold rounded-full'>
              Daftar
            </button>
            <div className='flex items-center my-2'>
              <div className='flex-grow'></div>
              <span className='px-4 text-gray-300'>Atau</span>
              <div className='flex-grow'></div>
            </div>
            <button
              onClick={handleRegister}
              className='bg-transparent border border-gray-500 py-3 w-full text-white font-bold rounded-full flex gap-2 items-center justify-center'
            >
              <img src='../../../dist/google-icon.svg' alt='Google' className='w-5 h-5' />
              Daftar Dengan Google
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register