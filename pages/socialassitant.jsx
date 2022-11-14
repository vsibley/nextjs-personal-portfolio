import React from 'react'
import social from '../public/assets/projects/socialapp.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const socialassitant = () => {
    return (


        <div className='pt-[7rem] md:pt-[5rem] justify-center px-4 max-w-[1240px] min-h-screen mx-auto p-2 md:grid-cols-5 gap-8  text-gray-800 dark:text-gray-300'>
            <div className='mb-2 md:pb-5'>
                <h2 className='pb-1'>Social Assitant</h2>
                <h3>React JS / Express / Node.js / MongoDB / Redux</h3>
            </div>
            <div className='flex shadow-xl rounded-2xl object-cover justify-self-center'>

                <Image src={social} alt="screenshot of casa property" height={1200} width={1200} className='object-cover rounded-3xl' />
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
                        This application is build using React, Node, Express, MongoDB and Redux toolkit. The social media assistant is a website that allows you to store all your social media collaboration info in one place. <br/><br/>
                        <span className='font-bold'>
                            In this project I demonstrated a working knowledge of:</span>
                        </p>
                        <ul className='list-disc'>
                        <li>Abillity to architect a RESTful API utilizing ExpressJS as the server with lightweight middleware to handle security, logging, cors & authentication between client-side applications while developing endpoints following MVC pattern
</li>
                        <li>Securely hashed and salted user’s passwords by utilizing Bcrypt’s secure hashing algorithm and custom iteration count in ExpressJS Middleware all prior to saving any sensitive user information.</li>
                        <li>Implemented JWT’s stateless authentication, reducing unnecessary server calls and persisted user session via storing client token.
</li>
                        </ul>
                    <a
                        href='https://github.com/vsibley/support-desk'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 text-white mt-4 mr-8 hover:scale-105'>Code</button>
                    </a>
                    <a
                        href='https://socialmediasupport.herokuapp.com/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8  text-white py-2 mt-4 hover:scale-105'>Demo</button>
                    </a>

                    <div className="pt-[3rem]  mx-auto">

                        <div className='col-span-4 md:col-span-1 shadow-lg shadow-gray-400 dark:shadow-black  mb-[7rem] rounded-xl pt-4'>
                            <div className='p-2'>
                                <p className='text-center font-bold pb-2'>Technologies</p>
                                <div className='grid grid-cols-2 md:grid-cols-3 items-center '>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> React
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Node.js
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Javascript
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Express.js
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> MongoDB
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> JWT
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Axios
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Redux
                                    </p>
                                    <p className=' text-gray-800 dark:text-gray-300 first-line:py-2 flex items-center'>
                                        <RiRadioButtonFill className='pr-1' /> Heroku
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


export default socialassitant