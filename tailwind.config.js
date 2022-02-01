module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular']
    },
    fontSize: {
      'xxs': '.50rem',
      'xs': '.75rem',
      'sm': '.50rem',
      'base': '.75rem',
      'lg': '1.0rem',
      'xl': '1.125rem',
      '2xl': '1.25rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
    },
    spacing: {
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '48px',
      '6': '64px',
      // sm: '8px',
      // md: '12px',
      // lg: '16px',
      // xl: '24px',
    },
    extend: {},
  },
  plugins: [],
}