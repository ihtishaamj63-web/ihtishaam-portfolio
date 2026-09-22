<template>
  <section class="hero relative isolate overflow-hidden py-24 md:py-36 lg:py-44">
    <svg class="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60 dark:opacity-40" viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" class="text-teal/30" stroke-width="1"><path d="M-20 525 C160 440 190 590 350 470 S580 355 690 440 S900 580 1220 340" /><path d="M65 90 C190 185 240 115 355 230 S570 300 680 180 S930 40 1140 145" /><path d="M220 690 C275 510 425 580 475 375 S610 180 810 245 S1020 260 1180 70" /></g>
      <g class="text-teal" fill="currentColor"><circle cx="185" cy="515" r="5" class="node-pulse" /><circle cx="350" cy="470" r="4" /><circle cx="690" cy="440" r="5" class="node-pulse delay" /><circle cx="930" cy="520" r="3" /><circle cx="355" cy="230" r="4" /><circle cx="680" cy="180" r="5" class="node-pulse slow" /><circle cx="810" cy="245" r="3" /><circle cx="1020" cy="260" r="5" /></g>
      <g class="text-amber/45" fill="none" stroke="currentColor" stroke-width="2"><path d="M990 95c-42 28 42 47 0 76s42 47 0 76-42 47 0 76"/><path d="M1060 95c42 28-42 47 0 76s-42 47 0 76 42 47 0 76"/><path d="M1000 115h50m-50 76h50m-50 76h50m-50 76h50"/></g>
      <path d="M140 145c25-20 41-17 61 2-22 3-35 12-47 30-3-14-10-23-14-32Z" class="text-ink/25 dark:text-mist/20" fill="currentColor"/>
    </svg>
    <div class="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_55%_15%,rgba(61,120,97,.14),transparent_42%),linear-gradient(135deg,#e8e5d8_0%,#f7f4eb_55%,#e1ece3_100%)] dark:bg-[radial-gradient(ellipse_at_55%_15%,rgba(61,120,97,.2),transparent_42%),linear-gradient(135deg,#10271f,#17352b)]" />
    <div class="container relative">
      <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal">Science × software</p>
      <h1 class="max-w-4xl font-heading text-5xl font-extrabold tracking-tight md:text-7xl"><span v-for="(ch, i) in nameChars" :key="i" class="inline-block" :style="{ animation: `fadeUp 600ms ${i * 40}ms cubic-bezier(.2,.7,.2,1) both` }">{{ ch === ' ' ? '\u00A0' : ch }}</span></h1>
      <p class="mt-6 max-w-2xl text-xl leading-relaxed text-slate dark:text-mist/75 md:text-2xl">I solve problems at the intersection of science and software.</p>
      <p class="mt-4 max-w-2xl leading-relaxed text-slate dark:text-mist/65">Full-stack developer with a BSc in Biodiversity. I bring scientific rigor, systems thinking, and data discipline to every project.</p>
      <p class="mt-7 h-7 text-sm font-medium text-teal" aria-live="polite">I build <Transition name="word" mode="out-in"><span :key="word">{{ word }}</span></Transition> systems.</p>
      <div class="mt-8 flex flex-wrap gap-3"><BaseButton href="#projects">See what I’ve built</BaseButton><BaseButton href="#about" variant="ghost">Read my story</BaseButton></div>
      <a href="#featured-work" class="mt-14 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.16em] text-slate hover:text-teal dark:text-mist/60">Scroll to explore <span aria-hidden="true">↓</span></a>
    </div>
  </section>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
const nameChars = 'Ihtishaam Johnson.'.split(''); const words = ['reliable', 'resilient', 'thoughtful']; const word = ref(words[0]); let timer
onMounted(() => { let i = 0; timer = setInterval(() => { i = (i + 1) % words.length; word.value = words[i] }, 3800) }); onUnmounted(() => clearInterval(timer))
</script>
<style scoped>
.node-pulse { animation: nodePulse 5s ease-in-out infinite; transform-origin: center; }.delay { animation-delay: 1.2s; }.slow { animation-duration: 7s; } @keyframes nodePulse { 50% { opacity: .35; transform: scale(1.7); } }.word-enter-active,.word-leave-active { transition: opacity 800ms ease; }.word-enter-from,.word-leave-to { opacity: 0; } @media (prefers-reduced-motion: reduce) { .node-pulse { animation: none; }.word-enter-active,.word-leave-active { transition: none; } }
</style>
