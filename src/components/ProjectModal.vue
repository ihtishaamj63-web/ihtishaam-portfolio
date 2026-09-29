<template>
  <div class="overlay" @click="emit('close')">
    <div class="panel" role="dialog" aria-modal="true" :aria-label="project.name" @click.stop>
      <div class="panel-head">
        <p class="kicker">{{ project.year }} · {{ project.role }}</p>
        <button class="close" aria-label="Close project details" @click="emit('close')">
          ✕ close
        </button>
      </div>

      <h2>{{ project.name }}</h2>

      <section class="block">
        <h3>Overview</h3>
        <p>{{ project.overview }}</p>
      </section>

      <section class="block">
        <h3>My role</h3>
        <p>{{ project.roleDetail }}</p>
      </section>

      <section class="block">
        <h3>Stack</h3>
        <ul class="badges">
          <li v-for="item in project.tech" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="block">
        <h3>Highlights</h3>
        <ul class="list">
          <li v-for="item in project.achievements" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="block">
        <h3>Screenshots</h3>
        <div class="shots">
          <figure v-for="device in devices" :key="device.label">
            <div class="shot" :class="'shot-' + device.label">
              <img
                v-if="project[device.key]"
                :src="project[device.key]"
                :alt="project.name + ' running on ' + device.label"
              />
              <span v-else>{{ device.label }} view</span>
            </div>
            <figcaption>{{ device.label }}</figcaption>
          </figure>
        </div>
      </section>

      <section class="block">
        <h3>Links</h3>
        <div class="links">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener">Source</a>
          <a v-if="project.live" :href="project.live" target="_blank" rel="noopener">Live demo</a>
        </div>
        <p v-if="project.note" class="deploy-note">{{ project.note }}</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  project: { type: Object, required: true },
})

const emit = defineEmits(['close'])

const devices = [
  { key: 'desktopShot', label: 'desktop' },
  { key: 'mobileShot', label: 'mobile' },
]

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(28, 27, 23, 0.55);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 4vh 16px;
  overflow-y: auto;
  z-index: 2000;
  animation: fade 0.2s ease;
}

.panel {
  background: var(--paper);
  border: 1px solid var(--line);
  width: min(820px, 100%);
  padding: 40px 48px 48px;
  margin-bottom: 4vh;
  animation: rise 0.25s ease;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 6px;
}

.kicker {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--green);
}

.close {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-soft);
  letter-spacing: 0.06em;
  padding: 6px 10px;
  border: 1px solid transparent;
  transition:
    color 0.15s ease,
    border-color 0.15s ease;
}

.close:hover {
  color: var(--ink);
  border-color: var(--line);
}

h2 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(30px, 4vw, 40px);
  line-height: 1.1;
  margin: 10px 0 36px;
}

.block {
  margin-bottom: 34px;
}

.block h3 {
  font-family: var(--mono);
  font-size: 11.5px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
  margin-bottom: 12px;
}

.block p {
  font-size: 15.5px;
  line-height: 1.7;
  color: var(--ink-soft);
  max-width: 66ch;
}

.badges {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.badges li {
  font-family: var(--mono);
  font-size: 12px;
  padding: 6px 10px;
  border: 1px solid var(--line);
  transition: border-color 0.15s ease;
}

.badges li:hover {
  border-color: var(--green);
}

.list {
  list-style: none;
}

.list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 15px;
  color: var(--ink-soft);
  max-width: 66ch;
}

.list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  background: var(--green);
}

.shots {
  display: flex;
  gap: 18px;
  align-items: flex-end;
  flex-wrap: wrap;
}

figure {
  margin: 0;
}

.shot {
  border: 1px solid var(--line);
  background: var(--paper-deep);
  display: grid;
  place-items: center;
  overflow: hidden;
}

.shot img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.shot span {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  text-align: center;
  padding: 10px;
}

.shot-desktop {
  width: min(420px, 100%);
  aspect-ratio: 2.5;
}
.shot-mobile {
  width: 140px;
  aspect-ratio: 0.5;
}

figcaption {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-soft);
  letter-spacing: 0.06em;
  margin-top: 8px;
}

.links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.links a {
  font-family: var(--mono);
  font-size: 13px;
  text-decoration: none;
  border: 1px solid var(--ink);
  padding: 11px 18px;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.links a:hover {
  background: var(--ink);
  color: var(--paper);
}

.deploy-note {
  margin-top: 14px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-soft);
  border: 1px solid var(--line);
  padding: 10px 14px;
}

@media (max-width: 720px) {
  .panel {
    padding: 26px 20px 34px;
  }
}
</style>
