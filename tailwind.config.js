export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0f0f0f',
        slate: '#303030',
        mist: '#ffffff',
        teal: { DEFAULT: '#14b8a6', dark: '#0f766e' },
        amber: '#14b8a6',
        surface: '#ffffff',
        'surface-dark': '#0f0f0f'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
