<template>
  <div class="site">
    <a class="skip-link" href="#main">skip to content</a>
    <NavBar />

    <main id="main">
      <HeroSection />
      <WorkSection @open-project="selectedProject = $event" />
      <AboutSection />
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

    <CursorHint />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import WorkSection from './components/WorkSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ProjectModal from './components/ProjectModal.vue'
import CursorHint from './components/CursorHint.vue'

const selectedProject = ref(null)
const year = new Date().getFullYear()
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
