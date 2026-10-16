<template>
  <section id="about" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>About</h2>
      </div>
      <p class="intro">
        I'm a full-stack developer with a BSc in Biodiversity and Conservation Biology. I work
        across Vue, Node.js, and SQL, and I'm most at home building the backend: APIs, data models,
        authentication, and workflows. My degree taught me to work carefully with messy data, test
        what the evidence supports, and follow how changes affect a wider system. I bring that same
        care to software, along with clear communication and experience working in a team.
      </p>

      <div class="timeline">
        <article
          v-for="entry in experience"
          :key="entry.title"
          class="entry"
          :class="{ current: entry.current }"
        >
          <span class="node" aria-hidden="true"></span>
          <p class="period">
            {{ entry.period }}
            <span v-if="entry.current" class="current-label">Current</span>
          </p>
          <div class="body">
            <h3>{{ entry.title }}</h3>
            <p class="org">{{ entry.org }}</p>
            <button
              v-if="entry.certificate"
              class="certificate-link"
              type="button"
              @click="emit('view-certificate')"
              @mouseenter="showHint('View stamped degree certificate')"
              @mouseleave="hideHint()"
              @focus="showHint('View stamped degree certificate')"
              @blur="hideHint()"
            >
              View stamped certificate <span aria-hidden="true">↗</span>
            </button>
            <ul class="points">
              <li v-for="point in entry.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>

      <div class="offclock">
        <h3 class="offclock-title">Off the clock</h3>
        <p class="offclock-text">
          Away from the keyboard I am a committed cinephile, avid reader of books and comics, and
          One Piece taught me more about long projects than any course could. Supporting Manchester
          United and the Springboks is how I spend weekends, and I'm always down for a game of
          football.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data/experience'
import { useCursorHint } from '../composables/useCursorHint'

const emit = defineEmits(['view-certificate'])
const { showHint, hideHint } = useCursorHint()
</script>

<style scoped>
.intro {
  font-size: 18px;
  max-width: 62ch;
  margin-bottom: 64px;
}

.timeline {
  --period-width: 150px;
  --timeline-gap: 36px;
  position: relative;
  border-top: 1px solid var(--line);
  margin-bottom: 72px;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(var(--period-width) + var(--timeline-gap) / 2);
  width: 1px;
  background: var(--line);
}

.entry {
  position: relative;
  display: grid;
  grid-template-columns: var(--period-width) minmax(0, 1fr);
  gap: var(--timeline-gap);
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}

.node {
  position: absolute;
  top: 35px;
  left: calc(var(--period-width) + var(--timeline-gap) / 2 - 7px);
  width: 14px;
  height: 14px;
  border: 2px solid var(--green);
  background: var(--paper);
}

.entry.current .node {
  background: var(--green);
}

.entry.current .node::after {
  content: '';
  position: absolute;
  inset: -6px;
  border: 1px solid var(--green);
  animation: beacon 1.8s ease-out infinite;
}

@keyframes beacon {
  0% {
    opacity: 0.75;
    transform: scale(0.65);
  }
  100% {
    opacity: 0;
    transform: scale(1.7);
  }
}

.period {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: var(--ink);
  padding-top: 5px;
}

.current-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
}

h3 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: 22px;
  line-height: 1.25;
}

.org {
  font-size: 15px;
  color: var(--ink);
  margin: 4px 0 12px;
}

.certificate-link {
  display: inline-block;
  margin: 0 0 12px;
  color: var(--green);
  font-family: var(--mono);
  font-size: 12px;
  text-decoration: underline;
  text-decoration-color: var(--green);
  text-underline-offset: 4px;
}

.certificate-link:hover {
  color: var(--ink);
}

.points {
  list-style: none;
}

.points li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  color: var(--ink);
  font-size: 16px;
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

.offclock {
  border-top: 1px solid var(--line);
  padding-top: 30px;
}

.offclock-title {
  margin-bottom: 14px;
}

.offclock-text {
  max-width: 66ch;
}

@media (max-width: 720px) {
  .timeline {
    padding-left: 28px;
  }

  .timeline::before {
    left: 6px;
  }

  .entry {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 24px 0;
  }

  .node {
    top: 29px;
    left: -28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .entry.current .node::after {
    animation: none;
  }
}
</style>
