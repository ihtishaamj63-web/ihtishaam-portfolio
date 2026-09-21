import { ref, onMounted } from 'vue'

export function useTheme() {
  const dark = ref(false)

  function apply(value) {
    dark.value = value
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', value)
    }
  }

  function toggle() {
    const next = !dark.value
    apply(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-theme', next ? 'dark' : 'light')
    }
  }

  onMounted(() => {
    const stored = window.localStorage.getItem('portfolio-theme')
    if (stored) return apply(stored === 'dark')
    apply(window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  return { dark, toggle }
}
