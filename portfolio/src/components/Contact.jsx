import React, { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
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
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2' />
                <a href="mailto:matheusfagundesmsf@gmail.com" className='hover:underline'>
                    matheusfagundesmsf@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2' />
                <span>+55 (64) 99285-5573</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
                <span>Itumbiara GO</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
          <form className='space-y-4'>
  <div>
    <label htmlFor="name" className='block mb-2'>Your Name</label>
    <input
      type="text"
      className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none 
      focus:border-green-400 dark:focus:border-green-400'
      placeholder='Enter Your Name'
    />
  </div>
  <div>
    <label htmlFor="email" className='block mb-2'>Email</label>
    <input
      type="email"
      className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
      focus:border-green-400 dark:focus:border-green-400'
      placeholder='Enter Your Email'
    />
  </div>
  <div>
    <label htmlFor="message" className='block mb-2'>Message</label>
    <textarea
      className='w-full p-2 rounded bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
      focus:border-green-400 dark:focus:border-green-400'
      rows="5"
      placeholder='Enter Your Message'
    />
  </div>
  <button
    className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
  >
    Send
  </button>
</form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;