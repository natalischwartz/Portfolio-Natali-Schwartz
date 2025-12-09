import React from 'react';
import {Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer h-full bg-first-color-second text-white py-8 pb-14 dark:bg-dark-body-color flex flex-col">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4">
          
          {/* Contenido principal */}
           {/* Contenido principal - columna 1, fila 1 */}
          <div className="footer__content text-center md:col-start-1 md:row-start-1">
            <h1 className="footer__title text-2xl font-semibold mb-1 text-white dark:text-dark-title-color">
              Natali
            </h1>
            <span className="footer__subtitle text-white text-sm">
              Desarrolladora Fullstack
            </span>
          </div>

          {/* Redes sociales */}
          {/* Redes sociales - columna 3, fila 1 */}
          <div className="footer__socials flex gap-7 md:col-start-3 md:row-start-1 md:place-content-center">
            {/* <a
              href="https://www.facebook.com/nati.schwartz.9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-lg hover:text-first-color-lighter transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook/>
            </a> */}
            <a
              href="https://github.com/natalischwartz"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-lg hover:text-first-color-lighter transition-colors duration-300"
              aria-label="Github"
            >
              <Github/>
            </a>
            <a
              href="https://www.linkedin.com/in/natali-schwartz"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social text-lg hover:text-first-color-lighter transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin/>
            </a>
          </div>

          {/* Copyright */}
          {/* Copyright - ocupa todas las columnas, fila 2 */}
          <div className="footer__bottom text-center dark:text-dark-title-color md:col-span-3 md:row-start-2 ">
            <p className="footer__copy text-xs text-white text-center">
              © {currentYear} Natali. All right reserved
            </p>
            <p className="footer__made text-xs text-white mt-2 pb-2 text-center">
              Made with ❤️ by Natali
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;