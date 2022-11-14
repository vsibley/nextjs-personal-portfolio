import React from 'react'
import portfolio from '../public/assets/projects/portfolio.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const technessblog = () => {
    return (


        <div className='pt-[7rem] md:pt-[5rem] justify-center px-4 max-w-[1240px] min-h-screen mx-auto p-2 md:grid-cols-5 gap-8 dark:text-gray-300'>
            <div className='mb-2 md:pb-5'>
                <h2 className='pb-1'>First React Portfolio</h2>
                <h3>React JS / Tailwind / DaisyUI</h3>
            </div>
            <div className='flex shadow-xl rounded-2xl object-cover justify-self-center'>

                <Image src={portfolio} alt="screenshot of casa property" height={1200} width={1200} className='object-cover rounded-3xl' />
            </div>

            <div className=''>
                <div className='col-span-4'>

                    <div className='flex items-center justify-between'>

                        <h2 className='pt-6 py-2 text-2xl md:text-4xl'>Overview</h2>

                        <Link href='/#projects'>
                            <p className='underline cursor-pointer hover:text-[#684889] hover:scale-110'>Back</p>
                        </Link>
                    </div>
                    <p>
                        This is the first portfolio I built with React to showcase the skills I learned and projects I have completed.

                    </p>
                    <a
                        href='https://github.com/vsibley/github-finder-main'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 text-white mt-4 mr-8 hover:scale-105'>Code</button>
                    </a>
                    <a
                        href='https://vanessasibley-reactportfolio.netlify.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8  text-white py-2 mt-4 hover:scale-105'>Demo</button>
                    </a>

                    <div className="pt-[3rem]  mx-auto">

                        <div className='col-span-4 md:col-span-1 shadow-lg mb-[7rem] shadow-gray-400 dark:shadow-black  rounded-xl pt-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Technologies</p>
                                <div className='grid grid-cols-2 md:grid-cols-3 items-center'>
                                     <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> React
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Tailwind
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Javascript
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Next.js
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> GraphQL
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Netlify
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};


export default technessblog