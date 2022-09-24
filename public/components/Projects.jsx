import Image from 'next/image';
import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Casa Housing',
            img: '/../assets/projects/casaHousing.png',
            demo: 'https://casa-project.vercel.app/',
            code: 'https://github.com/vsibley/github-finder-main',
            tech: 'React.js, Firebase, Tailwind CSS, daisyUI, Vercel.',
            disc: 'Casa is a website designed for users to post their properties for sale or to rent. This project has features that allow you to sign up with Google Oauth, Geolocation, React Hooks, Custom Hooks, full CRUD capablities',
        },
        {
            name: 'Github Finder',
            img: '/../assets/projects/githubFinder.png',
            demo: 'https://github-finder-3021w2xvk-vsibley.vercel.app/',
            code: 'https://github.com/vsibley/github-finder-main',
            tech: 'React.js, Github API, Tailwind CSS, daisyUI, Vercel.',
            disc: 'The Github Finder application is a minimalistic dark themed search tool to display Github users and their information using Github API.',
        },
        {
            name: 'Blog',
            img: '/../assets/projects/techblog.png',
            demo: 'https://www.tech-ness.com/',
            code: 'https://github.com/vsibley/personal-blog-techness',
            tech: 'React.js, Next.js, Tailwind CSS, GraphQL, Netlify.',
            disc: 'My blog was built with Next.js to increase SEO.',
        },
        {
            name: 'Personal Portfolio',
            img: '/../assets/projects/portfolio.png',
            demo: 'https://vanessasibley-reactportfolio.netlify.app/',
            code: 'https://github.com/vsibley/github-finder-main',
            tech: 'React.js, Github API, Tailwind CSS, daisyUI, Vercel.',
            disc: 'This is the first portfolio I built with React to showcase the skills I learned and projects I have completed.',
        },
    ]
    
    return (
        <div id='projects' className='w-full h-full px-4 dark:bg-[#16161d] dark:text-[#FAF9F6]'>
            <div className='max-w-[1240px] mx-auto px-2 w-full max-h-full py-16'>

                <p className='text-xl tracking-wider uppercase text-[#FF5733] dark:text-[#395B64]  py-4'>Projects</p>
                <h2 className=' py-2 pb-6'>My most recent work</h2>
                <div className='grid md:grid-cols-2 gap-8 '>

                    {/* CARD ONE  */}

                    {
                        projects.map(({name, img, demo, code, tech, disc}) => (
                            <div key={name} className='grid grid-cols-1 gap-4 justify-center items-center text-center p-4 shadow-2xl rounded-xl dark:shadow-black'>
                                <img
                                 className='rounded-xl object-cover' src={img} alt=''/>

                                <div className='p-3'>
                                    <p className='py-2'><span className='font-bold'> {tech}</span></p>
                                    <p>{disc}</p>
                                    <div className='flex flex-cols-2 items-center justify-center gap-10 p-3 pt-6'>

                                        <a href={demo} target="_blank">
                                            <button className='bg-[##FF5733] dark:bg-[#395B64] py-4 px-5 font-bold hover:scale-110 ease-in duration-300' aria-label="Demo">
                                                Demo
                                            </button>
                                        </a>

                                        <button className='dark:bg-[#395B64]  py-4 px-5 font-bold hover:scale-110 ease-in duration-300' aria-label="code">
                                            <a href={code} target="_blank">
                                                Code</a>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }


                    <div className=''>
                        
                    </div>

                 
                </div>
            </div>
        </div>
    )
}

export default Projects