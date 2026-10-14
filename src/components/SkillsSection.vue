<template>
  <section id="skills" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>Skills</h2>
      </div>
      <div class="groups">
        <div v-for="group in skillGroups" :key="group.title" class="group">
          <h3>{{ group.title }}</h3>
          <p class="items">{{ group.items.join(' · ') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from '../data/skills'
</script>

<style scoped>
.groups {
  border-bottom: 1px solid var(--line);
}

.group {
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(0, 3fr);
  gap: 28px;
  align-items: start;
  padding: 26px 0;
  border-top: 1px solid var(--line);
}

.group h3 {
  font-family: var(--mono);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--ink);
  text-transform: uppercase;
}

.items {
  font-size: 16px;
  color: var(--ink);
  line-height: 1.75;
}

@media (max-width: 720px) {
  .group {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 20px 0;
  }
}
</style>
