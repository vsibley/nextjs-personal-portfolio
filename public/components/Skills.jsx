import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2 px-4 dark:text-white dark:bg-black dark:shadow-none'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-screen'>
        <p className='text-xl tracking-wider uppercase text-[#FF5733] dark:text-[#395B64] py-4 '>Skills</p>
            <h2 className='py-4'>Technologies I Know</h2>
        <p className='pb-8'>My skills are versed in technoogies enabeling me to take a product from conseption and turn it into a final product providing exceptional UX/UI and code architecture. </p>
            <div className='grid md:grid-cols-2 gap-8'>


                {/* Skills Cards */}
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 dark:border-gray-500 dark:border-2'>
                    <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
              <p className='text-2xl font-bold tracking-wider py-4 uppercase'>Web 2 Skills 🌐 </p>
              <p className='text-gray-600 dark:text-white tracking-wide'>HTML, CSS, JavaScript, Typescript, React, Next.js, Node.js, GraphQL, Tailwind CSS, Bootstrap, Git, Github, CI/CD skill, Sass/Scss, SEO, Figma.</p>
                    </div>
                </div>

                  <div className='p-6 shadow-xl dark:shadow-none  dark:border-2 dark:border-gray-500 rounded-xl hover:scale-110 ease-in duration-300'>
                      <div className='grid grid-cols-1 gap-4 justify-center items-center text-center'>
              <p className='text-2xl font-bold tracking-wider py-4 uppercase'>Web 3 Skills 🔗 </p>
              <p className='text-gray-600 dark:text-white tracking-wide '>Blockchain Basics, Solidity, Hardhat, Ganache, Ethers.js, SDK, Remix, Major DeFi Protocols. </p>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default Skills