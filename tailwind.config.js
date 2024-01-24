/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
      },
      width: {
        128: '32rem',  // 512px
        144: '36rem',  // 576px
        160: '40rem',  // 640px
        180: '44rem',  // 704px
        200: '48rem',  // 768px
        300: '64rem',  // 1024px
        400: '76rem',  // 1216px
        500: '88rem',  // 1408px
        600: '96rem',  // 1536px
        700: '104rem', // 1664px
        800: '112rem', // 1792px
        900: '120rem', // 1920px 
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
        '6000': '6000ms',
        '7000': '7000ms',
        '8000': '8000ms',
        '9000': '9000ms',
        '10000': '10000ms',
      },
    },
  },
  plugins: [],
}
