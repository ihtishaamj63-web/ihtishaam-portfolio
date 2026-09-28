<template>
  <div
    class="cursor-hint"
    :class="{ on: text }"
    :style="{ transform: 'translate(' + (x + 18) + 'px, ' + (y + 18) + 'px)' }"
    aria-hidden="true"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useCursorHint } from '../composables/useCursorHint'

const { text, x, y, hideHint } = useCursorHint()

let frame = null

function onMove(e) {
  if (frame) return
  frame = requestAnimationFrame(() => {
    x.value = e.clientX
    y.value = e.clientY
    frame = null
  })
}

function onDocLeave() {
  hideHint()
}

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onDocLeave)
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  document.removeEventListener('mouseleave', onDocLeave)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<style scoped>
.cursor-hint {
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 10px;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.06em;
  white-space: nowrap;
  pointer-events: none;
  z-index: 3000;
  opacity: 0;
  transition: opacity 0.12s ease;
}

.cursor-hint.on {
  opacity: 1;
}

/* Never show it on touch devices. */
@media (pointer: coarse) {
  .cursor-hint {
    display: none;
  }
}
</style>
