/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        fraunces: ['Fraunces', 'serf'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'light-gray': '#D6E2F0',
        'grayish-blue': '#7B879D',
        'dark-blue': '#1F3251',
        'dark-cyan': '#3C8067',
        cream: '#F2EBE3',
        'very-dark-blue': '#1C232B',
        'dark-grayish-blue': '#6C7289',
      },
    },
  },
  plugins: [],
};
