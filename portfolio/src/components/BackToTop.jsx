import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.backToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary-600 hover:bg-primary-700 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
