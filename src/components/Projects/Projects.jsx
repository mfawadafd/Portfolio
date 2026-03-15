import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Image from '../../assets/photo-C8q0KQHG.webp';
import simon from '../../assets/SimonGame.png';
import Netflix from '../../assets/Netflix.png';
import ToDo from '../../assets/Todo.png'
import SCD from '../../assets/SCD.png';

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-10 px-8 flex flex-wrap gap-5'>
        <ProjectCard
          title='Simon Game'
          main='A memory game built with HTML, CSS, and JS.'
          image={simon}
          demoLink='https://simongame-henna.vercel.app/'
          sourceLink='https://github.com/mfawadafd/Simon_Game'
        />
        <ProjectCard
          title='Netflix Clone'
          main='A front-end clone of Neffleix built with HTML and CSS.'
          image={Netflix}
          demoLink='https://movie-stream-u.vercel.app/'
          sourceLink='https://github.com/mfawadafd/movie-stream-u'
        />
        <ProjectCard
          title='SCM Dashboard'
          main='A simple and elegant SCD with real-time data visualization.'
          image={SCD}
          demoLink='https://fyp-virid-ten.vercel.app/'
          sourceLink='https://github.com/mfawadafd/FYP/tree/master/Frontend'
        />
      </div>
    </div>
  );
};

export default Projects;
