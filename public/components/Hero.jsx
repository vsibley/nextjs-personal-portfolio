import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { useTheme } from 'next-themes';




export const Hero = () => {

  return (
    <div id='home' className='dark:bg-[#16161d] dark:text-white w-full h-full md:h-screen text-center font-mont'>
      <div className='pt-[6rem] md:pt-[5rem] max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

        <div>
          <p className='pt-10 uppercase tracking-wide text-gray-700 dark:text-white'>
            Hi, nice to meet you.

          </p>
          <h1 className='py-3 text-gray-700 dark:text-[#FAF9F6]'>I'm <span className='text-[#FF5733] dark:text-[#65afc4]'>Vanessa</span></h1>
          <p className='py-4 text-gray-500 max-w-[80%] m-auto dark:text-white'>
            I am a Front-End Developer with a passion for React and web3 technologies. I am dedicated to designing, building, and maintaining high-performance applications. Enthusiastic about working in collaborative team environments to find creative solutions for challenging engineering problems.
          </p>
          <div className='flex pt-5 items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="https://www.linkedin.com/in/vanessa-sibley/" target="_blank" aria-label="routes to linkedin page">
                <FaLinkedin />
              </a>

            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="https://github.com/vsibley" target="_blank" aria-label="routes to Github page"><FaGithub /></a>

            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="mailto:sibley.vanessas@gmail.com" target="_blank" aria-label="opens default mail browser to send email">
                <AiOutlineMail />
              </a>
            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="https://drive.google.com/file/d/1FYy7R1VspK3XYtLuPWeiSc7uqCj-yGSu/view?usp=sharing" target="_blank" aria-label="routes to resume">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}
