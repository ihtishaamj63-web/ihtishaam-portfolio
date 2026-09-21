<template>
  <main id="main-content" class="pt-10 pb-20">
    <div class="container">
      <SectionHeading
        eyebrow="Projects"
        title="Everything I've built."
        subtitle="Full-stack applications — filter by technology."
      />

      <div class="flex flex-wrap gap-2 mb-8">
        <button
          @click="filter = 'all'"
          class="px-3 py-1.5 rounded-full text-xs font-medium border transition-colors"
          :class="filter === 'all' ? 'bg-teal text-white border-teal' : 'border-ink/15 dark:border-mist/20 text-slate dark:text-mist/70 hover:border-teal hover:text-teal'"
        >All</button>
        <button
          v-for="t in allTech"
          :key="t"
          @click="filter = t"
          class="px-3 py-1.5 rounded-full text-xs font-medium border transition-colors"
          :class="filter === t ? 'bg-teal text-white border-teal' : 'border-ink/15 dark:border-mist/20 text-slate dark:text-mist/70 hover:border-teal hover:text-teal'"
        >{{ t }}</button>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="p in filtered"
          :key="p.slug"
          class="group relative rounded-2xl border border-ink/10 dark:border-mist/10 bg-surface dark:bg-surface-dark p-6 hover:border-teal/40 hover:shadow-lg transition-all"
        >
          <h3 class="font-heading font-bold text-xl mb-2">{{ p.title }}</h3>
          <p class="text-sm text-slate dark:text-mist/70 mb-4">{{ p.tagline }}</p>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <TechPill v-for="t in p.tech" :key="t" :label="t" />
          </div>
          <div class="flex flex-wrap gap-2">
            <BaseButton :to="`/projects/${p.slug}`" size="sm">View details</BaseButton>
            <BaseButton v-if="p.github" :href="p.github" size="sm" variant="ghost">GitHub</BaseButton>
          </div>
        </article>
      </div>
      <p v-if="!filtered.length" class="text-center text-slate dark:text-mist/60 py-10">
        No projects match that filter.
      </p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechPill from '@/components/ui/TechPill.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { projects } from '@/data/projects'

const filter = ref('all')
const allTech = computed(() => {
  const set = new Set()
  projects.forEach((p) => p.tech.forEach((t) => set.add(t)))
  return [...set].sort()
})
const filtered = computed(() =>
  filter.value === 'all' ? projects : projects.filter((p) => p.tech.includes(filter.value))
)
</script>
