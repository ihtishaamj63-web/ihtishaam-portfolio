<template>
  <section id="skills" class="section">
    <div class="wrap">
      <div class="section-head">
        <span class="index">03</span>
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
  padding: 26px 0;
  border-top: 1px solid var(--line);
}

.group h3 {
  font-family: var(--mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--green);
  margin-bottom: 10px;
}

.items {
  font-size: 15.5px;
  color: var(--ink-soft);
  max-width: 72ch;
  line-height: 1.9;
}

@media (max-width: 720px) {
  .group {
    padding: 20px 0;
  }
}
</style>
