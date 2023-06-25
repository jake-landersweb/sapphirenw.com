/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'img': "url('/background.webp')",
      }),
      fontFamily: {
        jose: ["JosefinSans", "sans-serif"],
      },
      colors: {
        success: "#0D936B",
        error: "#E74C3C",
        xcheck: "#7bc5d6",
        autoblog: "#091862",
        g1: "#E2E5ED",
        g5: "#343C46",
        lt: {
          DEFAULT: '#EDEDF3',
          '50': '#FAFAFC',
          '100': '#F2F3F7',
          '200': '#E2E5ED',
          '300': '#D3D7E3',
          '400': '#C3C9D9',
          '500': '#B3BAD0',
          '600': '#A4ACC6',
          '700': '#949EBC',
          '800': '#727FA6',
          '900': '#56638A'
        },
        dk: {
          DEFAULT: '#1A1E23',
          '50': '#5B697B',
          '100': '#576475',
          '200': '#4E5A69',
          '300': '#45505E',
          '400': '#3D4652',
          '500': '#343C46',
          '600': '#2B323A',
          '700': '#23282F',
          '800': '#1A1E23',
          '900': '#020203'
        },
        acc: "#ff6584",
        main: {
          DEFAULT: '#353AB8',
          50: '#BABBEB',
          100: '#AAACE6',
          200: '#8A8DDD',
          300: '#6A6ED4',
          400: '#4B50CB',
          500: '#353AB8',
          600: '#2B2F94',
          700: '#202471',
          800: '#16184D',
          900: '#0C0D29',
          950: '#070718'
        },
      }
    },
  },
  plugins: [],
}

