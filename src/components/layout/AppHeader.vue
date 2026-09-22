<template>
  <header
    class="sticky top-0 z-50 border-b border-ocean-blue/10 bg-paper/90 text-deep-blue backdrop-blur-md"
  >
    <div class="container flex items-center justify-between h-16">
      <RouterLink to="/" class="font-heading text-xl font-bold tracking-tight">
        Ihtishaam Johnson<span class="text-teal-bright">.</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="relative px-3 py-2 text-sm font-bold uppercase tracking-wide text-deep-blue/65 transition-colors hover:bg-seafoam hover:text-ocean-blue"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        @click="menuOpen = !menuOpen"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        class="rounded-md p-2 text-ocean-blue transition-colors hover:bg-seafoam md:hidden"
        aria-label="Toggle menu"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path v-if="!menuOpen" d="M3 6h18M3 12h18M3 18h18" />
          <path v-else d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>
    </div>

    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="mobile-navigation"
        class="relative z-50 border-t border-ocean-blue/10 bg-paper md:hidden"
      >
        <nav class="container py-4 flex flex-col gap-1">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="px-3 py-3 text-sm font-bold uppercase tracking-wide text-deep-blue/80 hover:bg-seafoam hover:text-ocean-blue"
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
  { href: '#contact', label: 'Contact' },
]

const menuOpen = ref(false)
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 200ms ease,
    max-height 300ms ease;
  overflow: hidden;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  max-height: 0;
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  max-height: 400px;
}
</style>
