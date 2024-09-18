import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verifica o tema salvo no localStorage ao carregar a página
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

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed w-full top-0 left-0 z-50'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
        <div className='space-x-6'>
          <Link to="home" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Home</Link>
          <Link to="about" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>About Me</Link>
          <Link to="service" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Services</Link>
          <Link to="project" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Projects</Link>
          <Link to="contact" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://api.whatsapp.com/send?phone=5564992855573&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?" className='hidden md:inline'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Contact Me
            </button>
          </a>
          <button
            onClick={toggleTheme}
            className='bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full'>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;