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
        tidy explanations. Fieldwork teaches you that the map is not the territory. Backend work
        teaches you the same lesson about the schema. I write clearly, I present well, and I am
        comfortable being the one who asks the question everyone was quietly hoping somebody would
        ask.
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
          Away from the keyboard I am a committed cinephile (Alien and Raimi's Spider-Man can share
          a double bill), I read comics properly, Spider-Man, Batman and the Hulk, and One Piece
          taught me more about long projects than any course could. Manchester United and the
          Springboks have my weekends, soccer has my knees, and a good argument about evolution,
          philosophy, or whether the villain had a point gets me every time.
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
  font-family: var(--serif);
  font-size: 21px;
  line-height: 1.55;
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

.offclock {
  border-top: 1px solid var(--line);
  padding-top: 30px;
}

.offclock-title {
  font-family: var(--mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--green);
  margin-bottom: 14px;
}

.offclock-text {
  font-family: var(--serif);
  font-style: italic;
  font-size: 18px;
  line-height: 1.7;
  color: var(--ink-soft);
  max-width: 66ch;
}

@media (max-width: 720px) {
  .intro {
    font-size: 18px;
  }
  .offclock-text {
    font-size: 16.5px;
  }
}
</style>
