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
        <header className="fixed bottom-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-lg md:top-0
        md:bottom-auto border border-amber-400">
            <nav className="container mx-auto px-4 h-12 md:h-16  flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-xl font-medium text-gray-900 dark:text-white
                hover:text-purple-400 transition-colors">
                    Natali
                </a>

                {/* Menú desktop */}
                <div>
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
                {/* Botones */}
                <div className="flex items-center space-x-4">
                    {/* Boton tema */}
                    <button onClick={toggleTheme}
                    className="text-gray-700 dark:text-gray-300 hover:text-purple-600
                    dark:hover:text-purple-400 text-xl"
                    aria-label="Cambiar tema"
                    >
                    <i className={darkMode ? Sun : Moon}></i>
                    </button>

                    {/* Boton menu movil */}
                    <button
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-700 dark:text-gray-300 text-xl"
                    aria-label="Abrir mnenú">
                        <Menu/>
                    </button>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div>
                        <div>
                            <button>

                            </button>


                        </div>


                        <div>
                            {navItems.map((navLink, index)=>(
                                <a href="">
                                    <i>

                                    </i>
                                    <span>
                                        {navLink.text}
                                    </span>
                                </a>
                            ))}




                        </div>
                    </div>




                )}



            </nav>
        </header>
    )
}

export default Header;