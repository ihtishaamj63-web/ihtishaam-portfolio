<template>
  <div class="mb-12">
    <p v-if="eyebrow" class="text-teal text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-3">
      <span class="w-8 h-px bg-teal" />
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl md:text-4xl font-bold text-ink dark:text-mist mb-3">{{ title }}</h2>
    <p v-if="subtitle" class="text-slate dark:text-mist/70 max-w-2xl">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  subtitle: String
})
</script>
