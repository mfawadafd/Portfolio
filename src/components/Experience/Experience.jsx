import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaFigma, FaReact } from 'react-icons/fa';
import { SiRedis } from 'react-icons/si';
// import { FaGoogle } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
// import { RiNetflixFill } from '@remixicon/react';
// import { FaAmazon } from 'react-icons/fa';

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
                        <div className="text-blue-500 font-bold text-4xl">
                            TT
                        </div>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Frontend Web Developer</h2>
                            <p className='text-sm leading-tight font-thin'>Jan 2026 - Present</p>
                            <ul className='text-sm p-2'>
                                <li className='list-disc'>Developing scalable web applications using React and Node.js</li>
                                <li className='list-disc'>Collaborating with cross-functional teams to deliver high-quality software</li>
                                <li className='list-disc'>Implementing best practices for code quality and performance</li>
                            </ul>
                        </span>
                    </div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <div className="text-red-500 font-bold text-3xl">
                            4GT
                        </div>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Frontend Developer, 4G Technology</h2>
                            <p className='text-sm leading-tight font-thin'>jan 2024 - aug 2024</p>
                            <ul className='text-sm p-2'>
                                <li className='list-disc'>Designed and implemented user interfaces for streaming services</li>
                                <li className='list-disc'>Optimized web applications for performance and scalability</li>
                                <li className='list-disc'>Worked closely with UX/UI designers to enhance user experience</li>
                            </ul>
                        </span>
                    </div>
                    <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                        <div className="text-orange-500 font-bold text-3xl">
                            GDC
                        </div>
                        <span className='text-white'>
                            <h2 className='leading-tight'>Basic Programming Instructor</h2>
                            <p className='text-sm leading-tight font-thin'>Aug 2025 - Dec 2025</p>
                            <ul className='text-sm p-2'>
                                <li className='list-disc'>Making code simple. Building confidence. One line at a time</li>
                                <li className='list-disc'>I teach problem-solving, not just syntax.</li>
                                <li className='list-disc'>From 'Hello World' to real projects—hands-on, patient, practical.</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience