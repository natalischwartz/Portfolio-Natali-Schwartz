import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const educationData = [
    {
      id: 1,
      title: 'Licenciada en administración',
      subtitle: 'Universidad de Buenos Aires',
      period: '2009-2015',
      icon: 'graduation-cap'
    },
    {
      id: 2,
      title: 'Desarrollo web',
      subtitle: 'Coderhouse',
      period: 'Agosto 2021- Noviembre 2021',
      icon: 'graduation-cap'
    },
    {
      id: 3,
      title: 'Full stack Node Js',
      subtitle: 'Agencia de aprendizaje a lo largo de la vida',
      period: 'Agosto 2023- Diciembre 2023',
      icon: 'graduation-cap'
    }
  ];

  const workData = [
    {
      id: 1,
      title: 'Frontend Developer y Responsable administrativa de local',
      subtitle: 'Decoronce - Comercio de telas',
      period: '2019-Actualidad',
      icon: 'briefcase-alt'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      subtitle: 'Proyectos Freelance & Personales',
      period: '2022- Actualidad',
      icon: 'briefcase-alt'
    },
    {
      id: 3,
      title: 'Analista de pagos',
      subtitle: 'Filgo Argentina',
      period: '2018- 2019',
      icon: 'briefcase-alt'
    }
  ];

  const activeData = activeTab === 'education' ? educationData : workData;

  return (
    <section id="experience" className="qualification section py-16 dark:bg-dark-body-color">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="section__title text-3xl md:text-4xl font-bold text-title-color dark:text-dark-title-color mb-2">
            Mi experiencia
          </h2>
          <span className="section__subtitle"></span>
        </div>

        {/* Tabs */}
        <div className="qualification__tabs flex justify-center gap-8 mb-10">
          <button
            onClick={() => setActiveTab('education')}
            className={`qualification__button button--flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === 'education'
                ? 'text-blue-600 bg-blue-50 border border-blue-100'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            <i className="uil uil-graduation-cap qualification__icon text-xl"></i>
            <span className="font-medium">Education</span>
          </button>

          <button
            onClick={() => setActiveTab('work')}
            className={`qualification__button button--flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === 'work'
                ? 'text-blue-600 bg-blue-50 border border-blue-100'
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            <i className="uil uil-briefcase-alt qualification__icon text-xl"></i>
            <span className="font-medium">Work</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="qualification__sections">
          {/* Education Timeline */}
          {activeTab === 'education' && (
            <div className="qualification__content">
              <div className="max-w-3xl mx-auto">
                {educationData.map((item, index) => (
                  <div key={item.id} className="qualification__data grid grid-cols-12 gap-4 mb-8">
                    {/* Left side content (odd items) */}
                    {index % 2 === 0 && (
                      <>
                        <div className="col-span-5 text-right pr-4">
                          <h3 className="qualification__title text-lg font-semibold text-title-color mb-1">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-gray-600 block mb-2">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-gray-500 text-sm flex items-center justify-end gap-1">
                            <i className="uil uil-calendar-alt"></i>
                            {item.period}
                          </div>
                        </div>
                        
                        {/* Timeline line and dot */}
                        <div className="col-span-2 relative flex flex-col items-center">
                          <span className="qualification__rounder w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2 z-10"></span>
                          {index !== educationData.length - 1 && (
                            <span className="qualification__line w-0.5 h-full bg-blue-300 absolute top-1/2"></span>
                          )}
                        </div>
                        
                        {/* Empty div for right side */}
                        <div className="col-span-5"></div>
                      </>
                    )}

                    {/* Right side content (even items) */}
                    {index % 2 === 1 && (
                      <>
                        {/* Empty div for left side */}
                        <div className="col-span-5"></div>
                        
                        {/* Timeline line and dot */}
                        <div className="col-span-2 relative flex flex-col items-center">
                          <span className="qualification__rounder w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2 z-10"></span>
                          {index !== educationData.length - 1 && (
                            <span className="qualification__line w-0.5 h-full bg-blue-300 absolute top-1/2"></span>
                          )}
                        </div>
                        
                        <div className="col-span-5 pl-4">
                          <h3 className="qualification__title text-lg font-semibold text-title-color mb-1">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-gray-600 block mb-2">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-gray-500 text-sm flex items-center gap-1">
                            <i className="uil uil-calendar-alt"></i>
                            {item.period}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Work Timeline */}
          {activeTab === 'work' && (
            <div className="qualification__content">
              <div className="max-w-3xl mx-auto">
                {workData.map((item, index) => (
                  <div key={item.id} className="qualification__data grid grid-cols-12 gap-4 mb-8">
                    {/* Left side content (odd items) */}
                    {index % 2 === 0 && (
                      <>
                        <div className="col-span-5 text-right pr-4">
                          <h3 className="qualification__title text-lg font-semibold text-title-color mb-1">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-gray-600 block mb-2">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-gray-500 text-sm flex items-center justify-end gap-1">
                            <i className="uil uil-calendar-alt"></i>
                            {item.period}
                          </div>
                        </div>
                        
                        {/* Timeline line and dot */}
                        <div className="col-span-2 relative flex flex-col items-center">
                          <span className="qualification__rounder w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2 z-10"></span>
                          {index !== workData.length - 1 && (
                            <span className="qualification__line w-0.5 h-full bg-blue-300 absolute top-1/2"></span>
                          )}
                        </div>
                        
                        {/* Empty div for right side */}
                        <div className="col-span-5"></div>
                      </>
                    )}

                    {/* Right side content (even items) */}
                    {index % 2 === 1 && (
                      <>
                        {/* Empty div for left side */}
                        <div className="col-span-5"></div>
                        
                        {/* Timeline line and dot */}
                        <div className="col-span-2 relative flex flex-col items-center">
                          <span className="qualification__rounder w-4 h-4 bg-blue-500 rounded-full absolute top-1/2 transform -translate-y-1/2 z-10"></span>
                          {index !== workData.length - 1 && (
                            <span className="qualification__line w-0.5 h-full bg-blue-300 absolute top-1/2"></span>
                          )}
                        </div>
                        
                        <div className="col-span-5 pl-4">
                          <h3 className="qualification__title text-lg font-semibold text-title-color mb-1">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-gray-600 block mb-2">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-gray-500 text-sm flex items-center gap-1">
                            <i className="uil uil-calendar-alt"></i>
                            {item.period}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;