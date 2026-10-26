<template>
  <article
    class="project-card"
    @click="onCardClick"
    @mouseenter="showHint('View project details')"
    @mouseleave="hideHint"
  >
    <div class="project-info">
      <div class="project-heading">
        <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
        <div>
          <h3>{{ project.name }}</h3>
          <p class="role">{{ project.year }} <span aria-hidden="true">·</span> {{ project.role }}</p>
        </div>
      </div>

      <p class="summary">{{ project.summary }}</p>
      <p class="tech">{{ techPreview }}</p>

      <div class="actions">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener"
          @mouseenter="showHint('Open source code')"
          @click.stop
          @mouseleave="showHint('View project details')"
          @focus="showHint('Open source code')"
          @blur="hideHint()"
        >
          Source <span aria-hidden="true">↗</span>
        </a>
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          rel="noopener"
          @mouseenter="showHint('Open live demo')"
          @click.stop
          @mouseleave="showHint('View project details')"
          @focus="showHint('Open live demo')"
          @blur="hideHint()"
        >
          Live demo <span aria-hidden="true">↗</span>
        </a>
        <button
          type="button"
          @click.stop="openProject"
          @mouseenter="showHint('View project details')"
          @mouseleave="showHint('View project details')"
          @focus="showHint('View project details')"
          @blur="hideHint()"
        >
          Project details <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <div v-if="project.desktopShot || project.mobileShot" class="gallery">
      <button
        v-if="project.desktopShot"
        class="preview desktop-preview"
        type="button"
        :aria-label="'View ' + project.name + ' desktop screenshot and details'"
        @click.stop="openProject"
        @mouseenter="showHint('View project details')"
        @mouseleave="showHint('View project details')"
        @focus="showHint('View project details')"
        @blur="hideHint()"
      >
        <span class="preview-bar"><span class="window-dots" aria-hidden="true">•••</span> desktop</span>
        <img
          :src="project.desktopShot"
          :alt="project.name + ' desktop interface'"
          :width="project.desktopShotWidth"
          :height="project.desktopShotHeight"
          loading="lazy"
          decoding="async"
        />
      </button>
      <button
        v-if="project.mobileShot"
        class="preview mobile-preview"
        type="button"
        :aria-label="'View ' + project.name + ' mobile screenshot and details'"
        @click.stop="openProject"
        @mouseenter="showHint('View project details')"
        @mouseleave="showHint('View project details')"
        @focus="showHint('View project details')"
        @blur="hideHint()"
      >
        <span class="preview-bar"><span class="window-dots" aria-hidden="true">•••</span> mobile</span>
        <img
          :src="project.mobileShot"
          :alt="project.name + ' mobile interface'"
          :width="project.mobileShotWidth"
          :height="project.mobileShotHeight"
          loading="lazy"
          decoding="async"
        />
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useCursorHint } from '../composables/useCursorHint'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const emit = defineEmits(['open'])

const { showHint, hideHint } = useCursorHint()

const techPreview = computed(() => {
  const t = props.project.tech
  const head = t.slice(0, 6).join(' · ')
  return t.length > 6 ? head + ' · +' + (t.length - 6) + ' more' : head
})

function openProject() {
  hideHint()
  emit('open')
}

function onCardClick(event) {
  if (event.target.closest('a, button')) return
  openProject()
}
</script>

<style scoped>
.project-card {
  cursor: pointer;
  display: grid;
  gap: 34px;
  padding: clamp(24px, 4vw, 44px);
  background: var(--paper-deep);
  border-bottom: 1px solid var(--line);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.project-card:hover {
  border-color: var(--green);
  box-shadow: 5px 5px 0 var(--green);
  transform: translate(-2px, -2px);
}

.project-info {
  max-width: 760px;
}

.project-heading {
  display: flex;
  align-items: baseline;
  gap: 18px;
  margin-bottom: 14px;
}

.num {
  flex: none;
  color: var(--green);
  font-family: var(--serif);
  font-size: 38px;
  line-height: 1;
}

h3 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(30px, 4vw, 42px);
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.role {
  margin-top: 5px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-soft);
  text-transform: lowercase;
}

.summary {
  font-size: 16px;
  color: var(--ink);
  max-width: 68ch;
  margin-bottom: 10px;
}

.tech {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-soft);
  line-height: 1.8;
}

.actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px 22px;
  margin-top: 18px;
  font-family: var(--mono);
  font-size: 12px;
}

.actions a,
.actions button {
  color: var(--ink-soft);
  text-decoration: underline;
  text-decoration-color: var(--green);
  text-underline-offset: 4px;
  transition: color 0.15s ease;
}

.actions a:hover,
.actions button:hover {
  color: var(--green);
}

.gallery {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 190px;
  gap: 18px;
  align-items: end;
}

.preview {
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--ink);
  background: var(--paper);
  text-align: left;
}

.preview-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: none;
  height: 26px;
  padding: 0 10px;
  color: var(--green);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: lowercase;
}

.window-dots {
  color: var(--ink-soft);
  font-size: 10px;
  letter-spacing: 2px;
}

.preview img {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: top center;
  background: var(--paper);
  transition: transform 0.25s ease;
}

.mobile-preview img {
  flex: 1;
  min-height: 0;
  height: 100%;
}

.preview:hover img {
  transform: scale(1.015);
}

.mobile-preview {
  aspect-ratio: 0.52;
  max-height: 390px;
}

.preview:focus-visible,
.actions a:focus-visible,
.actions button:focus-visible {
  outline-color: var(--green);
  outline-offset: 4px;
}

@media (max-width: 720px) {
  .project-card {
    gap: 24px;
  }

  .gallery {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .mobile-preview {
    width: min(100%, 210px);
    justify-self: center;
    max-height: 340px;
  }
}
</style>
