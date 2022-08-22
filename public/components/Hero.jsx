import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/faa';

export const Hero = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='mw-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase tracking-wide text-gray-700'>
            Thanks for joining me
          </p>
          <h1 className='py-4 text-gray-700'>Hey, I'm <span className='text-[#FF5733]'>Vanessa</span></h1>
          <h2 className='py-2 text-gray-700'>A Front-End Web Dev</h2>
          <h2 className='py-2 text-gray-700'>Blockchain + Web3</h2>
          <p className='py-4 text-gray-500 max-w-[70%] m-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ea quis facere recusandae reprehenderit itaque corporis nisi voluptas quaerat voluptate. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis voluptates aliquid non aut veniam deleniti quasi reiciendis eos et provident!</p>
          <div className='flex max-w-[330px] items-center justify-between m-auto py-4'>
            <div>
              <FaLinkedin />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
