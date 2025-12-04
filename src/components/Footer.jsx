import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-blue-600 text-white py-8 dark:bg-dark-container-color">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          
          {/* Contenido principal */}
          <div className="footer__content text-center">
            <h1 className="footer__title text-3xl font-bold mb-1 text-title-color dark:text-dark-title-color">
              Natali
            </h1>
            <span className="footer__subtitle text-blue-100">
              Desarrolladora Fullstack
            </span>
          </div>

          {/* Redes sociales */}
          <div className="footer__socials flex gap-6">
            <a
              href="https://www.facebook.com/nati.schwartz.9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-xl hover:text-blue-200 transition-colors duration-300"
              aria-label="Facebook"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-xl hover:text-blue-200 transition-colors duration-300"
              aria-label="Instagram"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-xl hover:text-blue-200 transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="footer__bottom text-center">
            <p className="footer__copy text-sm text-blue-100 mb-1">
              © {currentYear} Natali. All right reserved
            </p>
            <p className="footer__made text-sm text-blue-100">
              Made with ❤️ by Natali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;