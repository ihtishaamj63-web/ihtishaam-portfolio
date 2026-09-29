<template>
  <header class="nav">
    <div class="wrap nav-inner">
      <a
        class="brand"
        href="#top"
        @mouseenter="showHint('Back to top')"
        @mouseleave="hideHint()"
        @focus="showHint('Back to top')"
        @blur="hideHint()"
        >ihtishaam.dev</a
      >
      <nav class="nav-links" aria-label="Sections">
        <a
          href="#work"
          @mouseenter="showHint('View selected work')"
          @mouseleave="hideHint()"
          @focus="showHint('View selected work')"
          @blur="hideHint()"
          >Work</a
        >
        <a
          href="#about"
          @mouseenter="showHint('Read about me')"
          @mouseleave="hideHint()"
          @focus="showHint('Read about me')"
          @blur="hideHint()"
          >About</a
        >
        <a
          href="#skills"
          @mouseenter="showHint('View skills')"
          @mouseleave="hideHint()"
          @focus="showHint('View skills')"
          @blur="hideHint()"
          >Skills</a
        >
        <a
          href="#contact"
          @mouseenter="showHint('Get in touch')"
          @mouseleave="hideHint()"
          @focus="showHint('Get in touch')"
          @blur="hideHint()"
          >Contact</a
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useCursorHint } from '../composables/useCursorHint'

const { showHint, hideHint } = useCursorHint()
</script>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--nav-h);
  background: rgba(245, 243, 236, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
  z-index: 1000;
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: var(--mono);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.brand::before {
  content: '';
  display: inline-block;
  width: 9px;
  height: 9px;
  background: var(--green);
  margin-right: 10px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-family: var(--mono);
  font-size: 13px;
  text-decoration: none;
  color: var(--ink-soft);
  letter-spacing: 0.04em;
  transition: color 0.15s ease;
}

.nav-links a:hover {
  color: var(--green);
}

@media (max-width: 520px) {
  .nav .wrap {
    padding-left: 20px;
    padding-right: 20px;
  }
  .nav-links {
    gap: 16px;
  }
  .nav-links a {
    font-size: 12px;
  }
}
</style>
