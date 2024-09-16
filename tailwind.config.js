module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"  
  ],
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
    require('@tailwindcss/forms'),
    require("tw-elements-react/dist/plugin.cjs")
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      keyframes:{
        pulse: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.1)'}
          },
          customSpin: {
            '0%': { transform: 'rotate(0deg)' },
            '50%': { transform: 'rotate(340deg)' },
            '100%': { transform: 'rotate(360deg)' }
          }
        },
        
      animation:{
        'pulse-grow-slow': 'pulse 2s linear infinite',
        'spin-slow': 'spin 5s cubic-bezier(0.4, 0, 0.6, 1) ',
        'custom-spin': 'customSpin 8s cubic-bezier(0.4, 0, 0.2, 1) forwards'
      },
      backgroundImage: {
        'footer-texture': "url('https://res.cloudinary.com/fedexx/image/upload/v1692113799/invi/curva01_violeta_tkziux.png')",
        'fondo-turquesa': "url('https://res.cloudinary.com/fedexx/image/upload/v1720983212/WhatsApp_Image_2024-07-03_at_5.57.00_PM_qqqvwv.jpg')"
      },

      colors: {
        violeta: '#772c87',
      }

    },
  },

};


