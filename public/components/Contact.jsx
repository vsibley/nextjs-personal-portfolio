import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  return (
      <div id='contact' className='w-full lg:h-screen '>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
              <p className='text-xl tracking-wider uppercase text-[#FF5733] py-4'>Contact</p>
              <h2 className='pb-4'>Let's chat</h2>
              <div className='grid lg:grid-cols-5 gap-8'>
                {/* LEFT SIDE */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                             <h2 className='py-2'>Vanessa Sibley</h2>
                             <p>Front-End Developer | Blockchain Web3</p>
                             <p>I am available for contract, freelance and full-time positions. </p>
                        </div>
                        <div>
                            <p className='pt-8'>Let's connect</p>
                            <div className='flex items-center justify-between py-4'>
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
                                    <label className='text-sm py-2 uppercase'>Name</label>
                                    <input className='border-2 rounded-xl p-3 flex border-gray-500' type="text" name="" id="" placeholder='NAME' />
                                </div>
                                <div className="flex flex-col">
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-xl p-3 flex border-gray-500' type="text" name="" id="" placeholder='PHONE NUMBER'/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                  <label className='uppercase text-sm py-2'>Email</label>
                                  <input className='border-2 rounded-xl p-3 flex border-gray-500' type="email" name="" id="" placeholder='EMAIL' />
                            </div>
                            <div className='flex flex-col py-2'>
                                  <label className='uppercase text-sm py-2'>Subject</label>
                                  <input className='border-2 rounded-xl p-3 flex border-gray-500' type="text" name="" id="" placeholder='subject' />
                            </div>
                            <div className='flex flex-col py-2'>
                                  <label className='uppercase text-sm py-2'>Message</label>
                                  <textarea className='border-2 rounded-xl p-3 flex border-gray-500' rows='3' type="text" name="" id="" placeholder='MESSAGE' />
                            </div>
                            <button className='w-full p-4 font-bold uppercase mt-4'>Send</button>
                        </form>

                    </div>

                </div>

              </div>
              <div className='flex justify-center py-10 '>
                <Link href='/'>
                      <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 duration-500'>
                          <HiOutlineChevronDoubleUp size={30} className='text-[#FF5733] font-extrabold' />
                </div>
                </Link>
              </div>
        </div>
    </div>
  )
}

export default Contact