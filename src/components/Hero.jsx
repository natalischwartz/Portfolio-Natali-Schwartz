import React from "react";
import { 
    Linkedin,
    Github,
    Facebook,
    MessageCircle,
    MousePointer,
    ArrowDown
} from 'lucide-react'

const Hero = () => {
    return(
        <section id="hero"className="section min-h-screen flex items-center md:pt-20 z-10">
            <div className="container mx-auto px-4">
                <div className="relative">
                    {/* Social Icons - Left Side */}
                    <div className=" hidden absolute left-0 top-10 md:top-20 md:flex flex-col gap-6 z-10">
                        <a href="https://www.linkedin.com/in/natali-schwartz"
                        target="_blank"
                        rel="noopener noreferer"
                        className="home__social-icon text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                        aria-label="LinkedIn">
                            <Linkedin size={28} />
                        </a>

                        <a href="https://github.com/natalischwartz"
                        target="_blank"
                        rel="noopener noreferer"
                        className="home__social-icon text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
                        aria-label="Github">
                            <Github size={28} />
                        </a>
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex flex-col items-center justify-center gap-8 lg:gap-24">
                    {/* Image Blob */}
                    <div className="relative">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-linear-to-br from-purple-100 to-purple-300 dark:from-purple-900/30 dark:to-purple-700/30 shadow-lg shadow-purple-500/20 flex items-center justify-center">
                                <img src="/img/perfil.jpeg" alt="Foto Natali"
                                className="w-64 h-64 md:w-60 md:h-60 rounded-[40%] object-contain dark:border-gray-800 shadow-lg " />   
                        </div>
                    </div>
                    {/* Text Content */}
                    <div className="order-1 lg:order-2 text-center lg:text-left max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">Hola mundo, Soy <span className="text-purple-600 dark:text-purple-400">Natali</span></h1>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Desarrolladora Full Stack</h3>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 px-4 lg:px-0">Experiencia en Desarrollo Web y Diseño, produciendo proyectos de calidad</p>
                        <div className="flex flex-col gap-4 justify-center lg:justify-start">
                            <a href=""
                            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30">
                                Contacto
                                <MessageCircle size={20}/>
                            </a>
                            <a href="#portfolio"
                             className="inline-flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/30 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                                Ver Proyectos
                            </a>
                        </div>
                    </div>
                </div>
                {/* Scroll Down Indicator */}
                <div className="hidden md:flex justify-center mt-20">
                    <a href="#about"
                    className="group flex flex-col items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-all duration-300 hover:translate-y-1"
                    aria-label="Scroll down">
                        <div className="flex items-center gap-2">
                        <MousePointer className="group-hover:animate-bounce" size={24}/>
                        <span className="text-sm font-medium">Scroll down</span>
                    </div>
                    <ArrowDown className="group-hover:animate-bounce" size={20} />
                    </a>    
                </div>
            </div>
        </section>
    )
}

export default Hero;