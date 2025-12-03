import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about section py-16 bg-body-color">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-title-color mb-2">Sobre mí</h2>
          {/* <div className="w-20 h-1 bg-blue-500 mx-auto"></div> */}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Imagen */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <img 
                src="/img/about.jpg" 
                alt="Natali Schwartz - Desarrolladora" 
                className="w-72 h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
              />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="lg:w-3/5">
            <p className="text-lg text-text-color mb-8 leading-relaxed text-justify">
              Después de obtener mi título en Administración, decidí cambiar mi rumbo profesional para 
              adentrarme en el mundo de la tecnología. Me inscribí en Coderhouse y adquirí mi primer 
              certificado oficial en desarrollo web, donde pude descubrir la satisfacción que me genera 
              la resolución de desafíos como así también el diseño de páginas web y aplicaciones.
              <br /><br />
              Estoy en búsqueda de una posición full time donde pueda seguir adquiriendo nuevos 
              conocimientos y mejorar mis habilidades como desarrolladora en un equipo de trabajo.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                download="CV-Natali-Schwartz.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                href="/CV-Natali-Schwartz.pdf" 
                className="inline-flex items-center gap-3 bg-first-color text-container-color px-6 py-3 rounded-lg hover:bg-first-color-alt transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Download className="text-lg" />
                <span className="font-medium">Descargar CV</span>
              </a>
              
              {/* Botón adicional opcional */}
              {/* <a 
                href="#contact" 
                className="inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                <span className="font-medium">Contactarme</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;