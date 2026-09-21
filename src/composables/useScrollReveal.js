import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal(options = { threshold: 0.15 }) {
  const el = ref(null)
  let observer = null

  onMounted(() => {
    if (!el.value) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.value.classList.add('is-visible')
      return
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el }
}
