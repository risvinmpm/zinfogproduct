import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cardGlass: 'rgba(255, 255, 255, 0.05)'
      },
      boxShadow: {
        glassGlow: '0 0 20px rgba(255, 255, 255, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
