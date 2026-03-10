import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <div
      id='Footer' className='flex flex-col md:flex-row md:justify-around items-center gap-6 bg-[#465697] text-white p-10 md:p-12'>
      <div className='text-center md:text-left'>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free to Reach out!</h3>
      </div>
      <ul className='text-sm md:text-xl flex flex-col gap-3'>
        <li className='flex gap-1 items-center justify-center md:justify-start'><MdOutlineEmail size={20} />
          <a href="mailto:mfawadafd65@gmail.com" target="_blank" rel="noopener noreferrer">
            mfawadafd65@gmail.com
          </a>
        </li>
        <li className='flex gap-1 items-center justify-center md:justify-start'><FaLinkedin size={20} />
          <a href="https://www.linkedin.com/in/muhammad-fawad-839565232/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className='flex gap-1 items-center justify-center md:justify-start'><FaGithub size={20} />
          <a href="https://github.com/mfawadafd" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer