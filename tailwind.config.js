/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // SMARTMED branding (Calm Teal palette)
        smartmed: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          accent: '#06B6D4',
          bg: '#F3F7F6',
        },
        // Vibrant accent to add warmth and contrast
        coral: {
          50: '#fff4f2',
          100: '#ffe9e4',
          200: '#ffccc1',
          300: '#ffab96',
          400: '#ff8b6b',
          500: '#ff6b40',
          600: '#ff5826',
          700: '#e0441f',
          800: '#b53218',
          900: '#87240f',
        },
        // Useful gradients for hero sections
        gradients: {
          tealToCoral: 'linear-gradient(90deg, #14b8a6 0%, #ff6b40 100%)',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f7fb',
          200: '#e6edf3',
          300: '#cfdbe6',
          400: '#9fb3c8',
          500: '#64748b',
          600: '#475569',
          700: '#344155',
          800: '#1f2933',
          900: '#0b1220',
        }
      },
    },
  },
  plugins: [],
}