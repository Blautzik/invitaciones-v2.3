module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio")
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
          }
        },
      animation:{
        'pulse-grow-slow': 'pulse 2s linear infinite'
      },
      backgroundImage: {
        'footer-texture': "url('https://res.cloudinary.com/fedexx/image/upload/v1692113799/invi/curva01_violeta_tkziux.png')",
      },

    },
  },

};


