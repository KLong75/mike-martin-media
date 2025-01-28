/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        
      },
      colors: {
        'light-green': '#a4b555',
        'dark-green': '#4d6710'
      },  
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      height: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
      },
      width: {
        100: '25rem',   // 400px
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
      maxWidth: {
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
        1000: '128rem', // 2048px
        1100: '136rem', // 2176px
        1200: '144rem', // 2304px
        1300: '152rem', // 2432px
        1400: '160rem', // 2560px
        1500: '168rem', // 2688px
        1600: '176rem', // 2816px
        1700: '184rem', // 2944px
        1800: '192rem', // 3072px
        1900: '200rem', // 3200px
        2000: '208rem', // 3328px
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms',
        "5500": "5500ms",
        '6000': '6000ms',
        '7000': '7000ms',
        '8000': '8000ms',
        '9000': '9000ms',
        '10000': '10000ms',
        '11000': '11000ms',
        '12000': '12000ms',
        '13000': '13000ms',
        '14000': '14000ms',
        '15000': '15000ms',
        '16000': '16000ms',
        '17000': '17000ms',
        '18000': '18000ms',
        '19000': '19000ms',
        '20000': '20000ms',
        '21000': '21000ms',
        '22000': '22000ms',
        '23000': '23000ms',
        '24000': '24000ms',
      },
      screens: {
        'xs': '400px',
        '3xl': '1800px',
        '4xl': '2200px',
        '5xl': '2600px',
        '6xl': '2800px',
        '7xl': '3000px',
        '8xl': '3200px',
      },
    },
  },
  plugins: [],
}

