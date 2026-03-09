import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <div 
    id='Footer' className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
        <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to Reach out!</h3>
    </div>
    <ul className='text-sm md:text-xl'>
        <li className='flex gap-1 items-center'><MdOutlineEmail size={20}/>
       <a href="mailto:mfawadafd65@gmail.com" target="_blank" rel="noopener noreferrer">
          mfawadafd65@gmail.com
        </a>
        </li>
        <li className='flex gap-1 items-center'><FaLinkedin size={20}/>
        <a href="https://www.linkedin.com/in/muhammad-fawad-839565232/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        </li>
        <li className='flex gap-1 items-center'><FaGithub size={20}/>
        <a href="https://github.com/mfawadafd" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        </li>
    </ul>
    </div>
  )
}

export default Footer