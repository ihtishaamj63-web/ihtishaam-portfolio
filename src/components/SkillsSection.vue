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
  padding: 26px 0;
  border-top: 1px solid var(--line);
}

.group h3 {
  font-size: 18px;
  color: var(--ink);
  margin-bottom: 8px;
}

.items {
  font-size: 16px;
  color: var(--ink);
  max-width: 72ch;
  line-height: 1.75;
}

@media (max-width: 720px) {
  .group {
    padding: 20px 0;
  }
}
</style>
