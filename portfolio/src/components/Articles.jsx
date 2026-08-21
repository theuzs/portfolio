import React, { useState } from "react";
import { useLanguage } from '../context/LanguageContext';

const Articles = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-paper-100 dark:bg-ink-800 text-ink-900 dark:text-white py-20" id="articles">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.articles.title}</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {t.articles.items.map((article, i) => {
            const isOpen = expanded === i;
            return (
              <div key={article.title} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <span className={`text-primary-500 text-xl shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-ink-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                    {article.excerpt}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
