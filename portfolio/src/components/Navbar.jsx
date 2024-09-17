import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
        <div className='space-x-6'>
          <Link to="home" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Home</Link>
          <Link to="about" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>About Me</Link>
          <Link to="service" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Services</Link>
          <Link to="project" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Projects</Link>
          <Link to="contact" smooth={true} duration={200} className='hover:text-gray-400 cursor-pointer'>Contact</Link>
        </div>
        <a href="https://api.whatsapp.com/send?phone=5564992855573&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?" className='hidden md:inline'>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
