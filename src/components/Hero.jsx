import React from "react";
import { 
    Linkedin,
    Github,
    Facebook,
    SendHorizontal,
    MousePointer,
    ArrowDown
} from 'lucide-react'

const Hero = () => {
    return(
        <section id="hero"className="section min-h-screen flex items-center py-16 z-10 dark:bg-dark-container-color">
            <div id="home" className="px-4 container sm:pb-8 sm:pt-24">
                <div className="relative">
                    {/* Social Icons - Left Side */}
                    <div className="absolute social__icons top-16 flex flex-col gap-8">
                        <a href="https://www.linkedin.com/in/natali-schwartz"
                        target="_blank"
                        rel="noopener noreferer"
                        className="home__social-icon text-xl text-first-color hover:text-first-color-alt dark:text-first-color-lighter dark:hover:text-first-color-lighter transition-colors"
                        aria-label="LinkedIn">
                            <Linkedin />
                        </a>

                        <a href="https://github.com/natalischwartz"
                        target="_blank"
                        rel="noopener noreferer"
                        className="home__social-icon text-xl text-first-color hover:text-first-color-alt dark:text-first-color-lighter dark:hover:text-first-color-lighter transition-colors"
                        aria-label="Github">
                            <Github />
                        </a>
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex flex-col items-center justify-center gap-8 sm:grid grid-cols-2">
                    {/* Image Blob */}

                    <div className="home__image flex justify-center items-center mt-4">
                        <div className="blob relative mb-10 estilo-neon rounded-[50%] bg-first-color-lighter w-[200px] h-[200px]">
                            <img src="/img/perfil.jpeg" alt="Foto Natali"
                                className="relative w-[100px] rounded-[40%] mx-auto top-5" />  
                        </div>
                    </div>
                    {/* <div className="relative">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-purple-100 to-purple-300 dark:from-purple-900/30 dark:to-purple-700/30 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                                 
                        </div>
                    </div> */}
                    {/* Text Content */}
                    <div className=" flex flex-col items-center justify-center text-center lg:text-left max-w-2xl sm:justify-start">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-title-color dark:text-dark-title-color mb-4 text-center">Hola mundo, Soy <span className="text-first-color dark:text-first-color-lighter">Natali</span></h1>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-text-color dark:text-gray-300 mb-6">Desarrolladora Full Stack</h3>
                        <p className="text-lg md:text-xl text-text-color dark:text-gray-400 mb-8 px-4 lg:px-0 text-center">Experiencia en Desarrollo Web y Diseño, produciendo proyectos de calidad</p>
                        <a href="#contact"
                        className="inline-flex justify-center gap-2 bg-first-color hover:bg-first-color-alt dark:hover:bg-purple-600 text-container-color font-medium p-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                            Contacto
                            <SendHorizontal className="text-xl ml-2"/>
                        </a>
                        {/* <a href="#portfolio"
                            className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/30 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                            Ver Proyectos
                        </a> */}
                    </div>
                </div>
                {/* Scroll Down Indicator */}
                {/* <div className="hidden md:flex justify-center mt-20">
                    <a href="#about"
                    className="group flex flex-col items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-all duration-300 hover:translate-y-1"
                    aria-label="Scroll down">
                        <div className="flex items-center gap-2">
                        <MousePointer className="group-hover:animate-bounce" size={24}/>
                        <span className="text-sm font-medium">Scroll down</span>
                    </div>
                    <ArrowDown className="group-hover:animate-bounce" size={20} />
                    </a>    
                </div> */}
            </div>
        </section>
    )
}

export default Hero;