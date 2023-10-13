/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a61f7",
        secondary: "#15a1d3",
        whitesmoke: "#fbfbfb",
        dark: "#30272b",
        yellow: "#fea500",
        'dark-blue': "#2b3b89",
        'light-blue': "#286cf4"
      },
      fontFamily: {
        'lato': ['Lato', 'IBM Plex Sans', 'sans-serif'],
        'nunito': ['IBM Plex Sans', 'Nunito' , 'sans-serif']
      }
    },
  },
  plugins: [],
}

