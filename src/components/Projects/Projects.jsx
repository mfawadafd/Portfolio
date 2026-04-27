import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import Image from '../../assets/photo-C8q0KQHG.webp';
import simon from '../../assets/SimonGame.png';
import Netflix from '../../assets/Netflix.png';
import ToDo from '../../assets/Todo.png'
import SCD from '../../assets/SCD.png';
import image from '../../assets/image.png';
import Sticky from '../../assets/StickyNotesApp.png'


const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
      <div className='py-10 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <ProjectCard
          title='Sticky Notes App'
          main='A Notes App build with React js for data storage i use local storage.'
          image={Sticky}
          demoLink='https://notes-app-tau-puce.vercel.app/'
          sourceLink='https://github.com/mfawadafd/Notes-App'
        />
        <ProjectCard
          title='Simon Game'
          main='A memory game built with HTML, CSS, and JS.'
          image={simon}
          demoLink='https://simongame-henna.vercel.app/'
          sourceLink='https://github.com/mfawadafd/Simon_Game'
        />
        <ProjectCard
          title='Netflix Clone'
          main='A front-end clone of Netflix built with HTML and CSS.'
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
        <ProjectCard
          title='FUTURE SKILLS'
          main='A modern web application built with React and Node.js.'
          image={image}
          demoLink='https://mini-react-project-rho.vercel.app/'
          sourceLink='https://github.com/mfawadafd/Mini_React_Project'
        />
      </div>
    </div>
  );
};

export default Projects;
