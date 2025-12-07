import React from 'react';

const Skills = () => {
  const skillsData = [
    { name: 'HTML', icon: '/img/html-icon.png', alt: 'icono-html' },
    { name: 'CSS', icon: '/img/csss-icon.png', alt: 'icono-css' },
    { name: 'JavaScript', icon: '/img/js-icon.png', alt: 'javascript-icono' },
    { name: 'Bootstrap', icon: '/img/bs-icon.png', alt: 'icono-bootstrap' },
    { name: 'Git', icon: '/img/git-icon.png', alt: 'icono-git' },
    { name: 'Node.js', icon: '/img/node-js-icon.png', alt: 'icono-node-js' },
    { name: 'React', icon: '/img/react-icon.png', alt: 'icono-react' },
    { name: 'MongoDB', icon: '/img/mongodb-icon.png', alt: 'icono-mongodb' }
  ];

  return (
    <section id="skills" className="skills section py-16 dark:bg-dark-container-color">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="section__title text-2xl font-semibold md:text-4xl text-title-color dark:text-dark-title-color mb-12">
            Skills
          </h2>
          {/* <span className="section__subtitle"></span> */}
        </div>

        {/* Skills Grid */}
        <div className="skills__container">
          <div className="skills__content grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {skillsData.map((skill, index) => (
              <div 
                key={index} 
                className="skills__tech flex flex-col items-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center p-4">
                  <img 
                    src={skill.icon} 
                    alt={skill.alt}
                    className="max-h-12 sm:max-h-14 object-contain"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-title-color dark:text-dark-text-color">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;