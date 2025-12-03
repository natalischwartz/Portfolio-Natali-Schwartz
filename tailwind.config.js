// personalizas colores, fuentes, breakpoints, plugins y todo el diseño de tu sistema.


/** @type {import('tailwindcss').Config} */
export default {
 darkMode: "class",
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend:{
      colors:{
         // ========== MODO CLARO (default) ==========
        'first-color':'hsl(274, 69%, 61%)',
        'first-color-second':'hsl(274, 69%, 61%)',
        'first-color-alt':'hsl(274,57%, 53%)',
        'first-color-lighter':'hsl(274, 92%, 85%)',
        'title-color':'hsl(274, 8%, 15%)',
        'text-color':'hsl(274, 8%, 45%)',
        'text-color-light':'hsl(274, 8%, 65%)',
        'input-color':'hsl(274, 70%, 96%)',
        'body-color':'hsl(274, 60%, 99%)',
        'container-color':'#fff',
        'scroll-bar-color':'hsl(274, 12%, 90%)',
        'scroll-thumb-color':'hsl(274, 12%, 80%)',

        // ========== MODO OSCURO ==========
        'dark-first-color-second': 'hsl(274, 30%, 8%)',
        'dark-title-color': 'hsl(274, 8%, 95%)',
        'dark-text-color': 'hsl(274, 8%, 75%)',
        'dark-input-color': 'hsl(274, 29%, 16%)',
        'dark-body-color': 'hsl(274, 28%, 12%)',
        'dark-container-color': 'hsl(274, 29%, 16%)',
        'dark-scroll-bar-color': 'hsl(274, 12%, 20%)',
        'dark-scroll-thumb-color': 'hsl(274, 12%, 30%)',
      },
      
    }
  },
  prefix: "",
  plugins: [],
}