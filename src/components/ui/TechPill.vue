<template>
  <span
    class="inline-block px-2.5 py-1 text-xs font-medium rounded-full border border-ink/10 dark:border-mist/15 text-slate dark:text-mist/80 bg-ink/[0.03] dark:bg-mist/[0.05] hover:border-teal/50 hover:text-teal transition-colors"
  >
    {{ label }}
  </span>
</template>

<script setup>
defineProps({ label: { type: String, required: true } })
</script>
