import React from 'react';
import {Phone, Mail, MapPin} from 'lucide-react'

const Contact = () => {
  return (
    <section className="contact section dark:bg-dark-container-color" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <h2 className="section__title text-2xl font-semibold md:text-4xl text-center mb-12 text-title-color dark:text-dark-title-color">
          Contacto
        </h2>

        <div className="contact__container flex-col items-start sm:flex gap-6 pb-4">
          {/* Teléfono */}
          <div className="contact__information flex items-center gap-5">
            <Phone className='text-first-color text-4xl'/>
            <div className='flex-col'>
              <h3 className="contact__title text-lg font-medium text-title-color dark:text-dark-title-color mb-1">
                Teléfono
              </h3>
              <a 
                href="tel:+5491161622602"
                className="contact__subtitle text-text-color-light text-sm"
              >
                +54 9 116-162-2602
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="contact__information flex items-center gap-5">
            <Mail className='text-first-color text-4xl'/>
            <div className='flex-col'>
              <h3 className="contact__title text-lg font-medium text-title-color dark:text-dark-title-color mb-1">
                Email
              </h3>
              <a 
                href="mailto:schwartznatali@gmail.com"
                className="contact__subtitle text-text-color-light text-sm"
              >
                schwartznatali@gmail.com
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="contact__information flex items-center gap-5">
            <MapPin className='text-first-color text-4xl'/>
            <div className='flex-col'>
              <h3 className="contact__title text-lg font-medium text-title-color dark:text-dark-title-color mb-1">
                Ubicación
              </h3>
              <span className="contact__subtitle text-text-color-light text-sm">
                Capital Federal, Buenos Aires, Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;