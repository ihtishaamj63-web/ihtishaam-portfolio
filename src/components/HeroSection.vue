<template>
  <section id="top" class="hero">
    <div class="wrap">
      <p class="kicker">Ihtishaam Johnson · software developer · Cape Town, ZA</p>
      <h1>I build software the way evolution builds species.</h1>
      <p class="lede">
        Full-stack developer with a BSc in biodiversity and conservation biology. Evolution is the
        longest-running engineering project on record, and its method is simple: iterate, test
        against reality, keep what survives. That is roughly how I write software, which is why I
        care about data models and the edge cases nobody wants to test. Backend is home base, I ship
        the whole stack, and I am increasingly drawn to data and security work.
      </p>
      <ul class="hero-links">
        <li><a :href="links.github" target="_blank" rel="noopener">GitHub</a></li>
        <li><a :href="links.linkedin" target="_blank" rel="noopener">LinkedIn</a></li>
        <li>
          <a :href="links.email">{{ links.displayEmail }}</a>
        </li>
      </ul>
      <p class="status">
        <span class="status-sq" aria-hidden="true"></span>
        At Life Choices Academy on contract. Open to software, data, security, and conservation-tech
        roles.
      </p>
    </div>
  </section>
</template>

<script setup>
import { links } from '../data/links'
</script>

<style scoped>
.hero {
  padding: calc(var(--nav-h) + 90px) 0 104px;
}

.kicker {
  font-family: var(--mono);
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-soft);
  margin-bottom: 36px;
}

h1 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(42px, 6.5vw, 76px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 16ch;
  margin-bottom: 34px;
}

.lede {
  font-size: 17.5px;
  color: var(--ink-soft);
  max-width: 58ch;
  margin-bottom: 40px;
}

.hero-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}

.hero-links a {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  text-decoration: none;
  border-bottom: 1px solid var(--line);
  padding-bottom: 3px;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
}

.hero-links a:hover {
  color: var(--green);
  border-color: var(--green);
}

.status {
  margin-top: 64px;
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--ink-soft);
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-sq {
  width: 9px;
  height: 9px;
  background: var(--green);
  flex: none;
}
</style>
