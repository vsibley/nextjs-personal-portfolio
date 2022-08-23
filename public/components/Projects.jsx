import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import techblog from '../assets/projects/techblog.png';
import portfolio from '../assets/projects/portfolio.png';

const Projects = () => {
    return (
        <div className='w-full h-screen'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-wider uppercase text-[#FF5733] py-4'>Projects</p>
                <h2 className='pb-4'>My most recent work</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <div className='shadow-2xl rounded-xl'>
                        <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                            <Image className='rounded-xl' src={techblog} alt='' />
                            <div className='p-3'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores alias libero corrupti voluptates cum, recusandae eius, earum velit ullam eos rerum unde! Fugiat, architecto?</p>
                                <div className='flex flex-cols-2 items-center justify-center gap-10 p-3'>
                                    <button className='p-4 font-bold hover:scale-110 ease-in duration-300'>Demo</button>
                                    <button className='p-4 font-vold hover:scale-110 ease-in duration-300'>Code</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className='shadow-2xl rounded-xl'>
                        <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                            <Image className='rounded-xl' src={portfolio} alt='' />
                            <div className='p-3'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores alias libero corrupti voluptates cum, recusandae eius, earum velit ullam eos rerum unde! Fugiat, architecto?</p>
                                <div className='flex flex-cols-2 items-center justify-center gap-10 p-3'>
                                    <button className='p-4 font-bold hover:scale-110 ease-in duration-300'>Demo</button>
                                    <button className='p-4 font-vold hover:scale-110 ease-in duration-300'>Code</button>
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