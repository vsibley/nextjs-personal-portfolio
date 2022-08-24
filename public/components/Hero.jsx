import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import { useTheme } from 'next-themes';



export const Hero = () => {

  return (
    <div id='home' className='dark:bg-black dark:text-white w-full h-full md:h-screen text-center font-mont'>
      <div className='pt-[6rem] md:pt-[5rem] max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

        <div>
          <p className='pt-10 uppercase tracking-wide text-gray-700 dark:text-white'>
            Hi, nice to meet you.
          </p>
          <h1 className='py-4 text-gray-700 dark:text-white'>I'm <span className='text-[#FF5733]'>Vanessa</span></h1>
          <h2 className='pt-2 text-gray-700 dark:text-white text-2xl'>A Front-End Developer</h2>
          <h3 className='text-gray-700 text-lg'>with interest in Blockchain + Web3 Technologies</h3>
          <p className='py-4 text-gray-500 max-w-[80%] m-auto'>
            I am a Front-End Developer with a passion for React and web3 technologies. I am dedicated to
            designing, building, and maintaing high performance
            applications. Enthusiastic about working in collaborative team environments to find creative
            solutions for challenging engineering problems.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="https://www.linkedin.com/in/vanessa-sibley/">
                <FaLinkedin />
              </a>

            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="https://github.com/vsibley"><FaGithub /></a>

            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="mailto:sibley.vanessas@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <a href="https://drive.google.com/file/d/1FYy7R1VspK3XYtLuPWeiSc7uqCj-yGSu/view?usp=sharing">
                <BsFillPersonLinesFill />
              </a>
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}
