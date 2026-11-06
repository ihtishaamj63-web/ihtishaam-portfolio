<template>
  <section id="work" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>Selected work</h2>
        <div class="nav-controls" aria-label="Project navigation">
          <button
            class="nav-button"
            type="button"
            aria-label="Previous project"
            :disabled="activeIndex === 0"
            @click="prev"
          >
            <span aria-hidden="true">←</span>
          </button>
          <span class="nav-count" aria-live="polite">
            {{ String(activeIndex + 1).padStart(2, '0') }} /
            {{ String(projects.length).padStart(2, '0') }}
          </span>
          <button
            class="nav-button"
            type="button"
            aria-label="Next project"
            :disabled="activeIndex === projects.length - 1"
            @click="next"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div
        ref="showcase"
        class="showcase"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
        @pointerenter="onPointerEnter"
        @pointerleave="onPointerLeave"
        @focusin="pauseForInteraction"
      >
        <Transition name="fade" mode="out-in">
          <article
            :key="activeProject.id"
            class="featured"
            aria-roledescription="slide"
            :aria-label="`${activeIndex + 1} of ${projects.length}: ${activeProject.name}`"
          >
            <div class="featured-media">
              <div v-if="hasMobile" class="media-toolbar">
                <div class="view-toggle" role="group" aria-label="Screenshot view">
                  <button
                    type="button"
                    class="view-option"
                    :class="{ 'is-active': view === 'desktop' }"
                    :aria-pressed="view === 'desktop'"
                    aria-label="Show desktop screenshot"
                    @click="setView('desktop')"
                    @mouseenter="showHint('Show desktop view (press M)')"
                    @mouseleave="hideHint()"
                    @focus="showHint('Show desktop view (press M)')"
                    @blur="hideHint()"
                  >
                    Desktop
                  </button>
                  <button
                    type="button"
                    class="view-option"
                    :class="{ 'is-active': view === 'mobile' }"
                    :aria-pressed="view === 'mobile'"
                    aria-label="Show mobile screenshot"
                    @click="setView('mobile')"
                    @mouseenter="showHint('Show mobile view (press M)')"
                    @mouseleave="hideHint()"
                    @focus="showHint('Show mobile view (press M)')"
                    @blur="hideHint()"
                  >
                    Mobile
                  </button>
                </div>
              </div>
              <div class="media-viewport">
                <Transition name="img-fade" mode="out-in">
                  <div
                    :key="view"
                    :class="
                      view === 'mobile' && hasMobile
                        ? 'mobile-preview-stage'
                        : 'desktop-preview-stage'
                    "
                  >
                    <template v-if="view === 'mobile' && hasMobile">
                      <div class="phone-frame">
                        <span class="phone-button phone-button-left" aria-hidden="true"></span>
                        <span class="phone-button phone-button-right" aria-hidden="true"></span>
                        <div class="phone-island" aria-hidden="true"><span></span></div>
                        <div
                          class="phone-screen"
                          :style="phoneScreenStyle"
                        >
                          <img
                            class="phone-screen-image"
                            :src="currentShot"
                            :alt="activeProject.name + ' mobile interface'"
                            :width="currentWidth"
                            :height="currentHeight"
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                          />
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div class="monitor">
                        <div class="monitor-camera" aria-hidden="true"></div>
                        <div
                          class="monitor-screen"
                          :style="{
                            aspectRatio: currentWidth + '/' + currentHeight,
                          }"
                        >
                          <img
                            class="monitor-screen-image"
                            :src="currentShot"
                            :alt="activeProject.name + ' desktop interface'"
                            :width="currentWidth"
                            :height="currentHeight"
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                          />
                        </div>
                        <div class="monitor-chin">
                          <div class="monitor-indicator" aria-hidden="true"></div>
                          <span class="monitor-power" aria-hidden="true"></span>
                        </div>
                      </div>
                      <div class="monitor-stand" aria-hidden="true">
                        <div class="monitor-stand-neck"></div>
                        <div class="monitor-stand-base"></div>
                      </div>
                    </template>
                  </div>
                </Transition>
              </div>
            </div>

            <div class="featured-info">
              <p class="kicker">
                {{ String(activeIndex + 1).padStart(2, '0') }} /
                {{ String(projects.length).padStart(2, '0') }} · {{ activeProject.role }}
              </p>
              <h3>{{ activeProject.name }}</h3>
              <p class="summary">{{ activeProject.summary }}</p>
              <ul class="tech" aria-label="Technologies">
                <li v-for="item in activeProject.tech" :key="item">{{ item }}</li>
              </ul>
              <div class="actions">
                <a
                  v-if="activeProject.github"
                  :href="activeProject.github"
                  target="_blank"
                  rel="noopener"
                >
                  Source <span aria-hidden="true">↗</span>
                </a>
                <a
                  v-if="activeProject.live"
                  :href="activeProject.live"
                  target="_blank"
                  rel="noopener"
                >
                  Live demo <span aria-hidden="true">↗</span>
                </a>
                <button type="button" @click="emit('open-project', activeProject)">
                  Details <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        </Transition>
      </div>

      <div class="progress" aria-hidden="true">
        <span :style="{ width: progressWidth }"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { projects } from '../data/projects'
import { useCursorHint } from '../composables/useCursorHint'

const emit = defineEmits(['open-project'])

const { showHint, hideHint } = useCursorHint()

const activeIndex = ref(0)
const showcase = ref(null)
const view = ref('desktop')
let touchStartX = null

const activeProject = computed(() => projects[activeIndex.value])

const hasMobile = computed(() => Boolean(activeProject.value.mobileShot))

const currentShot = computed(() =>
  view.value === 'mobile' && hasMobile.value
    ? activeProject.value.mobileShot
    : activeProject.value.desktopShot,
)

const currentWidth = computed(() =>
  view.value === 'mobile' && hasMobile.value
    ? activeProject.value.mobileShotWidth
    : activeProject.value.desktopShotWidth,
)

const currentHeight = computed(() =>
  view.value === 'mobile' && hasMobile.value
    ? activeProject.value.mobileShotHeight
    : activeProject.value.desktopShotHeight,
)

const phoneScreenStyle = computed(() => {
  if (!hasMobile.value) return {}
  const imgAspect = currentWidth.value / currentHeight.value
  const frameAspect = 280 / 570
  if (imgAspect >= frameAspect) {
    return {
      width: '100%',
      height: 'auto',
      aspectRatio: currentWidth.value + '/' + currentHeight.value,
    }
  }
  return {
    width: 'auto',
    height: '100%',
    aspectRatio: currentWidth.value + '/' + currentHeight.value,
  }
})

const progressWidth = computed(
  () => `${((activeIndex.value + 1) / projects.length) * 100}%`,
)

watch(activeIndex, (idx) => {
  view.value = 'desktop'
  const currentProject = projects[idx]
  if (currentProject?.mobileShot) {
    const img = new Image()
    img.src = currentProject.mobileShot
  }
  const nextProject = projects[(idx + 1) % projects.length]
  if (nextProject?.desktopShot) {
    const img = new Image()
    img.src = nextProject.desktopShot
  }
  if (nextProject?.mobileShot) {
    const img = new Image()
    img.src = nextProject.mobileShot
  }
}, { immediate: true })

function setView(next) {
  if (next === 'mobile' && !hasMobile.value) return
  view.value = next
  pauseForInteraction()
}

// --- Automatic progression state ---
const AUTO_DELAY = 6000
const VIEW_DELAY = AUTO_DELAY / 2
const RESUME_DELAY = 8000
const isHovering = ref(false)
const interactionPaused = ref(false)
const visibilityPaused = ref(false)
let autoTimer = null
let resumeTimer = null
let wheelAccum = 0
let wheelLock = false
let wheelResetTimer = null

const autoAllowed = computed(
  () =>
    !isHovering.value &&
    !interactionPaused.value &&
    !visibilityPaused.value,
)

function clearAuto() {
  if (autoTimer) {
    clearTimeout(autoTimer)
    autoTimer = null
  }
}

function scheduleAuto() {
  clearAuto()
  if (!autoAllowed.value) return

  const delay = hasMobile.value ? VIEW_DELAY : AUTO_DELAY
  autoTimer = setTimeout(() => {
    if (!autoAllowed.value) return

    if (hasMobile.value && view.value === 'desktop') {
      view.value = 'mobile'
      scheduleAuto()
      return
    }

    activeIndex.value = (activeIndex.value + 1) % projects.length
    scheduleAuto()
  }, delay)
}

function pauseForInteraction() {
  interactionPaused.value = true
  clearAuto()
  if (resumeTimer) clearTimeout(resumeTimer)
  resumeTimer = setTimeout(() => {
    interactionPaused.value = false
  }, RESUME_DELAY)
}

watch(autoAllowed, (allowed) => {
  if (allowed) scheduleAuto()
  else clearAuto()
})

function next() {
  if (activeIndex.value < projects.length - 1) activeIndex.value += 1
  pauseForInteraction()
}

function prev() {
  if (activeIndex.value > 0) activeIndex.value -= 1
  pauseForInteraction()
}

function onPointerEnter(event) {
  // Touchscreens can emit synthetic mouse events after a tap.
  // Only a real mouse hover should pause the automatic showcase.
  if (event.pointerType === 'mouse') onHover(true)
}

function onPointerLeave(event) {
  if (event.pointerType === 'mouse') onHover(false)
}

function onHover(state) {
  isHovering.value = state
  if (state) {
    clearAuto()
    if (resumeTimer) clearTimeout(resumeTimer)
  }
}

// --- Touch ---
function onTouchStart(event) {
  touchStartX = event.changedTouches[0].clientX
}

function onTouchEnd(event) {
  if (touchStartX === null) return
  const delta = event.changedTouches[0].clientX - touchStartX
  if (Math.abs(delta) > 50) {
    if (delta < 0) next()
    else prev()
  }
  touchStartX = null
}

// --- Wheel / trackpad ---
function onWheel(event) {
  const dx = event.deltaX
  if (Math.abs(dx) < 4) return
  if (wheelLock) {
    event.preventDefault()
    return
  }
  // Only handle horizontal gestures; let vertical scrolling pass through.
  event.preventDefault()
  wheelAccum += dx
  const threshold = 40
  if (Math.abs(wheelAccum) >= threshold) {
    wheelLock = true
    if (wheelAccum > 0) next()
    else prev()
    wheelAccum = 0
    if (wheelResetTimer) clearTimeout(wheelResetTimer)
    wheelResetTimer = null
    setTimeout(() => {
      wheelLock = false
      wheelAccum = 0
    }, 800)
  }
  if (wheelResetTimer) clearTimeout(wheelResetTimer)
  wheelResetTimer = setTimeout(() => {
    wheelAccum = 0
  }, 200)
}

// --- Keyboard (arrow keys) ---
function onKeydown(e) {
  const tag = e.target?.tagName?.toLowerCase()
  if (tag === 'input' || tag === 'textarea' || tag === 'select' || e.target?.isContentEditable) return
  if (e.ctrlKey || e.altKey || e.metaKey) return
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key.toLowerCase() !== 'm') return
  if (!showcase.value) return
  const rect = showcase.value.getBoundingClientRect()
  if (rect.top >= window.innerHeight || rect.bottom <= 0) return
  if (e.key.toLowerCase() === 'm') {
    if (!hasMobile.value) return
    e.preventDefault()
    setView(view.value === 'mobile' ? 'desktop' : 'mobile')
    return
  }
  e.preventDefault()
  if (e.key === 'ArrowLeft') prev()
  else next()
}
// --- Visibility ---
function onVisibilityChange() {
  if (document.hidden) {
    visibilityPaused.value = true
    clearAuto()
  } else {
    visibilityPaused.value = false
    setTimeout(() => {
      if (autoAllowed.value) scheduleAuto()
    }, RESUME_DELAY)
  }
}

onMounted(() => {
  if (showcase.value) {
    showcase.value.addEventListener('wheel', onWheel, { passive: false })
  }
  document.addEventListener('visibilitychange', onVisibilityChange)
  window.addEventListener('keydown', onKeydown)

  scheduleAuto()
})

onUnmounted(() => {
  clearAuto()
  if (resumeTimer) clearTimeout(resumeTimer)
  if (wheelResetTimer) clearTimeout(wheelResetTimer)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  window.removeEventListener('keydown', onKeydown)
  if (showcase.value) {
    showcase.value.removeEventListener('wheel', onWheel)
  }
})
</script>

<style scoped>
.section {
  padding-top: 28px;
  padding-bottom: 16px;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.nav-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--mono);
  font-size: 12px;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid var(--line);
  color: var(--ink-soft);
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}

.nav-button:hover:not(:disabled) {
  border-color: var(--green);
  color: var(--green);
}

.nav-button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.nav-count {
  color: var(--ink-soft);
  letter-spacing: 0.08em;
  min-width: 48px;
  text-align: center;
}

.showcase {
  min-width: 0;
  /* Light mode: cool brushed aluminium with a soft silver edge. */
  --device-frame: #c6ccd0;
  --device-edge: #858f96;
  --device-highlight: #f0f2f2;
  --device-accent: #7d8a91;
}

.site.dark-mode .showcase {
  /* Dark mode: deep graphite with a restrained green undertone. */
  --device-frame: #252d27;
  --device-edge: #101612;
  --device-highlight: #59695b;
  --device-accent: #a6c98d;
}

.featured {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(220px, 0.9fr);
  gap: clamp(16px, 2.5vw, 32px);
  align-items: center;
}

.featured-media {
  min-width: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  background: var(--paper-deep);
  overflow: hidden;
}

.media-toolbar {
  flex: none;
  display: flex;
  justify-content: flex-end;
  padding: 6px 8px 0;
}

.view-toggle {
  display: inline-flex;
  border: 1px solid var(--line);
  background: var(--paper);
}

.view-option {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: lowercase;
  padding: 4px 10px;
  color: var(--ink-soft);
  border-right: 1px solid var(--line);
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.view-option:last-child {
  border-right: none;
}

.view-option:hover {
  color: var(--green);
}

.view-option.is-active {
  background: var(--green);
  color: var(--paper);
}

.view-option:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: -2px;
}

.media-viewport {
  height: 590px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Desktop monitor frame */
.desktop-preview-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px 12px 8px;
  overflow: hidden;
}

.monitor {
  position: relative;
  width: 100%;
  max-width: 850px;
  padding: 13px 10px 7px;
  border: 1px solid var(--device-edge);
  border-radius: 15px;
  background:
    linear-gradient(145deg, rgba(255,255,255,.22), transparent 24%),
    linear-gradient(110deg, var(--device-highlight) 0%, var(--device-frame) 18%, var(--device-edge) 50%, var(--device-frame) 82%, var(--device-highlight) 100%);
  box-shadow:
    0 22px 42px rgba(0, 0, 0, 0.2),
    0 4px 0 rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
}

.monitor-camera {
  position: absolute;
  top: 5px;
  left: 50%;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #111713;
  box-shadow: 0 0 0 1px rgba(255,255,255,.12);
  transform: translateX(-50%);
}

.monitor-screen {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 5px;
  background: #fff;
}

.monitor-screen-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
}

.monitor-chin {
  position: relative;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.monitor-indicator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--device-highlight);
}

.monitor-power {
  position: absolute;
  right: 3px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 7px var(--green);
}

.monitor-stand {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
}

.monitor-stand-neck {
  width: 54px;
  height: 20px;
  background: linear-gradient(to right, var(--device-edge), var(--device-highlight), var(--device-edge));
}

.monitor-stand-base {
  position: relative;
  width: 132px;
  height: 9px;
  border-radius: 3px 3px 8px 8px;
  background: linear-gradient(180deg, var(--device-highlight), var(--device-edge));
  box-shadow: 0 5px 10px rgba(0,0,0,.14);
}

.monitor-stand-base span {
  position: absolute;
  top: 2px;
  left: 12%;
  right: 12%;
  height: 1px;
  background: rgba(255,255,255,.18);
}

/* Mobile phone frame */
.mobile-preview-stage {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow: hidden;
}

.phone-frame {
  position: relative;
  flex-shrink: 0;
  width: clamp(220px, 24vw, 280px);
  aspect-ratio: 280 / 570;
  padding: 7px;
  border: 1px solid var(--device-edge);
  border-radius: 42px;
  background:
    linear-gradient(135deg, rgba(255,255,255,.2), transparent 25%),
    linear-gradient(110deg, var(--device-highlight) 0%, var(--device-frame) 18%, var(--device-edge) 50%, var(--device-frame) 82%, var(--device-highlight) 100%);
  box-shadow:
    0 24px 48px rgba(0, 0, 0, 0.22),
    0 0 0 2px rgba(255,255,255,.07),
    inset 0 1px 1px rgba(255,255,255,.28);
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-island {
  position: absolute;
  z-index: 2;
  top: 13px;
  left: 50%;
  width: 29%;
  height: 13px;
  border-radius: 20px;
  background: #080b09;
  transform: translateX(-50%);
  box-shadow: inset 0 1px 1px rgba(255,255,255,.12);
}

.phone-island span {
  position: absolute;
  right: 9px;
  top: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #263b46;
}

.phone-button {
  position: absolute;
  width: 3px;
  border-radius: 3px;
  background: var(--device-highlight);
  box-shadow: 1px 0 1px rgba(0,0,0,.3);
}

.phone-button-left {
  left: -3px;
  top: 104px;
  height: 48px;
}

.phone-button-right {
  right: -3px;
  top: 125px;
  height: 62px;
}

.phone-frame::before,
.phone-frame::after {
  content: "";
  position: absolute;
  width: 3px;
  border-radius: 4px;
  background: var(--device-edge);
}

.phone-frame::before {
  left: -3px;
  top: 110px;
  height: 62px;
}

.phone-frame::after {
  right: -3px;
  top: 135px;
  height: 48px;
}

.phone-screen {
  position: relative;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  border-radius: 35px;
  background: #080b09;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.12);
}

.phone-screen-image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  object-fit: contain;
  object-position: center;
}

.img-fade-enter-active,
.img-fade-leave-active {
  transition: opacity 0.09s ease;
}

.img-fade-enter-from,
.img-fade-leave-to {
  opacity: 0;
}

.featured-info {
  min-width: 0;
}

.kicker {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 8px;
}

h3 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(30px, 3.5vw, 40px);
  line-height: 1.1;
  margin-bottom: 10px;
}

.summary {
  font-size: 16px;
  color: var(--ink);
  max-width: 52ch;
  margin-bottom: 10px;
  line-height: 1.6;
}

.tech {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.tech li {
  font-family: var(--mono);
  font-size: 11px;
  padding: 4px 8px;
  border: 1px solid var(--line);
  color: var(--ink-soft);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
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

.progress {
  height: 2px;
  background: var(--line);
  margin-top: 12px;
  overflow: hidden;
}

.progress span {
  display: block;
  height: 100%;
  background: var(--green);
  transition: width 0.25s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 768px) {
  .featured {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .media-viewport {
    height: 520px;
  }

  .monitor {
    padding: 10px 6px 5px;
    border-radius: 11px;
  }

  .monitor-screen {
    border-radius: 4px;
  }

  .monitor-stand-neck {
    height: 14px;
    width: 44px;
  }

  .monitor-stand-base {
    width: 90px;
  }

  .desktop-preview-stage {
    padding: 12px 8px 4px;
  }

  .mobile-preview-stage {
    padding: 12px;
  }

  .phone-frame {
    width: clamp(200px, 60vw, 240px);
    border-radius: 36px;
  }

  .phone-island {
    top: 11px;
    height: 11px;
  }

  .phone-screen {
    border-radius: 30px;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}

@media (max-width: 400px) {
  .wrap {
    padding-left: 16px;
    padding-right: 16px;
  }

  .media-viewport {
    height: 460px;
  }

  .mobile-preview-stage {
    padding: 8px;
  }

  .phone-frame {
    width: min(220px, 72vw);
  }
}
@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active,
  .img-fade-enter-active,
  .img-fade-leave-active {
    transition: none;
  }
}
</style>
