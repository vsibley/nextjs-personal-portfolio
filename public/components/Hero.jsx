import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'


export const Hero = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='pt-[8rem] md:pt-[5rem] max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

        <div>
          <p className='pt-10 uppercase tracking-wide text-gray-700'>
            Thanks for joining me
          </p>
          <h1 className='py-4 text-gray-700'>Hey, I'm <span className='text-[#FF5733]'>Vanessa</span></h1>
          <h2 className='py-2 text-gray-700'>A Front-End Web Dev</h2>
          <h2 className='py-2 text-gray-700'>Blockchain + Web3</h2>
          <p className='py-4 text-gray-500 max-w-[70%] m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ea quis facere recusandae reprehenderit itaque corporis nisi voluptas quaerat voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates aliquid non aut veniam deleniti quasi reiciendis eos et provident!</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <FaLinkedin />
            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <FaGithub />
            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <FaInstagram />
            </div>
            <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
              <BsFillPersonLinesFill />
            </div>
          </div>
     




        </div>
      </div>
    </div>
  )
}
