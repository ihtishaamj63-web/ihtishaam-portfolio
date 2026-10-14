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
        <article v-for="entry in experience" :key="entry.title" class="entry">
          <p class="period">{{ entry.period }}</p>
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
  border-top: 1px solid var(--line);
  margin-bottom: 72px;
}

.entry {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  padding: 30px 0;
  border-bottom: 1px solid var(--line);
}

.period {
  font-size: 14px;
  color: var(--ink);
  padding-top: 5px;
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
</style>
