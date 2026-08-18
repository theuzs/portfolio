import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-paper-50 dark:bg-ink-900 text-ink-900 dark:text-white py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-6">
          <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Matheus Fagundes</h3>
            <p className="text-ink-700 dark:text-gray-300">
              {t.footer.tagline}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-700 dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Matheus Fagundes. {t.footer.rights}
          </p>
          <div className="flex space-x-5 text-lg">
            <a href="https://api.whatsapp.com/send?phone=5564999924587&text=Ol%C3%A1%20Matheus,%20tem%20um%20minuto%20?" className="text-ink-700 dark:text-gray-300 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/matheus-fagundes-14a533218" className="text-ink-700 dark:text-gray-300 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/theuzs" className="text-ink-700 dark:text-gray-300 hover:text-primary-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
