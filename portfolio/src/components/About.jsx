import React from "react";
import './Hero.css';
import { useLanguage } from '../context/LanguageContext';

const skillGroups = [
  {
    key: "core",
    skills: ["S/4HANA", "ABAP", "Fiori / UI5", "CDS", "OData", "RAP"],
  },
  {
    key: "backend",
    skills: ["RAP", "CDS Views", "SmartForms", "Adobe Forms", "ALV", "BAPIs", "User Exits", "Enhancements", "BAdIs"],
  },
  {
    key: "fiori",
    skills: ["SAPUI5 Freestyle", "Fiori Elements", "List Reports", "Worklists", "Smart Controls", "i18n"],
  },
  {
    key: "integration",
    skills: ["SAP Gateway", "OData V2", "RFC Destinations", "REST Integration"],
  },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-paper-100 dark:bg-ink-800 text-ink-900 dark:text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.about.title}</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-ink-700 dark:text-gray-300">
            {t.about.bio}
          </p>

          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.key}>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300 mb-2">
                  {t.about.groupTitles[group.key]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-ink-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-between text-center">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="transition-transform duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold animated-gradient-text">
                  {stat.value}
                </h3>
                <p className="text-ink-700 dark:text-gray-300 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
