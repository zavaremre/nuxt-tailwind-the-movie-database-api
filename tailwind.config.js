module.exports = {
  mode: 'jit',
  darkMode: 'class',
  variants: {
    display: ['responsive'],
  },
  theme: {
    extend: {
      colors: {
        gold: '#915907',
        'input-color': '#eef3f8',
        f2: '#f2f2f2',
        muted: '#6b7280',
      },
      fontSize: {
        xxs: '0.688rem',
      },
      screens: {
        xs: '100%',
        sm: '600px',
        md: '728px',
        lg: '1128px',
        xl: '1128px',
        '2xl': '1128px',
      },
      fontFamily: {
        sans: ['Titillium Web', 'sans-serif'],
      },
    },

    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
    },
  },
}
