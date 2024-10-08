import React, { useState, useEffect } from "react";
import AboutImage from "../assets/aboutme-image.png";
import './Hero.css'; 

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Verifica o tema salvo no localStorage ao carregar a página
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About me"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate ABAP developer with a focus on creating robust and efficient 
              solutions for SAP systems. With a strong background in backend development and a deep understanding 
              of ABAP best practices, I aim to optimize processes and deliver solutions tailored to users' 
              specific needs. My goal is to enhance the performance and functionality of SAP systems, 
              ensuring a seamless and effective user experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  ABAP
                </label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  UI5
                </label>
                <div className="grow bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div className="transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold animated-gradient-text">
                  1+
                </h3>
                <p className="animated-gradient-text">
                  Years Experience
                </p>
              </div>
              <div className="transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold animated-gradient-text">
                  10+
                </h3>
                <p className="animated-gradient-text">
                  Projects Completed
                </p>
              </div>
              <div className="transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold animated-gradient-text">
                  10+
                </h3>
                <p className="animated-gradient-text">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
