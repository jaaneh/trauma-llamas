module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        'tl-yellow': '#FCD34D',
        'tl-bg-secondary': '#192131',
        'tl-divider': '#2c384c'
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(3px)'
          }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      },
      typography: theme => ({
        sm: {
          css: {
            color: theme('colors.gray.400'),
            maxWidth: 'auto',

            a: {
              color: theme('colors.yellow.300'),
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {}
  },
  daisyui: {
    // themes: ['pastel']
    themes: ['fantasy']
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')]
}
