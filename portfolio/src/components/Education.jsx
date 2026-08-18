import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.education.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <FaGraduationCap className="text-3xl text-primary-500 mb-3" />
            <h3 className="text-xl font-bold mb-1">{t.education.degreeTitle}</h3>
            <p className="text-ink-700 dark:text-gray-300">{t.education.degreePeriod}</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <FaCertificate className="text-3xl text-accent-500 mb-3" />
            <h3 className="text-xl font-bold mb-3">{t.education.certTitle}</h3>
            <p className="text-sm text-ink-700/70 dark:text-gray-400 mb-2">{t.education.certSubtitle}</p>
            <ul className="list-disc list-outside ml-5 space-y-1.5 text-ink-700 dark:text-gray-300">
              {t.education.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
