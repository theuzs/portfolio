import React from "react";
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

const Service = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-paper-100 dark:bg-ink-800 text-ink-900 dark:text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.service.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.service.items.map((service, index) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gray-700 px-6 pb-6 pt-4 rounded-lg hover:shadow-lg transform
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold animated-gradient-text"
              >
                {index + 1}
              </div>
              <h3 className="mt-2 text-xl font-bold animated-gradient-text">
                {service.title}
              </h3>
              <p className="mt-2 text-ink-700 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
