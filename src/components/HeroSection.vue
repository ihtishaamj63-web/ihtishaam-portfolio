<template>
  <section id="top" class="hero">
    <div class="wrap hero-layout">
      <div class="hero-copy">
        <p class="kicker">Ihtishaam Johnson · software developer · Scientist · Cape Town, ZA</p>
        <h1>I build software the way evolution builds species.</h1>
        <p class="lede">
          Full-stack developer with a BSc in biodiversity and conservation biology. Evolution is the
          longest-running engineering project on record, and its method is simple: iterate, test
          against reality, keep what survives.
        </p>
        <p class="status">
          <span class="status-sq" aria-hidden="true"></span>
          Software Development Intern at LC Studio. Open to software, data, security, and
          conservation-tech roles.
        </p>
      </div>
      <div class="hero-portrait">
        <img
          src="/images/ihtishaam_johnson_portfolio_image-removebg-preview.png"
          alt="Ihtishaam Johnson"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  padding: calc(var(--nav-h) + 48px) 0 104px;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(220px, 0.8fr);
  align-items: start;
  gap: 40px;
}

.hero-copy {
  min-width: 0;
}

.hero-portrait {
  display: flex;
  justify-content: center;
  align-self: start;
}

.hero-portrait img {
  width: min(100%, 210px);
  max-height: 290px;
  object-fit: contain;
  object-position: center top;
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

@media (max-width: 720px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

}
</style>
