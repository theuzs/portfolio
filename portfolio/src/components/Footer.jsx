import React, { useState, useEffect } from "react"; 
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
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
    <footer className="bg-white dark:bg-black text-black dark:text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">Matheus Fagundes</h3>
            <p className="text-black dark:text-gray-300">
              SAP ABAP Developer, specializing in enterprise software development and system integration.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                focus:outline-none focus:border-green-400 dark:focus:border-green-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black dark:text-gray-300">
            &copy; {new Date().getFullYear()} Matheus Fagundes. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
          <a href="https://api.whatsapp.com/send?phone=5564992855573&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?" className="text-black dark:text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/matheus-fagundes-14a533218?" className="text-black dark:text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/theuzs" className="text-black dark:text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black dark:text-gray-300 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-black dark:text-gray-300 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
