import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <nav className='bg-black dark:bg-gray-900 text-white px-6 md:px-12 lg:px-24 fixed w-full top-0 left-0 z-50 shadow-lg'>
      <div className='container py-3 flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Portfolio</span>
        </div>
        <div className='space-x-6 hidden md:flex'>
          <Link to="home" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer transition-colors duration-300'>Home</Link>
          <Link to="about" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer transition-colors duration-300'>About Me</Link>
          <Link to="service" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer transition-colors duration-300'>Services</Link>
          <Link to="project" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer transition-colors duration-300'>Projects</Link>
          <Link to="contact" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer transition-colors duration-300'>Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://api.whatsapp.com/send?phone=5564992855573&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?" className='md:flex items-center hidden'>
            <button className='flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105'>
              <FaWhatsapp className='mr-2' />
              Contact Me
            </button>
          </a>
          <button
            onClick={toggleTheme}
            className='flex items-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105'>
            {darkMode ? <FaSun className='mr-2' /> : <FaMoon className='mr-2' />}
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
