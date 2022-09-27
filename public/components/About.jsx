import React from 'react'
import { useTheme } from 'next-themes';

const About = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div id='about' className='w-full md:h-full p-2 flex items-center py-16 md:py-0  px-4 font-mont dark:bg-[#16161d] dark:text-[#FAF9F6]'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-wider text-[#684889] dark:text-[#65afc4]'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600 dark:text-[#FAF9F6]'>I'm an extroverted, overly caffeinated Software Developer. I'm dedicated to being a force of positivity for those I interact with in my professional and personal life. </p>
                    <p className='py-2 text-gray-600 dark:text-[#FAF9F6]'>
                        I am naturally curious and love to continue learning. I'm consistently evolving my skills and always looking to level up and learn new technologies.
                    </p>
                    <p className='py-2 text-gray-600 dark:text-[#FAF9F6]'>My journey started when I initially signed up for a coding Bootcamp to see if I had an interest in CSS, HTML and JavaScript.Since then I have continued to teach myself skills such as React, Next.JS, Solidity, Hardhat and various other technologies. </p>
                    <p className='py-2 text-gray-600 dark:text-[#FAF9F6]'>I would love to connect and chat more about my journey and other skills I've developed along the way.</p>
                </div>
                <div className='flex w-full h-auto m-auto shadow-xl shadow-gray-500 dark:shadow-black rounded-xl justify-center items-center md:hover:scale-110 ease-in duration-200'>
                    <img className='rounded-xl' src="../assets/headshot.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About