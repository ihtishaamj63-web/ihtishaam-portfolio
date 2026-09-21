<template>
  <main class="min-h-[70vh] flex items-center justify-center">
    <div class="text-center">
      <h1 class="font-heading text-7xl font-extrabold text-teal mb-4 animate-pulse">404</h1>
      <p class="text-slate dark:text-mist/70 mb-6">That page doesn't exist.</p>
      <BaseButton to="/">Back home</BaseButton>
    </div>
  </main>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>
