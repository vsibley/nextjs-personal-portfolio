import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='w-full lg:h-screen '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
              <p className='text-xl tracking-wider uppercase text-[#FF5733] py-4'>Contact</p>
              <h2 className='pb-4'>Let's chat</h2>
              <div className='grid lg:grid-cols-5 gap-8'>
                {/* LEFT SIDE */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-'>
                    <div className='lg:p-4 h-full'>
                        <div>
                             <h2 className='py-2'>Vanessa Sibley</h2>
                             <p>Front-End Developer | Blockchain Web3</p>
                             <p>I am available for contract, freelance and full-time positions. </p>
                        </div>
                        <div>
                            <p className='pt-8'>Let's connect</p>
                            <div className='flex items-center justify-between py-4 scroll-px-52'>
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
                                      <AiOutlineMail />
                                  </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-500 lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className="grid md:grid-cols-2 gap-4 py-2 w-full">
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-xl p-3 flex border-gray-500' type="text" name="" id="" placeholder='Name' />
                                </div>
                            </div>

                        </form>

                    </div>

                </div>

              </div>

        </div>
    </div>
  )
}

export default Contact