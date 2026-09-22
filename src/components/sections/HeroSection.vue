<template>
  <section class="relative isolate overflow-hidden bg-ink py-28 text-white md:py-40">
    <svg class="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-50" viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="#14b8a6" stroke-width="5">
        <path d="M730 -30 C530 80 930 160 730 270 S530 460 730 570 S930 680 730 790" />
        <path d="M900 -30 C1100 80 700 160 900 270 S1100 460 900 570 S700 680 900 790" />
      </g>
      <g stroke="#ffffff" stroke-width="2" opacity=".7"><path d="M775 5h80M715 82h200M688 162h254M705 244h210M770 326h92M710 407h212M688 488h256M716 570h200M778 651h76" /></g>
      <g fill="#14b8a6"><circle cx="730" cy="-30" r="9"/><circle cx="900" cy="-30" r="9"/><circle cx="730" cy="270" r="9"/><circle cx="900" cy="270" r="9"/><circle cx="730" cy="570" r="9"/><circle cx="900" cy="570" r="9"/></g>
    </svg>
    <div class="container relative"><p class="mb-5 text-sm font-black uppercase tracking-[.22em] text-teal">Full-stack developer × scientist</p><h1 class="max-w-5xl font-heading text-5xl font-black uppercase leading-[.95] tracking-tight md:text-8xl"><span v-for="(ch, i) in nameChars" :key="i" class="inline-block" :style="{ animation: `fadeUp 600ms ${i * 40}ms cubic-bezier(.2,.7,.2,1) both` }">{{ ch === ' ' ? '\u00A0' : ch }}</span></h1><p class="mt-8 text-2xl font-bold text-white md:text-3xl">Code that respects <Transition name="word" mode="out-in"><span :key="word" class="text-teal">{{ word }}</span></Transition>.</p><p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">Full-stack developer with a BSc in Biodiversity &amp; Conservation Biology. I build systems the way nature builds ecosystems: with rigor, adaptation, and respect for interdependence.</p><div class="mt-9 flex flex-wrap gap-3"><BaseButton href="#projects" class="!rounded-none !bg-teal !px-7 !py-3 !font-black !uppercase !tracking-wide hover:!bg-white hover:!text-ink">See what I’ve built</BaseButton><BaseButton href="#about" variant="ghost" class="!rounded-none !border-white !text-white !font-black !uppercase !tracking-wide hover:!bg-white hover:!text-ink">Read my story</BaseButton></div></div>
  </section>
</template>
<script setup>import { onMounted, onUnmounted, ref } from 'vue'; import BaseButton from '@/components/ui/BaseButton.vue'; const nameChars = 'Ihtishaam Johnson'.split(''); const words = ['complexity', 'interdependence', 'evidence']; const word = ref(words[0]); let timer; onMounted(() => { let i = 0; timer = setInterval(() => { i = (i + 1) % words.length; word.value = words[i] }, 3800) }); onUnmounted(() => clearInterval(timer))</script>
<style scoped>.word-enter-active,.word-leave-active { transition: opacity 700ms ease; }.word-enter-from,.word-leave-to { opacity: 0; } @media (prefers-reduced-motion: reduce) { .word-enter-active,.word-leave-active { transition: none; } }</style>
