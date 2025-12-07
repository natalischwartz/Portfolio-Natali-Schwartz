import React, { useState } from 'react';
import {GraduationCap,BriefcaseBusiness,CalendarDays } from 'lucide-react';

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
    <section id="experience" className="qualification pt-4 pb-8 md:pt-8 md:pb-16 dark:bg-dark-container-color">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <div className="text-center">
          <h2 className="section__title mb-12 text-2xl font-semibold  md:text-4xl  text-title-color dark:text-dark-title-color">
            Mi experiencia
          </h2>
          <span className="section__subtitle"></span>
        </div>

        {/* Tabs */}
        <div className="qualification__tabs flex justify-evenly mb-8">
          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex text-lg items-center font-medium cursor-pointer rounded-lg transition-all duration-300 ${
              activeTab === 'education'
                ? 'text-title-color hover:text-first-color'
                : 'text-gray-600 hover:text-first-color-lighter'
            }`}
          >
            <GraduationCap size={20} className='dark:text-dark-text-color mr-1'/>
            <span className="font-medium dark:text-dark-text-color">Education</span>
          </button>

          <button
            onClick={() => setActiveTab('work')}
            className={`inline-flex text-lg items-center font-medium cursor-pointer  rounded-lg transition-all duration-300 ${
              activeTab === 'work'
                ? 'text-title-color hover:text-first-color'
                : 'text-gray-600 hover:text-first-color-lighter'
            }`}
          >
            <BriefcaseBusiness size={20} className='dark:text-dark-text-color mr-1'/>
            <span className="font-medium dark:text-dark-text-color">Work</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="qualification__sections">
          {/* Education Timeline */}
          {activeTab === 'education' && (
            <div className="qualification__content block">
              <div className="">
                {educationData.map((item, index) => (
                  <div key={item.id} className="qualification__data">
                    {/* Left side content (odd items) */}
                    {index % 2 === 0 && (
                      <>
                        <div className="pl-4">
                          <h3 className="qualification__title text-sm sm:text-base text-title-color mb-1 dark:text-dark-text-color">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-xs sm:text-sm inline-block mb-4 text-text-color dark:text-dark-text-color">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-text-color-light text-xs flex gap-2  dark:text-dark-text-color">
                            <CalendarDays/>
                            {item.period}
                          </div>
                        </div>
                        
                        {/* Timeline line and dot */}
                        <div className="">
                          <span className="qualification__rounder inline-block w-3 h-3 bg-first-color rounded-[50%]"></span>
                          {index !== educationData.length - 1 && (
                            <span className="qualification__line block w-[1px] h-full bg-first-color translate-x-[6px] translate-y-[-7px]"></span>
                          )}
                        </div>
                        
                        {/* Empty div for right side */}
                        <div></div>
                      </>
                    )}

                    {/* Right side content (even items) */}
                    {index % 2 === 1 && (
                      <>
                        {/* Empty div for left side */}
                        <div></div>
                        
                        {/* Timeline line and dot */}
                        <div className="">
                          <span className="qualification__rounder inline-block w-3 h-3 bg-first-color rounded-[50%] "></span>
                          {index !== educationData.length - 1 && (
                            <span className="qualification__line block w-[1px] h-full bg-first-color translate-x-[6px] translate-y-[-7px]"></span>
                          )}
                        </div>
                        
                        <div className="">
                          <h3 className="qualification__title text-sm sm:text-base  text-title-color mb-1 dark:text-dark-text-color">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-xs sm:text-sm  inline-block text-text-color mb-2 dark:text-dark-text-color">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-text-color-light text-xs flex gap-2 dark:text-dark-text-color">
                            <CalendarDays/>
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
            <div className="qualification__content block">
              <div className="">
                {workData.map((item, index) => (
                  <div key={item.id} className="qualification__data">
                    {/* Left side content (odd items) */}
                    {index % 2 === 0 && (
                      <>
                        <div className="pl-4">
                          <h3 className="qualification__title text-sm sm:text-base  text-title-color mb-1 dark:text-dark-text-color">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-xs sm:text-sm inline-block text-text-color mb-2 dark:text-dark-text-color">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-text-color-light text-xs flex  gap-2 dark:text-dark-text-color">
                            <CalendarDays/>
                            {item.period}
                          </div>
                        </div>
                        
                         {/* Timeline line and dot */}
                        <div className="">
                          <span className="qualification__rounder inline-block w-3 h-3 bg-first-color rounded-[50%]"></span>
                          {index !== workData.length - 1 && (
                            <span className="qualification__line block w-[1px] h-full bg-first-color translate-x-[6px] translate-y-[-7px]"></span>
                          )}
                        </div>
                        
                        
                         {/* Empty div for right side */}
                        <div></div>
                      </>
                    )}

                     {/* Right side content (even items) */}
                    {index % 2 === 1 && (
                      <>
                        {/* Empty div for left side */}
                        <div></div>
                        
                        {/* Timeline line and dot */}
                        <div className="">
                          <span className="qualification__rounder inline-block w-3 h-3 bg-first-color rounded-[50%]"></span>
                          {index !== workData.length - 1 && (
                            <span className="qualification__line block w-[1px] h-full bg-first-color translate-x-[6px] translate-y-[-7px]"></span>
                          )}
                        </div>
                        
                        <div className="">
                          <h3 className="qualification__title text-sm sm:text-base text-title-color mb-1 dark:text-dark-text-color">
                            {item.title}
                          </h3>
                          <span className="qualification__subtitle text-xs sm:text-sm inline-block text-text-color mb-2 dark:text-dark-text-color">
                            {item.subtitle}
                          </span>
                          <div className="qualification__calendar text-text-color-light text-xs flex gap-2 dark:text-dark-text-color">
                            <CalendarDays/>
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