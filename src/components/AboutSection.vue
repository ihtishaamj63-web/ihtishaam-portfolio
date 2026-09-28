<template>
  <section id="about" class="section">
    <div class="wrap">
      <div class="section-head">
        <span class="index">02</span>
        <h2>About</h2>
      </div>
      <p class="section-note">
        One timeline. Education counts as experience, so it lives here too.
      </p>

      <p class="intro">
        I came to software through conservation biology, which means I arrived already suspicious of
        tidy explanations. Fieldwork teaches you the map is not the territory. Backend work teaches
        you the same lesson about the schema. I like problems where being systematic matters more
        than being loud, and I would rather understand your system than decorate it.
      </p>

      <div class="timeline">
        <article v-for="entry in experience" :key="entry.title" class="entry">
          <p class="period">{{ entry.period }}</p>
          <div class="body">
            <h3>{{ entry.title }}</h3>
            <p class="org">{{ entry.org }}</p>
            <ul class="points">
              <li v-for="point in entry.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>

      <div class="skills">
        <h3 class="skills-heading">Skills</h3>

        <div v-for="group in skillGroups" :key="group.title" class="group">
          <h4>{{ group.title }}</h4>
          <p v-if="group.intro" class="group-intro">{{ group.intro }}</p>
          <p class="group-items">{{ group.items.join(' · ') }}</p>
        </div>

        <p class="learning">
          Currently learning: {{ currentlyLearning.join(' and ') }}. Ask me again in a few months.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data/experience'
import { skillGroups, currentlyLearning } from '../data/skills'
</script>

<style scoped>
.intro {
  font-family: var(--serif);
  font-size: 21px;
  line-height: 1.55;
  max-width: 62ch;
  margin-bottom: 64px;
}

.timeline {
  border-top: 1px solid var(--line);
  margin-bottom: 88px;
}

.entry {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 6px 36px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}

.period {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--ink-soft);
  padding-top: 5px;
}

h3 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.25;
}

.org {
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--green);
  letter-spacing: 0.03em;
  margin: 4px 0 12px;
}

.points {
  list-style: none;
}

.points li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: var(--ink-soft);
  font-size: 15px;
  max-width: 68ch;
}

.points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  background: var(--green);
}

.skills-heading {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 28px;
}

.group {
  padding: 22px 0;
  border-top: 1px solid var(--line);
}

.group h4 {
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
}

.group-intro {
  font-family: var(--serif);
  font-style: italic;
  font-size: 16px;
  color: var(--ink-soft);
  margin-bottom: 8px;
}

.group-items {
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.9;
  color: var(--ink-soft);
}

.learning {
  margin-top: 28px;
  font-family: var(--mono);
  font-size: 13px;
  border: 1px solid var(--line);
  padding: 14px 18px;
  display: inline-block;
}

@media (max-width: 720px) {
  .entry {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .intro {
    font-size: 18px;
  }
}
</style>
