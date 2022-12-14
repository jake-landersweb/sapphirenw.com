/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jose: ["JosefinSans", "sans-serif"],
      },
      colors: {
        acc: {
          DEFAULT: "#ff6584"
        },
        main: {
          DEFAULT: '#353AB8',
          '50': '#BABBEB',
          '100': '#AAACE6',
          '200': '#8A8DDD',
          '300': '#6A6ED4',
          '400': '#4B50CB',
          '500': '#353AB8',
          '600': '#282C8C',
          '700': '#1C1F61',
          '800': '#0F1135',
          '900': '#03030A'
        },
        txt: {
          DEFAULT: '#23262E',
          '50': '#C2C6D1',
          '100': '#B6BCC8',
          '200': '#9FA6B6',
          '300': '#8891A5',
          '400': '#707B93',
          '500': '#5E687C',
          '600': '#4D5465',
          '700': '#3B414E',
          '800': '#23262E',
          '900': '#0B0C0E'
        },
        'txt-dark': {
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
        bg: {
          DEFAULT: '#FFFFFF',
          '50': '#FFFFFF',
          '100': '#F9F9FB',
          '200': '#ECEEF3',
          '300': '#E0E2EB',
          '400': '#D3D7E4',
          '500': '#C7CBDC',
          '600': '#BAC0D4',
          '700': '#ADB5CC',
          '800': '#A1A9C4',
          '900': '#949EBC'
        },
        'bg-dark': {
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
      }
    },
  },
  plugins: [],
}
