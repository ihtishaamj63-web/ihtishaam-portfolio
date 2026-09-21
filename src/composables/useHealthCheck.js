import { ref } from 'vue'

export function useHealthCheck(url) {
  const status = ref('checking')

  async function check() {
    if (!url) { status.value = 'down'; return }
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), 6000)
      const res = await fetch(url, { method: 'GET', signal: controller.signal })
      clearTimeout(timer)
      status.value = res.ok ? 'up' : 'down'
    } catch (e) {
      status.value = 'down'
    }
  }

  check()
  return { status, check }
}
