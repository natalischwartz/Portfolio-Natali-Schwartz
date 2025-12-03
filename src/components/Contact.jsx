import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="section__title text-3xl font-bold text-center mb-12 text-title-color">
          Contacto
        </h2>

        <div className="contact__container grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Teléfono */}
          <div className="contact__information flex flex-col items-center text-center p-6">
            <i className="uil uil-phone contact__icon text-4xl text-blue-600 mb-4"></i>
            <div>
              <h3 className="contact__title text-xl font-semibold text-title-color mb-1">
                Teléfono
              </h3>
              <a 
                href="tel:+5491161622602"
                className="contact__subtitle text-gray-600 hover:text-blue-600 transition-colors"
              >
                +54 9 116-162-2602
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="contact__information flex flex-col items-center text-center p-6">
            <i className="uil uil-envelope contact__icon text-4xl text-blue-600 mb-4"></i>
            <div>
              <h3 className="contact__title text-xl font-semibold text-title-color mb-1">
                Email
              </h3>
              <a 
                href="mailto:schwartznatali@gmail.com"
                className="contact__subtitle text-gray-600 hover:text-blue-600 transition-colors"
              >
                schwartznatali@gmail.com
              </a>
            </div>
          </div>

          {/* Ubicación */}
          <div className="contact__information flex flex-col items-center text-center p-6">
            <i className="uil uil-map-marker contact__icon text-4xl text-blue-600 mb-4"></i>
            <div>
              <h3 className="contact__title text-xl font-semibold text-title-color mb-1">
                Ubicación
              </h3>
              <span className="contact__subtitle text-gray-600">
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