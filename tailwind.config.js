/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js,ts}'],
  important: true,
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      body: { DEFAULT: '#E5E5E5', secondary: '#E2E2E2' },
      brown: {
        DEFAULT: '#944B39',
        secondary: '#E6AD9B',
      },
      black: '#1E1612',
      pink: '#EE8289',
      white: '#fff',
      transparent: 'transparent',
    },
    extend: {
      boxShadow: {
        primary: '0px 4px 40px rgba(0,0,0,0.02)',
      },
    },
  },
  plugins: [],
};
