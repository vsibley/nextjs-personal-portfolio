import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import techblog from '../assets/projects/techblog.png';
import portfolio from '../assets/projects/portfolio.png';

const Projects = () => {
    return (
        <div id='projects' className='w-full h-full px-4 dark:bg-black dark:text-white'>
            <div className='max-w-[1240px] mx-auto px-2 w-full max-h-full py-16'>

                <p className='text-xl tracking-wider uppercase text-[#FF5733] dark:text-[#395B64]  py-4'>Projects</p>
                <h2 className=' pb-6'>My most recent work</h2>
                <div className='grid md:grid-cols-2 gap-8 '>

                    <div className='shadow-2xl rounded-xl dark:shadow-gray-800'>
                        <div className='grid grid-cols-1 gap-4 justify-center items-center text-center '>
                            <Image className='rounded-xl' src={techblog} alt='' />
                            <div className='p-3'>
                                <p className='py-2'>Technologies Used:<span className='font-bold'> React.js, Next.js, Tailwind CSS, GraphQL.</span></p>
                                <p>I Utilizing GraphQL to retrieve post data by configuring
                                    React Components to make GROQ Query API calls based
                                    on user interaction.</p>
                                <div className='flex flex-cols-2 items-center justify-center gap-10 p-3 pt-6'>
                                    
                                        <Link href='https://www.tech-ness.com/'>
                                        <button className='dark:bg-[#395B64] py-4 px-5 md:px-8 font-bold hover:scale-110 ease-in duration-300' > 
                                        Demo
                                        </button>
                                        </Link>
                                        
                                    <button className='dark:bg-[#395B64]  py-4 px-5 md:px-8 font-bold hover:scale-110 ease-in duration-300'>
                                        <Link href='https://github.com/vsibley/personal-blog-techness'>
                                        Code</Link> 
                                        </button>
                                            
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className='shadow-2xl rounded-xl dark:shadow-gray-800'>
                        <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                            <Image className='rounded-xl' src={portfolio} alt='' />
                            <div className='p-3'>
                                <p className='py-2'>Technologies Used:<span className='font-bold'> React.js, Next.js, Tailwind CSS. </span></p>
                                <p>This is the first portfolio I built with React to showcase the skills I learned and projects I've completed.</p>
                                <div className='flex flex-cols-2 pt-6 items-center justify-center gap-10 p-3'>
                                    <button className='dark:bg-[#395B64]  py-4 px-5 md:px-8 font-bold hover:scale-110 ease-in duration-300'>
                                        <a href="https:/vanessasibley-reactportfolio.netlify.app/">
                                            Demo
                                        </a>
                                    </button>
                                    <button className='dark:bg-[#395B64]  py-4 px-5 md:px-8 font-bold hover:scale-110 ease-in duration-300 '>
                                        <a href="https://github.com/vsibley/first-react-portfolio">

                                        Code
                                        </a>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects