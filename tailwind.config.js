




/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        quicksand: ['Quicksand', 'sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
        playwrite: ["Playwrite GB S", 'sans-serif'],
       outfit: ["Outfit", 'sans-serif'],
        serif: ['Sixtyfour Convergence', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        azulacri: '#104e74',
        naviblue: '#2F4156',
        tealblue: '#567C8D',
        skyblue: '#C8D9EC',
        beige: '#F5EFEB',
        mySin: {
          '50': '#fffaeb',
          '100': '#fef1c7',
          '200': '#fde28a',
          '300': '#fbcd4e',
          '400': '#fab316',
          '500': '#f4960c',
          '600': '#d87007',
          '700': '#b34e0a',
          '800': '#923c0e',
          '900': '#78320f',
          '950': '#451803',
        },
        forestGreen: {  // Añadido aquí
          '50': '#effef3',
          '100': '#dafee5',
          '200': '#b8facb',
          '300': '#81f4a3',
          '400': '#43e573',
          '500': '#1acd50',
          '600': '#0faa3e',
          '700': '#119038',
          '800': '#12692d',
          '900': '#115627',
          '950': '#033013',
        },
        bluewood: {
          '50': '#f5f7fa',
          '100': '#eaeef4',
          '200': '#d1dbe6',
          '300': '#a8bcd1',
          '400': '#7998b7',
          '500': '#587c9f',
          '600': '#446385',
          '700': '#384f6c',
          '800': '#2f4156',
          '900': '#2d3b4d',
          '950': '#1e2733',
      },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
