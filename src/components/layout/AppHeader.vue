<template>
  <header class="sticky top-0 z-50 backdrop-blur-md bg-surface/80 dark:bg-ink/80 border-b border-ink/10 dark:border-mist/10">
    <div class="container flex items-center justify-between h-16">
      <RouterLink to="/" class="font-heading font-bold text-xl tracking-tight">
        Ihtishaam Johnson<span class="text-teal">.</span>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="relative px-3 py-2 text-sm font-medium text-slate dark:text-mist/80 hover:text-teal transition-colors"
        >
          {{ link.label }}
        </a>
        <button
          @click="toggleTheme"
          class="ml-2 p-2 rounded-md hover:bg-ink/5 dark:hover:bg-mist/10 transition-colors"
          aria-label="Toggle theme"
        >
          <svg v-if="dark" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
          <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
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
      <div v-if="menuOpen" class="md:hidden border-t border-ink/10 dark:border-mist/10 bg-surface dark:bg-ink">
        <nav class="container py-4 flex flex-col gap-1">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="px-3 py-3 text-sm font-medium rounded-md hover:bg-ink/5 dark:hover:bg-mist/10"
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
import { useTheme } from '@/composables/useTheme'

const links = [
  { href: '#about', label: 'Story' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' }
]

const menuOpen = ref(false)
const { dark, toggle: toggleTheme } = useTheme()
</script>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: opacity 200ms ease, max-height 300ms ease; overflow: hidden; }
.menu-enter-from, .menu-leave-to { opacity: 0; max-height: 0; }
.menu-enter-to, .menu-leave-from { opacity: 1; max-height: 400px; }
</style>
