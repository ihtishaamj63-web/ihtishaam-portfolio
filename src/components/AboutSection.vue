<template>
  <section id="about" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>About</h2>
      </div>
      <p class="intro">
        I'm a full-stack developer with a BSc in Biodiversity and Conservation Biology, working
        across Vue, Node.js, and SQL. I enjoy the analytical puzzles of backend development and
        the psychology and design thinking behind intuitive frontend experiences. My scientific
        background shaped a thoughtful, methodical approach to solving complex problems and
        understanding how systems connect. I bring that perspective to building useful software
        and working with others.
      </p>

      <div class="timeline">
        <article
          v-for="entry in experience"
          :key="entry.title"
          class="entry"
          :class="{ current: entry.current, 'has-certificates': entry.certificates?.length }"
        >
          <span class="node" aria-hidden="true"></span>
          <p class="period">
            {{ entry.period }}
            <span v-if="entry.current" class="current-label">Current</span>
          </p>
          <div class="body">
            <h3>{{ entry.title }}</h3>
            <p class="org">{{ entry.org }}</p>
            <div v-if="entry.certificates?.length" class="certificate-links">
              <button
                v-for="certificate in entry.certificates"
                :key="certificate.src"
                class="certificate-link"
                type="button"
                @click="emit('view-certificate', certificate)"
                @mouseenter="showHint(certificate.label)"
                @mouseleave="hideHint()"
                @focus="showHint(certificate.label)"
                @blur="hideHint()"
              >
                {{ certificate.label }} <span aria-hidden="true">↗</span>
              </button>
            </div>
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

.entry.has-certificates .body {
  border-left: 2px solid var(--green);
  padding: 4px 0 4px 18px;
}

.entry.has-certificates h3 {
  font-size: 24px;
  font-weight: 600;
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

.certificate-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 14px;
}

.certificate-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--green);
  background: var(--paper);
  color: var(--green);
  font-family: var(--mono);
  font-size: 12px;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.certificate-link:hover {
  color: var(--paper);
  background: var(--green);
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
  font-size: 18px;
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

  .entry.has-certificates .body {
    padding-left: 14px;
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
