import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        'spring-green': {
        '50': '#eefff7',
        '100': '#d6ffee',
        '200': '#b0ffde',
        '300': '#73ffc6',
        '400': '#34f9a7',
        '500': '#04e387',
        '600': '#00bd6c',
        '700': '#029358',
        '800': '#087348',
        '900': '#095e3e',
        '950': '#003521',
    },
    
        
      },
    },
  },
  plugins: [],
};
export default config;
