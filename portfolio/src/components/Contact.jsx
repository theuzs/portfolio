import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(t.contact.form.mailSubject(name));
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:matheusfagundesmsf@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-paper-100 dark:bg-ink-800 text-ink-900 dark:text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">{t.contact.title}</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r
            from-primary-500 to-accent-500 mb-4'>{t.contact.subtitle}</h3>
            <p className="text-ink-700 dark:text-gray-300">
              {t.contact.description}
            </p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-primary-500 mr-2' />
                <a href="mailto:matheusfagundesmsf@gmail.com" className='hover:underline'>
                    matheusfagundesmsf@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-primary-500 mr-2' />
                <span>+55 (64) 99992-4587</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-primary-500 mr-2' />
                <span>{t.contact.location}</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
          <form className='space-y-4' onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className='block mb-2'>{t.contact.form.name}</label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className='w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
      focus:border-primary-500 dark:focus:border-primary-400'
      placeholder={t.contact.form.namePlaceholder}
    />
  </div>
  <div>
    <label htmlFor="email" className='block mb-2'>{t.contact.form.email}</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className='w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
      focus:border-primary-500 dark:focus:border-primary-400'
      placeholder={t.contact.form.emailPlaceholder}
    />
  </div>
  <div>
    <label htmlFor="message" className='block mb-2'>{t.contact.form.message}</label>
    <textarea
      id="message"
      name="message"
      required
      className='w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none
      focus:border-primary-500 dark:focus:border-primary-400'
      rows="5"
      placeholder={t.contact.form.messagePlaceholder}
    />
  </div>
  <button
    type="submit"
    className='bg-gradient-to-r from-primary-500 to-primary-700 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
  >
    {t.contact.form.send}
  </button>
</form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
