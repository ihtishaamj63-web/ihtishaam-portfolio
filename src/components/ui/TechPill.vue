<template>
  <span
    class="inline-block border border-white/30 bg-white/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:border-teal hover:bg-teal hover:text-ink"
  >
    {{ label }}
  </span>
</template>

<script setup>
defineProps({ label: { type: String, required: true } })
</script>
