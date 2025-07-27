import React from 'react';
import MyImage from '../../assets/myimage.jpg';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div id='Home' className='text-white flex flex-col md:flex-row justify-between items-center p-10 md:p-20'>
      
      {/* Left Text Section */}
      <div className='md:w-2/4 text-center md:text-left'>
        <h1 className='text-3xl md:text-4xl font-bold leading-normal tracking-tight'>
          Hi, I'm <br />
          <TypeAnimation
            sequence={[
              'Muhammad Fawad', 2000,
              'a Web Developer', 2000,
              'a Coder', 2000,
              'a Tech Enthusiast', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className='text-blue-400'
          />
        </h1>

        <p className='text-sm md:text-xl mt-4 tracking-tight'>
          I create beautiful and functional web applications.<br />
          My passion lies in crafting seamless user experiences and writing clean, efficient code.<br />
          Let's build something amazing together!
        </p>
       <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center items-center sm:items-start">
  <a
    href="mailto:mfawadafd@gmail.com?subject=Let's Connect&body=Hi Fawad, I saw your portfolio and wanted to connect."
    className="w-full sm:w-auto"
  >
    <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-2xl shadow-lg transition duration-300 ease-in-out">
      Let's Connect
    </button>
  </a>

  <a
    href="https://wa.me/+923169753567?text=Hi%20Fawad,%20I%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <button className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-2xl shadow-lg transition duration-300 ease-in-out">
      Chat on WhatsApp
    </button>
  </a>
</div>


      </div>

      {/* Profile Image with Gradient Ring */}
      <div className="mt-10 md:mt-0 flex justify-center items-center">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-[5px] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 ">
          <div className="bg-black rounded-full w-full h-full flex items-center justify-center">
            <img
              src={MyImage}
              alt="Profile"
              className="rounded-full w-full h-full object-cover border-4 border-black hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
