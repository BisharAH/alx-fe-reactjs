/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF0000',
        'secondary': {
          100: '#E0E0E0',
          200: '#C0C0C0',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // corePlugins: {
  //   preflight: false, // Disables Tailwind's base styles
  // },
};