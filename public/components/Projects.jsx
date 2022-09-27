import Image from 'next/image';
import {React} from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Casa Housing',
            img: '/../assets/projects/casaHousing.png',
            demo: 'https://casa-project.vercel.app/',
            code: 'https://github.com/vsibley/github-finder-main',
            route: '/casahousing',
            disc: 'Casa is a website designed for users to post their properties for sale or to rent. This project has features that allow you to sign up with Google Oauth, Geolocation, React Hooks, Custom Hooks, full CRUD capablities',
        },
        {
            name: 'Github Finder',
            img: '/../assets/projects/githubFinder.png',
            demo: 'https://github-finder-3021w2xvk-vsibley.vercel.app/',
            route: '/githubfinder',
            code: 'https://github.com/vsibley/github-finder-main',
            tech: 'React.js, Github API, Tailwind CSS, daisyUI, Vercel.',
            disc: 'The Github Finder application is a minimalistic dark themed search tool to display Github users and their information using Github API.',
        },
        {
            name: 'Blog',
            img: '/../assets/projects/techblog.png',
            demo: 'https://www.tech-ness.com/',
            code: 'https://github.com/vsibley/personal-blog-techness',
            route: '/technessblog',
            tech: 'React.js, Next.js, Tailwind CSS, GraphQL, Netlify.',
            disc: 'My blog was built with Next.js to increase SEO.',
        },
        {
            name: 'Personal Portfolio',
            img: '/../assets/projects/portfolio.png',
            route: '/portfolio',
            demo: 'https://vanessasibley-reactportfolio.netlify.app/',
            code: 'https://github.com/vsibley/github-finder-main',
            tech: 'React.js, Github API, Tailwind CSS, daisyUI, Vercel.',
            disc: 'This is the first portfolio I built with React to showcase the skills I learned and projects I have completed.',
        },
    ]

    return (
        <div id='projects' className='w-full min-h-screen px-4 dark:bg-[#16161d] dark:text-[#FAF9F6]'>
            <div className='max-w-[1240px] mx-auto px-2 w-ful py-16'>

                <p className='text-xl tracking-wider uppercase text-[#684889] dark:text-[#65afc4]  py-4'>Projects</p>
                <h2 className=' py-2 pb-6'>My most recent work</h2>
                <div className='grid md:grid-cols-2 gap-8 '>


                    {
                        projects.map(({ name, img, demo, code, tech, disc, route }) => (
                            <div key={name} className='grid grid-cols-1 gap-4 justify-center items-center text-center p-4 shadow-2xl rounded-xl dark:shadow-black'>
                                <img
                                    className='rounded-xl object-cover' src={img} alt='' />

                                <div>
                                    <p><span className='text-2xl'> {name}</span></p>
                                    <div className='flex flex-cols-2 items-center justify-center gap-10 p-3 pt-6'>

                                        <a href={route} target="_blank">
                                            <button className='bg-[##684889] dark:bg-[#65afc4] py-4 px-5 btn-wide hover:scale-110 ease-in duration-300' aria-label="Demo">
                                                More Info
                                            </button>
                                        </a>


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