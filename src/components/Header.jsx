import { useState } from "react"
import {Home, 
  User, 
  FileText, 
  Briefcase, 
  Image as ImageIcon, 
  MessageCircle,
  Moon,
  Sun,
  Menu,
  X,
  Grid3x3} from 'lucide-react'


const Header = () =>{

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleTheme = () =>{
        setDarkMode(!darkMode);
        if(!darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    };

    const navItems = [
    {href:"#home", icon:Home , text:"Inicio"},
    {href:"#about", icon:User , text:"Sobre mi"}, 
    {href:"#skills", icon:FileText , text:"Habiliades"}, 
    {href:"#experience", icon:Briefcase , text:"Experiencia"}, 
    {href:"portfolio", icon:ImageIcon , text:"Portafolio"}, 
    {href:"contact", icon:MessageCircle , text:"Contacto"} 
    ]



    return (
        <header className="fixed bottom-0 sm:top-0 left-0 w-full z-50 bg-body-color dark:bg-dark-container-color shadow-lg md:top-0
        md:bottom-auto">
            <nav className="mx-auto px-4 h-12 md:h-16  flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-xl font-medium text-title-color dark:text-dark-title-color
                hover:text-first-color transition-colors dark:hover:text-first-color-lighter">
                    Natali
                </a>

                {/* Menú desktop */}
                <div className="hidden sm:flex justify-center items-center">
                    {navItems.map((navLink, index)=>{
                        const Icon = navLink.icon
                        return(
                            <a key={index} href={navLink.href}
                            onClick={() =>{ setIsMenuOpen(false)}}
                            className="items-center p-4 rounded-lg hover:bg-first-color-lighter dark:hover:bg-gray-700 transition-colors group">
                                {/* <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"/> */}
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    {navLink.text}
                                </span>
                            </a>
                        )
                    })}
                </div>
                {/* Botones */}
                <div className="flex items-center space-x-4">
                    {/* Boton tema */}
                    <button onClick={toggleTheme}
                    className="text-title-color dark:text-dark-title-color hover:text-first-color
                    dark:hover:text-first-color-lighter text-xl"
                    aria-label="Cambiar tema"
                    >
                    {darkMode ? <Sun size={24}/> : <Moon size={24}/>}
                    </button>

                    {/* Boton menu movil */}
                    <button
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}
                    className="sm:hidden text-title-color dark:text-dark-title-color text-xl"
                    aria-label="Abrir mnenú">
                        <Grid3x3/>
                    </button>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="absolute bottom-full left-0 w-full bg-body-color dark:bg-dark-body-color shadow-lg rounded-t-2xl p-6 md:hidden">
                        <div className="flex justify-end mb-4">
                            <button
                            onClick={()=> setIsMenuOpen(false)}
                            className="text-first-color hover:text-first-color-alt dark:text-dark-title-color"
                            aria-label="Cerar menú">
                                <X className="w-7 h-7"/>
                            </button>
                        </div>


                        <div className="grid grid-cols-2 gap-4">
                            {navItems.map((navLink, index)=>{
                                const Icon = navLink.icon
                        return(
                            <a key={index} href={navLink.href}
                            onClick={() =>{ setIsMenuOpen(false)}}
                            className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                                <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"/>
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    {navLink.text}
                                </span>
                            </a>
                            )
                        })}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;