<template>
  <div class="mb-12">
    <p
      v-if="eyebrow"
      class="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-cyan-glow"
    >
      <span class="h-px w-8 bg-cyan-glow" />
      {{ eyebrow }}
    </p>
    <h2 class="mb-3 text-3xl font-bold text-white md:text-4xl">{{ title }}</h2>
    <p v-if="subtitle" class="max-w-2xl text-base leading-relaxed text-white/70">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: { type: String, required: true },
  subtitle: String,
})
</script>
