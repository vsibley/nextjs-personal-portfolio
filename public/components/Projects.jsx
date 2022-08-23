import React from 'react'

const Projects = () => {
    return (
        <div className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-wider uppercase text-[#FF5733] py-4'>Skills</p>
                <h2 className='py-4 pb-8'>Technologies I Know</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>


                    {/* Skills Cards */}
                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                        <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                            <p className='text-2xl font-bold tracking-wider py-4'>Web 2 Skills</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores alias libero corrupti voluptates cum, recusandae eius, earum velit ullam eos rerum unde! Fugiat, architecto?</p>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                        <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
                            <p className='text-2xl font-bold tracking-wider py-4'>Web 3 Skills</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores alias libero corrupti voluptates cum, recusandae eius, earum velit ullam eos rerum unde! Fugiat, architecto?</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects