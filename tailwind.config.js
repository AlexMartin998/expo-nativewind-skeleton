/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './presentation/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],

  theme: {
    extend: {
      fontFamily: {
        // nombre tal cual esta en el archivo de fuentes: WorkSans-Black.ttf
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
