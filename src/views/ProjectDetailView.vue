<template>
  <main id="main-content" class="pt-10 pb-20">
    <div v-if="!project" class="container py-20 text-center">
      <h1 class="font-heading text-2xl mb-4">Project not found</h1>
      <BaseButton to="/projects">Back to projects</BaseButton>
    </div>

    <div v-else class="container max-w-4xl">
      <RouterLink
        to="/projects"
        class="text-sm text-teal hover:underline inline-flex items-center gap-1 mb-6"
      >
        ← Back to projects
      </RouterLink>

      <h1 class="font-heading text-3xl md:text-4xl font-bold mb-3">{{ project.title }}</h1>
      <p class="text-lg text-slate dark:text-mist/70 mb-5">{{ project.tagline }}</p>

      <div class="flex flex-wrap items-center gap-4 mb-8">
        <StatusDot :status="health.status.value" :label="statusLabel" />
        <span class="text-xs text-slate dark:text-mist/50">Role: {{ project.role }}</span>
      </div>

      <div class="flex flex-wrap gap-2 mb-8">
        <BaseButton v-if="project.live" :href="project.live">Live demo</BaseButton>
        <BaseButton v-if="project.github" :href="project.github" variant="ghost">GitHub repo</BaseButton>
        <BaseButton v-if="project.api" :href="project.api" variant="ghost">API health</BaseButton>
      </div>

      <section class="mb-10 rounded-2xl border border-teal/20 bg-teal/[.04] p-6 dark:bg-teal/10">
        <p class="text-xs font-semibold uppercase tracking-[.16em] text-teal mb-3">Impact story</p>
        <h2 class="font-heading font-semibold text-xl mb-3">The problem, the system, the result.</h2>
        <p class="text-slate dark:text-mist/70">{{ project.description }}</p>
      </section>

      <section class="mb-10">
        <h2 class="font-heading font-semibold text-xl mb-3">Tech stack</h2>
        <div class="flex flex-wrap gap-2">
          <TechPill v-for="t in project.tech" :key="t" :label="t" />
        </div>
      </section>

      <section class="mb-10">
        <h2 class="font-heading font-semibold text-xl mb-3">Key features</h2>
        <ul class="space-y-2 text-slate dark:text-mist/70">
          <li v-for="f in project.features" :key="f" class="flex gap-2">
            <span class="text-teal shrink-0">→</span>{{ f }}
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="font-heading font-semibold text-xl mb-3">My contribution</h2>
        <ul class="space-y-2 text-slate dark:text-mist/70">
          <li v-for="h in project.highlights" :key="h" class="flex gap-2">
            <span class="text-teal shrink-0">•</span>{{ h }}
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="font-heading font-semibold text-xl mb-3">What I learned</h2>
        <ul class="space-y-2 text-slate dark:text-mist/70"><li class="flex gap-2"><span class="text-teal">→</span>Designing authentication and token-expiry logic around real user roles.</li><li class="flex gap-2"><span class="text-teal">→</span>Debugging cross-team architecture issues without losing momentum.</li><li class="flex gap-2"><span class="text-teal">→</span>Balancing stakeholder needs with maintainable technical constraints.</li></ul>
      </section>

    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import TechPill from '@/components/ui/TechPill.vue'
import StatusDot from '@/components/ui/StatusDot.vue'
import { useHealthCheck } from '@/composables/useHealthCheck'
import { projects } from '@/data/projects'

const route = useRoute()
const project = computed(() => projects.find((p) => p.slug === route.params.slug))
const health = useHealthCheck(project.value?.api || '')

const statusLabel = computed(() => {
  if (health.status.value === 'up') return 'Backend online'
  if (health.status.value === 'checking') return 'Checking backend…'
  return project.value?.status || 'Backend offline'
})
</script>
