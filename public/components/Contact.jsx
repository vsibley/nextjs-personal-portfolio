import React, { useRef } from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_auvzot8', 'template_jldzpwk', form.current, 'rkArMhE9ZKapPd4ND')
            .then((result) => {
                console.log(result.text);
                toast.success('Message has been sent! 😁')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='w-full lg:max-h-screen px-4 dark:bg-[#16161d] dark:text-[#FAF9F6]'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-wider uppercase text-[#FF5733] dark:text-[#395B64]  dark:bg-[#16161d] py-4'>Contact</p>
                <h2 className='pb-4'>Drop me a message</h2>
                <div className='grid lg:grid-cols-5 gap-8  dark:bg-[#16161d]'>
                    {/* LEFT SIDE */}
                    <div className='col-span-3 lg:col-span-2 pt-5 align-middle w-full h-full shadow-xl shadow-gray-500 dark:shadow-black rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <h2 className='py-2'>Vanessa Sibley</h2>
                                <p className='py-2'>Front-End Developer | Web3</p>
                            </div>
                            <div>
                                <p className='pt-10 pb-2'>Let's connect</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-xl shadow-lg shadow-gray-400 dark:shadow-black p-5 cursor-pointer hover:scale-110 duration-500'>
                                        <a href="https://www.linkedin.com/in/vanessa-sibley/" target="_blank">
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                    <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 dark:shadow-black duration-500'>
                                        <a href="https://github.com/vsibley" target="_blank"><FaGithub /></a>
                                        
                                    </div>
                                    <div className='rounded-xl shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 dark:shadow-black duration-500'>
                                        <a href="mailto:sibley.vanessas@gmail.com" target="_blank">
                                            <AiOutlineMail /></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-500 dark:shadow-black lg:p-4 rounded-xl'>
                        <div className='p-4'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid gap-4 py-2 w-full">
                                    <div className="flex flex-col">
                                        <label className='text-sm py-2 uppercase'>Name</label>
                                        <input className='border-2 rounded-xl p-3 flex border-gray-500' type="text" name="user_name" id="" placeholder='NAME' />
                                    </div>

                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-xl p-3 flex border-gray-500' type="email" name="user_email" id="" placeholder='EMAIL' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-xl p-3 flex border-gray-500' rows='3' type="text" name="message" id="message" placeholder='MESSAGE' />
                                </div>
                               
                                <input type="submit" value='SEND' className='w-full p-4 font-bold mt-4 shadow-xl shadow-gray-400 rounded-xl bg-[#FF5733] dark:bg-[#395B64] dark:shadow-none dark:text-[#FAF9F6] text-black hover:scale-105' />
                                    
                            </form>

                        </div>

                    </div>

                </div>
                <div className='flex justify-center py-10 '>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-black p-5 cursor-pointer hover:scale-110 duration-500'>
                            <HiOutlineChevronDoubleUp size={30} className='text-[#FF5733] dark:text-[#395B64] font-extrabold' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact