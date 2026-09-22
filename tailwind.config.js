export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#17352b',
        slate: '#52645a',
        mist: '#edf3e9',
        teal: { DEFAULT: '#3d7861', dark: '#285440' },
        amber: '#b96543',
        surface: '#f7f4eb',
        'surface-dark': '#10271f'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
