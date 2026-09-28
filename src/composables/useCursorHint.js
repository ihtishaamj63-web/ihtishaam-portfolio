import { ref } from 'vue'

// Shared cursor-hint state. Module-level refs are singletons,
// so every component that calls this reads and writes the same state.
const text = ref('')
const x = ref(-200)
const y = ref(-200)

export function useCursorHint() {
  const showHint = (t) => {
    text.value = t
  }
  const hideHint = () => {
    text.value = ''
  }
  return { text, x, y, showHint, hideHint }
}
