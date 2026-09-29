<template>
  <section id="about" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>About</h2>
      </div>
      <p class="intro">
        I build software with care for both the experience people see and the systems behind it. I
        value clear communication, thoughtful problem-solving, and work that holds up beyond the
        happy path. I write clearly, present confidently, and ask the questions that help a team
        make better decisions.
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

      <div class="offclock">
        <h3 class="offclock-title">Off the clock</h3>
        <p class="offclock-text">
          Away from the keyboard I am a committed cinephile, avid reader of books and comics, and
          One Piece taught me more about long projects than any course could. Manchester United and
          the Springboks have my weekends, and I'm always down for a game of football.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experience } from '../data/experience'
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
