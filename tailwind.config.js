/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: '1102px', // Change the lg breakpoint to 1023px
      md: '974px',
    },
    extend: {
      colors: {
        'dozzer-orange': '#F17101',
        'dozzer-yellow': '#F9A301',
      },
      fontSize: {
        header: '32px', // Header text size 32px
        subheader: '24px', // Subheader text size 24px
        bodytext: '16px', // Body text size 16px
      },
      borderRadius: {
        md: '20px',
      },
      keyframes: {
        slowspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'slow-spin': 'slowspin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Clash Display', 'Clash Display Bold', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
