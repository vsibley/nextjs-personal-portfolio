import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 px-4'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
              <p className='text-xl tracking-wider uppercase text-[#FF5733] py-4'>Skills</p>
            <h2 className='pb-8'>Technologies I Know</h2>
            <div className='grid md:grid-cols-2 gap-8'>


                {/* Skills Cards */}
                <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                    <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
              <p className='text-2xl font-bold tracking-wider py-4 uppercase'>Web 2 Skills 🌐 </p>
                              <p className='text-gray-600'>HTML, CSS, JavaScript, Typescript, React, Next.js, Node.js, GraphQL, Tailwind CSS, Bootstrap, Git, Github, CI/CD skill, Sass/Scss</p>
                    </div>
                </div>

                  <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
                      <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
              <p className='text-2xl font-bold tracking-wider py-4 uppercase'>Web 3 Skills 🔗 </p>
              <p className='text-gray-600 font-medium'>Solidity, Hardhat, Ganache, Ethers.js, SDK, Remix, Blockchain basics. </p>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Skills