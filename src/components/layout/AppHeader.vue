<template>
  <header class="sticky top-0 z-50 border-b-2 border-ink bg-white">
    <div class="container flex items-center justify-between h-16">
      <RouterLink to="/" class="font-heading font-bold text-xl tracking-tight">
        Ihtishaam Johnson<span class="text-teal">.</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="relative px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink hover:bg-ink hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        @click="menuOpen = !menuOpen"
        class="md:hidden p-2 rounded-md hover:bg-ink/5 dark:hover:bg-mist/10"
        aria-label="Toggle menu"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!menuOpen" d="M3 6h18M3 12h18M3 18h18"/>
          <path v-else d="M6 6l12 12M6 18L18 6"/>
        </svg>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="menuOpen" class="md:hidden border-t-2 border-ink bg-white">
        <nav class="container py-4 flex flex-col gap-1">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="px-3 py-3 text-sm font-bold uppercase tracking-wide hover:bg-ink hover:text-white"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const links = [
  { href: '#about', label: 'Story' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

const menuOpen = ref(false)
</script>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: opacity 200ms ease, max-height 300ms ease; overflow: hidden; }
.menu-enter-from, .menu-leave-to { opacity: 0; max-height: 0; }
.menu-enter-to, .menu-leave-from { opacity: 1; max-height: 400px; }
</style>
