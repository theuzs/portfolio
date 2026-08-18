import React from 'react';
import HeroImage from '../assets/matheus-foto.jpeg';
import './Hero.css';
import resumeFile from '../assets/SAP 2026 PT - Matheus Fagundes.pdf';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className='bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-white text-center pt-32 pb-16 px-6'>
        <img
          src={HeroImage}
          alt={t.hero.photoAlt}
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover ring-4 ring-primary-500/20 transform
          transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl md:text-5xl font-extrabold'>
            {t.hero.greeting}{" "}
            <span className='animated-gradient-text'>
              Matheus Fagundes
            </span>
        </h1>
        <p className='mt-3 text-xl md:text-2xl font-semibold text-primary-600 dark:text-primary-300'>
          {t.hero.role}
        </p>
        <p className='mt-4 text-lg text-ink-700/80 dark:text-gray-300 max-w-2xl mx-auto'>
          {t.hero.tagline}
        </p>

        <div className='mt-6 flex flex-wrap justify-center gap-3'>
          {t.hero.badges.map((badge) => (
            <span
              key={badge}
              className='px-4 py-1.5 rounded-full text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-200 border border-primary-200 dark:border-primary-700'
            >
              {badge}
            </span>
          ))}
        </div>

        <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              href="https://api.whatsapp.com/send?phone=5564999924587&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className='bg-gradient-to-r from-primary-500 to-primary-700 text-white
                transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full font-medium shadow-lg shadow-primary-500/20'>
                {t.hero.talk}
              </button>
            </a>

            <a
              href={resumeFile}
              download="Matheus_Fagundes_Curriculo.pdf"
            >
              <button
                className="bg-gradient-to-r from-accent-500 to-accent-400 text-ink-900 transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full font-medium shadow-lg shadow-accent-500/20"
                aria-label={t.hero.resume}
              >
                {t.hero.resume}
              </button>
            </a>
        </div>
    </div>
  );
}

export default Hero;
