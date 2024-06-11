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
    extend: {
      colors: {
        violet: {
          50: '#fefcff', // violet1
          100: '#fdf7fd', // violet2
          200: '#fbebfb', // violet3
          300: '#f7def8', // violet4
          400: '#f2d1f3', // violet5
          500: '#e9c2ec', // violet6
          600: '#deade3', // violet7
          700: '#cf91d8', // violet8
          800: '#ab4aba', // violet9
          900: '#953ea3', // violet11 (darker variant for high contrast, violet10 can be too close in lightness to violet9)
        },
        teal: {
          50: '#FAFEFD', // violet1
          100: '#F3FBF9', // violet2
          200: '#E0F8F3', // violet3
          300: '#CCF3EA', // violet4
          400: '#B8EAE0', // violet5
          500: '#A1DED2', // violet6
          600: '#83CDC1', // violet7
          700: '#53B9AB', // violet8
          800: '#12A594', // violet9
          900: '#008573', // violet11 (darker variant for high contrast, violet10 can be too close in lightness to violet9)
        },
        gray: {
          50: '#fcfcfc', // gray1
          100: '#f9f9f9', // gray2
          200: '#f0f0f0', // gray3
          300: '#e8e8e8', // gray4
          400: '#e0e0e0', // gray5
          500: '#d9d9d9', // gray6
          600: '#cecece', // gray7
          700: '#bbbbbb', // gray8
          800: '#8d8d8d', // gray9
          900: '#646464', // gray11 (used here for better contrast and utility, gray10 can be used alternatively or as an extra step if needed)
        },
        // Add other colors
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        // Add custom border radius here
        xl: '1rem',
      },

      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        // Define custom spacings
        5: '1.25rem',
        6: '1.5rem',
        // etc.
      },

      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        // Add custom font sizes
        '2xl': '1.5rem',
      },

      boxShadow: {
        none: 'none',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        // Define custom shadows
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },

      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
