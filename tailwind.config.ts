import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        moto: {
          black: '#0A0A0A',
          dark: '#111111',
          gray: '#1A1A1A',
          accent: '#E63946',
          gold: '#D4A853',
          white: '#F5F5F5',
          muted: '#888888',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
        'glitch': 'glitch 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
