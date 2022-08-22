import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutline, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const changeNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='/../public/assets/logo.png' alt='vs logo' width='125' height='125' />
                <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm hover:border-b border-gray-700'>Home</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm hover:border-b border-gray-700'>About</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm hover:border-b border-gray-700'>Skills</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm hover:border-b border-gray-700'>Projects</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm hover:border-b border-gray-700'>Contact</li>
                </Link>
            </ul>
                    <div className='md:hidden' onClick={changeNav}>
                <AiOutlineMenu size={25}/>
            </div>
                </div>
            </div>

            {/* Side-Mobile Menu  */}
            
            <div className={nav ? 'md:hidden fixed left-0 top-0 right-0 w-full h-screen bg-black/70' : ''}>
                <div
                    className={
                        nav
                            ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            
                            <Image  src='/../public/assets/logo.png' alt='logo' height="87" width='87'/> 
                            <div className='rounded-full shadow-lg p-3 shadow-gray-500 cursor-pointer' onClick={changeNav}>
                                <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Hello, I'm glad you're here!</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        {/* Social Media Connect */}
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest'>Let's connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaLinkedin />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaInstagram />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar