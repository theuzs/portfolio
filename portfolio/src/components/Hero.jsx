import React from 'react';
import HeroImage from '../assets/hero-image.png';
import './Hero.css'; 


const Hero = () => {
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white text-center py-16'>
        <img 
          src={HeroImage} 
          alt="" 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='animated-gradient-text'>
              Matheus Fagundes
            </span>
            , SAP ABAP Developer
        </h1>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
          I specialize in developing and integrating SAP ABAP solutions, 
          including custom Fiori applications and seamless system integrations
        </p>
        <div className='mt-8 space-x-4'>
            <button
              className='bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Contact With Me
            </button>
            <button
              className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Resume
            </button>
        </div>
    </div>
  );
}

export default Hero;
