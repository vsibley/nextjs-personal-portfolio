import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-wider text-[#FF5733]'>About</p>
                    <h2 className='py-4'>Who I am</h2>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sapiente repudiandae architecto.</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus at suscipit doloribus neque enim esse aliquam perferendis maxime maiores delectus obcaecati ut quas, minima recusandae incidunt sequi expedita nesciunt iste et. Ratione veritatis dolore, officia exercitationem quam aut possimus et!</p>
                    <p className='py-2 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia neque deserunt! Exercitationem repellat fugiat dolores sunt cum impedit eligendi!</p>
                </div>
                <div className='flex w-full h-auto m-auto shadow-xl shadow-gray-500 rounded-xl justify-center items-center hover:scale-110 ease-in duration-200'>
                    <img className='rounded-xl' src="../assets/headshot.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About