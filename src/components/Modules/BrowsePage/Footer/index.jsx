import React from 'react'
import EachUtils from '@/utils/EachUtils.jsx'
import { LIST_GENRE, LIST_BANTUAN } from '@/constants/listFooter'


const Footer = () => {
    return (
        <footer className='w-full text-white bg-zinc-900 border-t-2 border-white p-8'>
            <div className="grid span-3 gap-y-10 px-8 py-10 sm:px-10 lg:px-16 w-full lg:grid-cols-[0.8fr_2fr] md:grid-cols-[1fr_2.5fr]">
                <div className="flex flex-col lg:justify-center space-y-6 lg:space-y-6">
                    <img src='../../../dist/chill-logo.svg' height="24" width="140" alt="Chill Logo" />
                    <p className="font-myfont text-gray-500 text-base font-normal">@2023 Chill All Rights Reserved</p>
                </div>
                <div className='grid grid-cols-[4fr_1fr] gap-8'>
                    <div className=''>
                        <h1 className='text-white font-bold'>Genre</h1>
                        <div>
                            <ul className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 py-8'>
                                <EachUtils
                                    of={LIST_GENRE}
                                    render={(item, index) => (
                                        <li key={index} className='text-md text-gray-500 '>
                                            <a href={item.url} >{item.title}</a>
                                        </li>
                                    )}
                                />
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white font-bold'>Bantuan</h1>
                        <div className=''>
                            <ul className='grid gap-4 py-8'>
                                <EachUtils
                                    of={LIST_BANTUAN}
                                    render={(item, index) => (
                                        <li key={index}>
                                            <a href={item.url} className='text-md text-gray-500 '>{item.title}</a>
                                        </li>
                                    )}
                                />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer