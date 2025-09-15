import React from 'react'
import InputMembership from '@/components/Modules/LandingPage/InputMembership/index.jsx'
import EachUtils from '@/utils/EachUtils.jsx'

import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms.js'
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from '@/constants/listJumbotron.js'
import { JUMBOTRON_IMAGE } from '@/constants/listAsset.js'


const Jumbotron = () => {
  const [language] = useAtom(languageAtom)
  return (
    <div className='mb-24 px-8'>
        <img 
            src={JUMBOTRON_IMAGE} 
            alt="Jumbotron-Netflix" 
            className='absolute top-0 left-0 object-cover h-[1000px] opacity-60'
        />
        <EachUtils 
            of={language == "id" ? LIST_JUMBOTRON_ID : LIST_JUMBOTRON_EN}
            render={(item, index) => (
                <div key={index} className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center px-4'>
                    <h1 className='text-5xl font-black text-white'>{item.title}</h1>
                    <p className='text-white text-xl'>{item.desc}</p>
                    <InputMembership />
                </div>
            )}
        />
    </div>
  )
}

export default Jumbotron