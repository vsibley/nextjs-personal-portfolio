import React from 'react'
import casaHousing from '../public/assets/projects/casaHousing.png'
import Image from 'next/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'

const casahousing = () => {
  return (


    <div className='pt-[7rem] md:pt-[5rem] justify-center px-4 max-w-[1240px] min-h-screen mx-auto p-2 md:grid-cols-5 gap-8'>
      <div className='mb-2 md:pb-5'>
        <h2 className='pb-1'>Property Finders</h2>
        <h3>React JS / Tailwind / Firebase</h3>
      </div>
      <div className='flex shadow-xl rounded-2xl object-cover justify-self-center'>

        <Image src={casaHousing} alt="screenshot of casa property" height={1200} width={1200} className='object-cover rounded-3xl' />
      </div>

      <div className=''>
        <div className='col-span-4'>

<div className='flex items-center justify-between'>

          <h2 className='pt-6 py-2 text-2xl md:text-4xl'>Overview</h2>

          <Link href='/#projects' aria-label='routes back to project section'>
              <p className='underline cursor-pointer hover:text-[#684889] hover:scale-110'>Back</p>
          </Link>
</div>
          <p>
            This app was built using React JS and Firebase. Users
            are able to view properties currently for sale or for rent. Allowing users to view to view property information as well as the specific
            location of the property integrated with the Google Maps API. User
            authentication is available so you can signup and signin to your
            account with an email address in order to list properties or communicate with sellers.
          </p>
          <a
            href='https://github.com/vsibley/housing-market'
            target='_blank'
            rel='noreferrer'
            aria-label='routes to project code'
          >
            <button className='px-8 py-2 text-white mt-4 mr-8 hover:scale-105'>Code</button>
          </a>
          <a
            href='https://casa-project.vercel.app/'
            target='_blank'
            rel='noreferrer'
            aria-label='routes to project'
          >
            <button className='px-8  text-white py-2 mt-4 hover:scale-105'>Demo</button>
          </a>

          <div className="pt-[3rem]  mx-auto">

            <div className='col-span-4 md:col-span-1 shadow-xl mb-[7rem] shadow-gray-400 rounded-xl pt-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-2 md:grid-cols-3 items-center'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> React
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Tailwind
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Javascript
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Firebase
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Google API
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Vercel
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};


export default casahousing