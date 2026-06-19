import React from 'react';
const ProjectCard = ({ title, main, demoLink, sourceLink, image }) => {
  return (
    <div className='group p-3 md:p-6 flex flex-col w-full bg-gradient-to-br from-[#0c0e19] to-[#1a1d2e] shadow-xl shadow-slate-900/50 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border hover:border-blue-500/30'>
      <div className='relative overflow-hidden rounded-xl'>
        <img 
          className='w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1' 
          src={image} 
          alt={title} 
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0c0e19] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
      </div>
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal text-white group-hover:text-blue-400 transition-colors duration-300'>
        {title}
      </h3>
      <p className='px-4 text-sm md:text-md leading-tight py-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4'>
        <a
          href={demoLink}
          target='_blank'
          rel='noopener noreferrer'
          className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-gradient-to-r from-[#465697] to-[#6b8cce] shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-0.5 active:scale-95'
        >
          Demo
        </a>
        <a
          href={sourceLink}
          target='_blank'
          rel='noopener noreferrer'
          className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl bg-gradient-to-r from-[#465697] to-[#6b8cce] shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105 hover:-translate-y-0.5 active:scale-95'
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
