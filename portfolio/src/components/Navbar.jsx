import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaWhatsapp, FaGithub, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const whatsappHref = "https://api.whatsapp.com/send?phone=5564999924587&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?";

  return (
    <nav className='bg-ink-950 dark:bg-ink-950 text-white px-6 md:px-12 lg:px-24 fixed w-full top-0 left-0 z-50 shadow-lg'>
      <div className='container py-3 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400'>MF</span>
        </div>
        <div className='space-x-5 hidden lg:flex'>
          {t.nav.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={200}
              offset={-64}
              className='hover:text-primary-300 cursor-pointer transition-colors duration-300'
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/theuzs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className='hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
          >
            <FaGithub />
          </a>
          <a href={whatsappHref} className='md:flex items-center hidden' target="_blank" rel="noopener noreferrer">
            <button className='flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105'>
              <FaWhatsapp className='mr-2' />
              {t.nav.talk}
            </button>
          </a>
          <button
            onClick={toggleLanguage}
            aria-label="Switch language"
            className='flex items-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105'>
            <FaGlobe className='mr-1.5' />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            onClick={toggleTheme}
            className='flex items-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105'>
            {darkMode ? <FaSun className='mr-2' /> : <FaMoon className='mr-2' />}
            <span className="hidden sm:inline">{darkMode ? t.nav.themeLight : t.nav.themeDark}</span>
          </button>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
            className='lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='lg:hidden pb-4 flex flex-col space-y-1 border-t border-white/10 pt-3'>
          {t.nav.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={200}
              offset={-64}
              onClick={() => setMenuOpen(false)}
              className='py-2 px-2 rounded hover:bg-white/10 hover:text-primary-300 cursor-pointer transition-colors duration-300'
            >
              {link.label}
            </Link>
          ))}
          <div className='flex items-center gap-3 pt-2'>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className='flex-1'>
              <button className='w-full flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-2 rounded-full shadow-md'>
                <FaWhatsapp className='mr-2' />
                {t.nav.talk}
              </button>
            </a>
            <a
              href="https://github.com/theuzs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors shrink-0'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
