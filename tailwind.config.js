/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ride: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          red: '#dc2626',
          'red-hover': '#b91c1c',
          white: '#fafafa',
          gray: '#a3a3a3',
          'gray-light': '#d4d4d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
