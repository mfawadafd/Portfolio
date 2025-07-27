import React from 'react'
import {FaCss3, FaHtml5, FaJs, FaFigma, FaReact} from 'react-icons/fa';
import {SiRedis} from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { RiNetflixFill } from '@remixicon/react';
import { FaAmazon } from 'react-icons/fa';

const Experience = () => {
  return (
    <div id='Experience' className='p-10 md:p-24'>
        <h1 className='text-2 md:text-4xl font-bold text-white'>Experience</h1>
        <div className='flex flex-warp items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <FaHtml5 size={50} className='text-orange-500' />
            </span>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <FaCss3 size={50} className='text-blue-500' />
            </span>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <FaReact size={50} color='#61DAFB' />
            </span>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <FaJs size={50} className='text-yellow-500' />
            </span>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <FaFigma size={50} className='text-purple-500' />
            </span>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <SiMongodb size={50} color='#47A248' />
            </span>
            <span className='p-3 bg-zinc-950 flex item-center rounded-2xl'>
                <SiRedis size={50} color='#FF2E00' />
            </span>
            </div>
            <div>
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <FaGoogle size={50} className='text-blue-500' />
                <span className='text-white'>
                    <h2 className='leading-tight'>Software Engineer, Google</h2>
                    <p className='text-sm leading-tight font-thin'>sept 2024 - Present</p>
                    <ul className='text-sm p-2'>
                        <li className='list-disc'>Developing scalable web applications using React and Node.js</li>
                        <li className='list-disc'>Collaborating with cross-functional teams to deliver high-quality software</li>
                        <li className='list-disc'>Implementing best practices for code quality and performance</li>
                    </ul>
                </span>
            </div>
            <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <RiNetflixFill size={50} className='text-red-500' />
                <span className='text-white'>
                    <h2 className='leading-tight'>Frontend Developer, Netflix</h2>
                    <p className='text-sm leading-tight font-thin'>jan 2024 - aug 2024</p>
                    <ul className='text-sm p-2'>
                        <li className='list-disc'>Designed and implemented user interfaces for streaming services</li>
                        <li className='list-disc'>Optimized web applications for performance and scalability</li>
                        <li className='list-disc'>Worked closely with UX/UI designers to enhance user experience</li>
                    </ul>
                </span>
                </div>
                 <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                <FaAmazon size={50} color='#FF9900'/>
                <span className='text-white'>
                    <h2 className='leading-tight'>Frontend Developer, Amazon</h2>
                    <p className='text-sm leading-tight font-thin'>jan 2024 - Aug 2024</p>
                    <ul className='text-sm p-2'>
                        <li className='list-disc'>Developed responsive web applications for e-commerce platforms</li>
                        <li className='list-disc'>Collaborated with backend teams to integrate APIs</li>
                        <li className='list-disc'>Ensured cross-browser compatibility and accessibility standards</li>
                    </ul>
                </span>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Experience