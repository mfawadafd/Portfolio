import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Image from '../../assets/photo-C8q0KQHG.webp';
import simon from '../../assets/SimonGame.png';
import Netflix from '../../assets/Netflix.png';
import ToDo from '../../assets/Todo.png'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-10 px-8 flex flex-wrap gap-5'>
        <ProjectCard
          title='Simon Game'
          main='A memory game built with HTML, CSS, and JS.'
          image={simon}
          demoLink='https://mfawadafd.github.io/Simon_Game/'
          sourceLink='https://github.com/mfawadafd/Simon_Game'
        />
        <ProjectCard
          title='Netflix Clone'
          main='A front-end clone of Neffleix built with HTML and CSS.'
          image={Netflix}
          demoLink='https://mfawadafd.github.io/movie-stream-u/'
          sourceLink='https://github.com/mfawadafd/movie-stream-u'
        />
        <ProjectCard
          title='ToDo List (React)'
          main='A simple and elegant to-do list built using React.'
          image={ToDo}
          demoLink='https://mfawadafd.github.io/Todo_App/'
          sourceLink='https://github.com/mfawadafd/Todo_App'
        />
      </div>
    </div>
  );
};

export default Projects;
