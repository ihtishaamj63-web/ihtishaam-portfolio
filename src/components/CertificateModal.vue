<template>
  <div class="certificate-overlay" @click="emit('close')">
    <section
      class="certificate-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-title"
      @click.stop
    >
      <div class="certificate-header">
        <h2 id="certificate-title">{{ certificate.title }}</h2>
        <button type="button" aria-label="Close certificate" @click="emit('close')">
          Close
        </button>
      </div>
      <iframe
        class="certificate-document"
        :src="certificate.src"
        :title="certificate.title"
      ></iframe>
      <a
        class="certificate-open"
        :href="certificate.src"
        target="_blank"
        rel="noopener"
      >
        Open certificate in a new tab
      </a>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  certificate: { type: Object, required: true },
})

const emit = defineEmits(['close'])

function onKeydown(event) {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.certificate-overlay {
  position: fixed;
  inset: 0;
  z-index: 2100;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(20, 22, 20, 0.75);
}

.certificate-dialog {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 12px;
  width: min(100%, 1000px);
  height: min(92vh, 900px);
  padding: 18px;
  background: var(--paper);
  color: var(--ink);
  border: 1px solid var(--line);
}

.certificate-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.certificate-header h2 {
  font-family: var(--serif);
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
}

.certificate-header button,
.certificate-open {
  color: var(--green);
  font-family: var(--mono);
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.certificate-document {
  width: 100%;
  height: 100%;
  min-height: 0;
  border: 1px solid var(--line);
  background: white;
}

.certificate-open {
  justify-self: start;
}

@media (max-width: 520px) {
  .certificate-overlay {
    padding: 10px;
  }

  .certificate-dialog {
    height: 94vh;
    padding: 12px;
  }
}
</style>
