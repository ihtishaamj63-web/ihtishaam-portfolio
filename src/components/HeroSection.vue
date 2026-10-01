<template>
  <section id="top" class="hero">
    <div class="wrap">
      <p class="kicker">Ihtishaam Johnson · software developer · Scientist · Cape Town, ZA</p>
      <h1>I build software the way evolution builds species.</h1>
      <p class="lede">
        Full-stack developer with a BSc in biodiversity and conservation biology. Evolution is the
        longest-running engineering project on record, and its method is simple: iterate, test
        against reality, keep what survives.
      </p>
      <p class="status">
        <span class="status-sq" aria-hidden="true"></span>
        Employed at Life Choices Academy. Open to software, data, security, and conservation-tech
        roles.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  padding: calc(var(--nav-h) + 90px) 0 104px;
}

.kicker {
  font-family: var(--mono);
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-soft);
  margin-bottom: 36px;
}

h1 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(42px, 6.5vw, 76px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 16ch;
  margin-bottom: 34px;
}

.lede {
  font-size: 17.5px;
  color: var(--ink-soft);
  max-width: 58ch;
  margin-bottom: 40px;
}

.status {
  margin-top: 64px;
  font-family: var(--mono);
  font-size: 12.5px;
  color: var(--ink-soft);
  display: flex;
  align-items: center;
  gap: 12px;
}

.status-sq {
  width: 9px;
  height: 9px;
  background: var(--green);
  flex: none;
}
</style>
