<template>
  <section class="relative overflow-hidden py-20 md:py-32">
    <div
      class="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
      style="background: linear-gradient(120deg, #14b8a6 0%, #0f766e 30%, #0a192f 60%, #14b8a6 100%); background-size: 300% 300%; animation: gradientShift 18s ease infinite;"
    />
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.85)_70%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,25,47,0.85)_70%)]" />

    <div class="container relative">
      <p class="text-teal font-medium mb-3">Hi, my name is</p>
      <h1 class="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
        <span
          v-for="(ch, i) in nameChars"
          :key="i"
          class="inline-block"
          :style="{ animation: `fadeUp 600ms ${i * 40}ms cubic-bezier(.2,.7,.2,1) both` }"
        >{{ ch === ' ' ? '\u00A0' : ch }}</span>
      </h1>
      <h2 class="font-heading text-2xl md:text-3xl text-slate dark:text-mist/80 mb-6 h-10">
        <span class="text-teal">{{ typed }}</span><span class="animate-pulse">|</span>
      </h2>
      <p class="max-w-2xl text-slate dark:text-mist/70 mb-8">
        Full-stack developer with a BSc in Biodiversity &amp; Conservation Biology from UWC. I bring scientific rigor, data discipline, and systems thinking to every line of code — currently building at Life Choices Academy.
      </p>
      <div class="flex flex-wrap gap-3">
        <BaseButton to="/projects">View projects</BaseButton>
        <BaseButton to="/about" variant="ghost">About me</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const nameChars = 'Ihtishaam Johnson.'.split('')
const phrases = [
  'I build things for the web.',
  'Data-driven. Detail-obsessed.',
  'Science meets software.'
]
const typed = ref('')
let phraseIdx = 0, charIdx = 0, deleting = false, timer

function tick() {
  const current = phrases[phraseIdx]
  if (!deleting) {
    typed.value = current.slice(0, ++charIdx)
    if (charIdx === current.length) {
      deleting = true
      timer = setTimeout(tick, 1800)
      return
    }
  } else {
    typed.value = current.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      phraseIdx = (phraseIdx + 1) % phrases.length
    }
  }
  timer = setTimeout(tick, deleting ? 35 : 65)
}

onMounted(() => { timer = setTimeout(tick, 800) })
onUnmounted(() => clearTimeout(timer))
</script>
