import React from 'react'
import EachUtils from '@/utils/EachUtils'
import DefaultButton from '@/components/Modules/LandingPage/DefaultButton'

import { useAtom } from 'jotai'
import { emailAtom, languageAtom } from '@/jotai/atoms'
import { LIST_CTA_EN, LIST_CTA_ID } from '@/constants/listCTA.js'
import { useNavigate } from 'react-router-dom'

const InputMembership = () => {
  const [language] = useAtom(languageAtom)
  const [, setEmail] = useAtom(emailAtom)
  const navigate = useNavigate()

  const handleEmail = (e) => {
    e.preventDefault()
    navigate("/register")
  }

  return (
    <form>
        <EachUtils 
            of={language == "id" ? LIST_CTA_ID : LIST_CTA_EN}
            render={(item, index) => (
                <div key={index} className=''>
                    <h3 className='text-white text-xl'>{item.title}</h3>
                    <div className='relative flex justify-center items-center gap-2 py-4'>
                        <input 
                            type='email'
                            placeholder={item.labelInput}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent' 
                        />
                        <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[16px] transition-all text-lg'>{item.labelInput}</label>
                        <DefaultButton 
                            onClick={handleEmail}
                            text={item.buttonSubmit} 
                            isArrowIcon={true}
                            styles='flex py-4 w-40 flex justify-center items-center gap-0 text-xl'
                        />
                    </div>
                </div>
            )}
        />
    </form>
  )
}

export default InputMembership