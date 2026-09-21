export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0a192f',
        slate: '#475569',
        mist: '#e6f1ff',
        teal: { DEFAULT: '#14b8a6', dark: '#0f766e' },
        amber: '#f59e0b',
        surface: '#ffffff',
        'surface-dark': '#0b1220'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
