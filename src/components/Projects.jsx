import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ArrowRight,ArrowLeft} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 4,
      title: 'Landing page de consultoría',
      description: ' Landing page que incluye: Diseño completamente responsive y optimizado para SEO,formulario de contacto funcional integrado, secciones estructuradas: Quiénes Somos, Servicios, Clientes y CTA, implementación de código QR para acceso rápido, hosting y dominio configurados,código limpio, escalable con foco en rendimiento y accesibilidad. Lenguajes utilizados: React, Javascript, Tailwind CSS ',
      image: '/img/portada-lidera.PNG',
      alt: 'Portada landing page de consultoría',
      demoLink: 'https://lideratusalas.com.ar/'
    },
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
    },
  ];

  return (
    <section id="portfolio" className="portfolio section py-16 dark:bg-dark-container-color">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="section__title text-2xl font-semibold mb-12 md:text-4xl text-title-color dark:text-dark-title-color">
            Portfolio
          </h2>
          {/* <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div> */}
        </div>

        {/* Slider con Swiper */}
        <div className="portfolio__slider">
          <Swiper
            modules={[Navigation,Autoplay]}
            spaceBetween={30}
            slidesPerView={1}

            loop={true}

            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
              color:"red"
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
                <div className="portfolio__content px-6 hover:shadow-lg transition-shadow duration-300 w-full flex flex-col items-center">
                  <div className="portfolio__image-container">
                    <img 
                      src={project.image} 
                      alt={project.alt}
                      className="portfolio__img w-[265px] rounded-lg object-cover justify-self-center"
                    />
                  </div>
                  <div className="portfolio__data flex flex-col items-center gap-4 relative">
                    <h3 className="portfolio__title text-center text-lg px-4 mt-2 font-bold text-title-color dark:text-dark-title-color">
                      {project.title}
                    </h3>
                    <p className="portfolio__description text-sm text-text-color dark:text-dark-title-color text-center">
                      {project.description}
                    </p>
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" portfolio__button inline-flex items-center justify-center gap-2 bg-first-color text-container-color px-6 py-3 rounded-lg  hover:bg-first-color-alt transition-all duration-300 hover:gap-3 group"
                    >
                      Ver Demo
                      <ArrowRight className='group-hover:translate-x-1 transition-transform duration-300'/>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute left-0 top-[40%]  z-10 w-[30px] h-[30px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-first-color-lighter transition-colors duration-300 cursor-pointer">
            <ArrowLeft className='text-first-color text-xl'/>
            </div>
            <div className="swiper-button-next-custom absolute right-0 top-[40%]  z-10 w-[30px] h-[30px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-first-color-lighter transition-colors duration-300 cursor-pointer">
            <ArrowRight className='text-first-color text-xl'/>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;