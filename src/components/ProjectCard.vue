<template>
  <article
    class="card"
    :class="{ 'has-thumb': !!project.thumbnail }"
    role="button"
    tabindex="0"
    :aria-label="'Open ' + project.name + ' details'"
    @click="$emit('open')"
    @keydown.enter.prevent="$emit('open')"
    @keydown.space.prevent="$emit('open')"
    @mouseenter="showHint('view project')"
    @mouseleave="hideHint()"
    @focus="showHint('view project')"
    @blur="hideHint()"
  >
    <div class="meta">
      <span class="num">{{ String(index + 1).padStart(2, '0') }}</span>
      <span class="year">{{ project.year }}</span>
    </div>

    <div class="body">
      <h3>{{ project.name }}</h3>
      <p class="role">{{ project.role }}</p>
      <p class="summary">{{ project.summary }}</p>
      <p class="tech">{{ techPreview }}</p>
    </div>

    <div v-if="project.thumbnail" class="thumb">
      <img :src="project.thumbnail" :alt="project.name" />
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

defineEmits(['open'])

const { showHint, hideHint } = useCursorHint()

const techPreview = computed(() => {
  const t = props.project.tech
  const head = t.slice(0, 4).join(' · ')
  return t.length > 4 ? head + ' · +' + (t.length - 4) + ' more' : head
})
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  padding: 34px 0;
  border-top: 1px solid var(--line);
  cursor: pointer;
  transition: background 0.18s ease;
}

.card:last-child {
  border-bottom: 1px solid var(--line);
}

.card:hover,
.card:focus-visible {
  background: var(--paper-deep);
}

.meta {
  display: flex;
  flex-direction: row;
  gap: 14px;
  padding-top: 0;
  font-family: var(--mono);
  font-size: 12.5px;
}

.num {
  color: var(--green);
}

.year {
  color: var(--ink-soft);
}

h3 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(24px, 3vw, 32px);
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.card:hover h3 {
  text-decoration: underline;
  text-decoration-color: var(--green);
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}

.role {
  font-family: var(--mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-soft);
  margin: 8px 0 14px;
}

.summary {
  font-size: 15.5px;
  color: var(--ink-soft);
  max-width: 62ch;
  margin-bottom: 14px;
}

.tech {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-soft);
  letter-spacing: 0.02em;
}

.has-thumb {
  grid-template-columns: 1fr 240px;
}

.thumb {
  border: 1px solid var(--line);
  overflow: hidden;
  align-self: start;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .thumb img {
  transform: scale(1.03);
}

@media (max-width: 720px) {
  .card,
  .has-thumb {
    grid-template-columns: 1fr;
    padding: 28px 0;
  }

  .thumb {
    order: -1;
    height: 170px;
  }
}
</style>
