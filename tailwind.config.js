export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep-blue': '#001a33',
        'ocean-blue': '#0a3f5a',
        'cyan-glow': '#00d9ff',
        'teal-bright': '#1dd1a1',
        'dark-navy': '#000d1a',
        sand: '#e8d7c3',
        ink: '#000d1a',
        slate: '#b5d0de',
        mist: '#ffffff',
        teal: { DEFAULT: '#00d9ff', dark: '#0a8ca8' },
        amber: '#e8d7c3',
        surface: '#0a3f5a',
        'surface-dark': '#000d1a',
        paper: '#eef9f7',
        'paper-strong': '#ffffff',
        seafoam: '#d9f3ee',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
