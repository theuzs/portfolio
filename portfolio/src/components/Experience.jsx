import React from "react";
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.experience.title}</h2>
        <div className="relative border-l-2 border-primary-200 dark:border-primary-800 ml-3 md:ml-0 space-y-12">
          {t.experience.jobs.map((exp) => (
            <div key={exp.company} className="relative pl-8">
              <span
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-paper-50 dark:border-ink-900 ${
                  exp.isCurrent ? "bg-accent-500" : "bg-primary-500"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-xl font-bold">
                  {exp.role} <span className="text-primary-600 dark:text-primary-300">· {exp.company}</span>
                </h3>
                {exp.isCurrent && (
                  <span className="text-xs font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-accent-500/20 text-accent-600 dark:text-accent-400">
                    {t.experience.current}
                  </span>
                )}
              </div>
              <p className="text-sm text-ink-700/70 dark:text-gray-400 mb-3">{exp.period}</p>
              {exp.project && (
                <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-3">{exp.project}</p>
              )}
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-ink-700 dark:text-gray-300">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
