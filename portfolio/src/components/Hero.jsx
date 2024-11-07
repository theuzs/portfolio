import React from 'react';
import HeroImage from '../assets/hero-image.png';
import './Hero.css'; 
import resumeFile from '../assets/SAP 2025 EN - Matheus Fagundes.pdf'; // Importe o arquivo do currículo

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
            <a 
              href="https://api.whatsapp.com/send?phone=5564992855573&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                Contact With Me
              </button>
            </a>

            <a 
          href={resumeFile} 
          download="Matheus_Fagundes_Resume.pdf"  // Nome do arquivo que será baixado
        >
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full"
            aria-label="Download my Resume"
          >
            Download my Resume
          </button>
        </a>
        
        </div>
    </div>
  );
}

export default Hero;
