<template>
  <section id="top" class="hero">
    <div class="wrap hero-layout">
      <div class="hero-portrait">
        <div class="portrait-frame">
          <img src="/images/Ihtishaam%20profile.png" alt="Ihtishaam Johnson" />
        </div>
      </div>
      <div class="hero-copy">
        <p class="kicker">Ihtishaam Johnson · software developer · Scientist · Cape Town, ZA</p>
        <p class="status">
          <span class="status-sq" aria-hidden="true"></span>
          <span class="status-copy">
            <strong>Software Development Intern at LC Studio.</strong>
            <span>Open to software, data, security, and conservation-tech roles.</span>
          </span>
        </p>
        <h1>I build software the way evolution builds species.</h1>
        <p class="lede">
          Full-stack developer with a BSc in biodiversity and conservation biology. Evolution is the
          longest-running engineering project on record, and its method is simple: iterate, test
          against reality, keep what survives.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.hero {
  padding: calc(var(--nav-h) + 24px) 0 80px;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(220px, 0.8fr);
  grid-template-areas: 'copy portrait';
  align-items: center;
  gap: 48px;
}

.hero-copy {
  grid-area: copy;
  min-width: 0;
}

.hero-portrait {
  grid-area: portrait;
  display: flex;
  justify-content: center;
  align-self: start;
}

.portrait-frame {
  width: min(100%, 360px);
  height: min(410px, 52vh);
  min-height: 300px;
  padding: 10px;
  border: 1px solid var(--green);
  background: var(--paper-deep);
  box-shadow: 10px 10px 0 var(--green);
}

.portrait-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 34%;
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
  margin: 0 0 30px;
  padding: 17px 20px;
  border-left: 3px solid var(--green);
  background: var(--paper-deep);
  display: flex;
  align-items: flex-start;
  gap: 14px;
  color: var(--ink-soft);
}

.status-sq {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  background: var(--green);
  flex: none;
}

.status-copy {
  display: grid;
  gap: 2px;
  font-size: 15px;
  line-height: 1.5;
}

.status-copy strong {
  color: var(--ink);
  font-weight: 600;
}

@media (max-width: 720px) {
  .hero {
    padding-top: calc(var(--nav-h) + 20px);
  }

  .hero-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      'portrait'
      'copy';
    gap: 36px;
  }

  .hero-portrait {
    justify-content: flex-start;
  }

  .portrait-frame {
    width: min(72vw, 320px);
    height: min(78vw, 340px);
    min-height: 260px;
  }

  .kicker {
    margin-bottom: 24px;
  }

  .status {
    margin-top: 28px;
    padding: 15px 16px;
  }

  .status-copy {
    font-size: 14px;
  }
}
</style>
