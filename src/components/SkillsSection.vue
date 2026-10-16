<template>
  <section id="skills" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>Skills</h2>
      </div>
      <div class="groups">
        <article v-for="(group, index) in skillGroups" :key="group.title" class="group">
          <header class="group-head">
            <span class="group-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ group.title }}</h3>
          </header>
          <ul class="items">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from '../data/skills'
</script>

<style scoped>
.groups {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.group {
  padding: 25px;
  border: 1px solid var(--line);
  border-top: 3px solid var(--green);
  background: var(--paper-deep);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.group:first-child {
  grid-column: 1 / -1;
}

.group:hover {
  border-color: var(--green);
  box-shadow: 5px 5px 0 var(--green);
  transform: translate(-2px, -2px);
}

.group-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
}

.group-index {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--green);
}

.items {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.items li {
  padding: 6px 10px;
  border: 1px solid var(--line);
  background: var(--paper);
  font-family: var(--mono);
  font-size: 12px;
  line-height: 1.5;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background-color 0.15s ease;
}

.items li:hover {
  border-color: var(--green);
  background: var(--green);
  color: var(--paper);
}

@media (max-width: 720px) {
  .groups {
    grid-template-columns: 1fr;
  }

  .group:first-child {
    grid-column: auto;
  }

  .group {
    padding: 20px;
  }
}
</style>
