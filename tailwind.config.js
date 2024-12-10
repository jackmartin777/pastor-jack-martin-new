/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0F2043',
          accent: '#DC9E18',
          gray: '#6E7271',
          light: '#E7ECEF',
          cream: '#FBFBF2',
          burgundy: '#44050c'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #44050c 0%, #0F2043 100%)',
        'gradient-gold': 'linear-gradient(135deg, #DC9E18 0%, #E7ECEF 100%)',
        'gradient-light': 'linear-gradient(to bottom, #ffffff, #f3f4f6)',
        'gradient-cream': 'linear-gradient(to bottom, #FBFBF2, #ffffff)',
        'gradient-gray': 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
        'hero-pattern': "linear-gradient(to bottom, rgba(15, 32, 67, 0.92), rgba(68, 5, 12, 0.95)), url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070')",
      },
    },
  },
  plugins: [],
};