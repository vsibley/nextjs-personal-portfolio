import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutline, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { MdOutlineDarkMode, MdBrightness2 } from 'react-icons/md';
import { VscColorMode } from 'react-icons/vsc';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const { theme, setTheme } = useTheme();

    
    useEffect(() => {
        const scrollShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', scrollShadow);
    }, []);


    const changeNav = () => {
        setNav(!nav)
    }

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-md bg-[#ecf0f3] dark:shadow-black dark:bg-[#16161d] dark:text-white z-[100]' : 'fixed w-full h-20  dark:bg dark:text-white z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <a href='/'>
                    <Image src='/assets/logo/logo.png' alt='vs logo' width='85' height='85'/>
                </a>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700 dark:text-white'>Contact</li>
                        </Link>
                        <li className='ml-10 text-sm hover:border-b border-gray-700 dark:text-white'>
                            <button className='bg-white' onClick={() => setTheme(theme === 'dark' ? 'light': 'dark')} >
                                <VscColorMode className='dark:text-white'/>
                            </button>
                        </li>
                    </ul>
                    <div className='md:hidden' onClick={changeNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Side-Mobile Menu  */}

            <div className={nav ? 'md:hidden fixed left-0 top-0 right-0 w-full h-screen bg-black/70 dark:text-white' : ''}>
                <div
                    className={
                        nav
                            ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#16161d] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full justify-end pb-2'>
                            <div className='rounded-full shadow-lg p-3 shadow-gray-500 cursor-pointer dark:text-[#FAF9F6] dark:shadow-black dark:bg-[#16161d]' onClick={changeNav}>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-3'>

                        </div>
                    </div>
                    <div className='py-2 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                            <li className='py-4 text-sm'>
                                <button className='bg-white' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
                                    <VscColorMode size={25} className='dark:text-[#FAF9F6]'/>
                                </button>
                            </li>
                        </ul>
                        {/* Social Media Connect */}
                        <div className='py-20 '>
                            <p className='uppercase tracking-widest'>Let's connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <a href="https://www.linkedin.com/in/vanessa-sibley/"><FaLinkedin /></a>

                                </div>
                                <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <a href="https://github.com/vsibley">
                                        <FaGithub />
                                    </a>

                                </div>
                                <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <a href="https://www.instagram.com/gitinit.ness/?igshid=YmMyMTA2M2Y%3D">
                                        <FaInstagram />
                                        
                                    </a>
                                    
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