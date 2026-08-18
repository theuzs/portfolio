import React from "react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-paper-100 dark:bg-ink-800 text-ink-900 dark:text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-10 md:p-14 text-center shadow-xl">
          <FaGithub className="text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-3">{t.projects.title}</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-6">
            {t.projects.description}
          </p>
          <a
            href="https://github.com/theuzs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-primary-700 font-semibold px-6 py-3 rounded-full transform transition-transform duration-300 hover:scale-105"
          >
            {t.projects.cta}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
