<template>
  <div class="site" :class="{ 'dark-mode': isDarkMode }">
    <a class="skip-link" href="#main">skip to content</a>
    <NavBar :is-dark-mode="isDarkMode" @toggle-theme="toggleTheme" />

    <main id="main">
      <HeroSection />
      <WorkSection @open-project="selectedProject = $event" />
      <AboutSection @view-certificate="showCertificate = true" />
      <SkillsSection />
      <ContactSection />
    </main>

    <footer class="footer">
      <div class="wrap footer-inner">
        <span>© {{ year }} Ihtishaam Johnson · Cape Town, South Africa</span>
      </div>
    </footer>

    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="selectedProject = null"
    />

    <CertificateModal v-if="showCertificate" @close="showCertificate = false" />

    <CursorHint />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import WorkSection from './components/WorkSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ProjectModal from './components/ProjectModal.vue'
import CertificateModal from './components/CertificateModal.vue'
import CursorHint from './components/CursorHint.vue'

const selectedProject = ref(null)
const showCertificate = ref(false)
const isDarkMode = ref(window.localStorage.getItem('portfolio-theme') === 'dark')
const year = new Date().getFullYear()
let revealObserver

onMounted(() => {
  const revealTargets = document.querySelectorAll(
    'main > .hero, main > .section, .project-card, .group, .entry, .offclock',
  )

  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ) {
    revealTargets.forEach((element) => element.classList.add('is-visible'))
    return
  }

  document.querySelector('main').classList.add('motion-ready')
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
  )

  revealTargets.forEach((element) => {
    const siblingIndex = Array.prototype.indexOf.call(element.parentElement.children, element)
    element.style.setProperty('--reveal-delay', `${Math.min(siblingIndex, 4) * 65}ms`)
    revealObserver.observe(element)
  })
})

onUnmounted(() => {
  revealObserver?.disconnect()
})

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  window.localStorage.setItem('portfolio-theme', isDarkMode.value ? 'dark' : 'light')
}
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: 28px 0 40px;
}

.footer-inner {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-soft);
  letter-spacing: 0.04em;
}
</style>
