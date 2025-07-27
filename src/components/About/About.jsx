import React from 'react';
import AboutImage from '../../assets/about.png';
import { IoArrowForward } from 'react-icons/io5';
const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap
     md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30
     rounded-lg p-10 md:p-20 mt-10 md:mt-20 mb-10 md:mb-20'>
       <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
            <img className='md:h-80' src={AboutImage} alt="About img" />
            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className= "mt-1 text-blue-500"/>
                    <span className='w-96 md:w-80 text-sm md:text-md'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                    <p className='text-sm md:text-md mt-2 leading-tight'>
                    I am a passionate frontend developer with a keen eye for design and user experience. I love creating interactive and responsive web applications that provide a seamless user experience. My expertise lies in HTML, CSS, JavaScript, and React.js, and I am always eager to learn new technologies and improve my skills.
                    </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className= "mt-1 text-blue-500"/>
                    <span className='w-96 md:w-80 text-sm md:text-md'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                    <p className='text-sm md:text-md mt-2 leading-tight'>
                    As a backend developer, I specialize in building robust and scalable server-side applications. I have experience with Node.js, Express.js, and various databases like MongoDB and MySQL. I enjoy working on APIs and ensuring that the data flow between the frontend and backend is efficient and secure.
                    </p>
                    </span>
                </div>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className= "mt-1 text-blue-500"/>
                    <span className='w-96 md:w-80 text-sm md:text-md'>
                    <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
                    <p className='text-sm md:text-md mt-2 leading-tight'>
                    I have a strong understanding of database design and management. I am proficient in SQL and NoSQL databases, and I enjoy optimizing queries and ensuring data integrity. My goal is to create efficient database structures that support the needs of the applications I work on.
                    </p>
                    </span>
                </div>
            </ul>
        </div>
       </div>
       </div>
  )
}

export default About