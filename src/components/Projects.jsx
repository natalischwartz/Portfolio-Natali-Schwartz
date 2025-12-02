import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Sitio web de telas responsivo',
      description: 'Contiene animaciones al hacer scroll. Consultas a una base de datos en la nube: Mongo DB Atlas. Incluye carrito de compras. Lenguajes utilizados: HTML, CSS, Javascript, Node JS, Express JS y Mongo DB.',
      image: '/img/portada-website-telas.PNG',
      alt: 'Portada sitio web telas',
      demoLink: 'https://decoronce-web.vercel.app/'
    },
    {
      id: 2,
      title: 'Finda Gym Website',
      description: 'Diseño de sitio web de gimnasio responsivo. Desarrollado primero con la metodología "Mobile First" y luego para escritorio. Compatible con todos los dispositivos móviles y con una interfaz de usuario práctica y agradable. Incluye un formulario para enviar correos electrónicos.',
      image: '/img/portada-finda-gym.PNG',
      alt: 'Portada sitio web Finda Gym',
      demoLink: 'https://finda-gym-website.vercel.app/'
    },
    {
      id: 3,
      title: 'App de veterinaria',
      description: 'Sistema de consultas para veterinaria realizado con React Js, Tailwind css y Firebase para el backend. Incluye: Login, Registro, Consultas y Adopciones con formulario de adopción.',
      image: '/img/portada-website-vet.png',
      alt: 'Portada sitio vet',
      demoLink: 'https://vet-app-chi.vercel.app/'
    }
  ];

  return (
    <section id="portfolio" className="portfolio section py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="section__title text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider con Swiper */}
        <div className="portfolio__slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="portfolio__content bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="portfolio__image-container">
                    <img 
                      src={project.image} 
                      alt={project.alt}
                      className="portfolio__img w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                  <div className="portfolio__data p-6 flex flex-col h-full">
                    <h3 className="portfolio__title text-xl font-bold text-gray-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="portfolio__description text-gray-600 mb-6 flex grow">
                      {project.description}
                    </p>
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button button--flex button--small portfolio__button inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:gap-3 group"
                    >
                      Ver Demo
                      <i className="uil uil-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              <i className="uil uil-arrow-left text-blue-600 text-xl"></i>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              <i className="uil uil-arrow-right text-blue-600 text-xl"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;