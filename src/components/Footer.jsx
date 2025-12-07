import React from 'react';
import {Twitter, Instagram, Facebook  } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer h-full bg-first-color-second text-white py-8 dark:bg-dark-body-color flex flex-col mb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          
          {/* Contenido principal */}
          <div className="footer__content text-center">
            <h1 className="footer__title text-2xl font-semibold mb-1 text-white dark:text-dark-title-color">
              Natali
            </h1>
            <span className="footer__subtitle text-white text-sm">
              Desarrolladora Fullstack
            </span>
          </div>

          {/* Redes sociales */}
          <div className="footer__socials flex gap-7">
            <a
              href="https://www.facebook.com/nati.schwartz.9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-lg hover:text-first-color-lighter transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook/>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-lg hover:text-first-color-lighter transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram/>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-lg hover:text-first-color-lighter transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter/>
            </a>
          </div>

          {/* Copyright */}
          <div className="footer__bottom text-center dark:text-dark-title-color">
            <p className="footer__copy text-xs text-white mt-2 text-center">
              © {currentYear} Natali. All right reserved
            </p>
            <p className="footer__made text-xs text-white mt-2 text-center">
              Made with ❤️ by Natali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;