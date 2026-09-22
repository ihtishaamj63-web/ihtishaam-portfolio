<template>
  <section id="projects" class="py-24">
    <div class="container">
      <SectionHeading
        eyebrow="Projects"
        title="Case studies, not just code."
        subtitle="Two systems built around real people, operational complexity, and outcomes."
      />
      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="(p, i) in projects"
          :key="p.slug"
          class="group relative rounded-2xl border border-ink/10 dark:border-mist/10 bg-surface dark:bg-surface-dark p-6 hover:-translate-y-3 hover:border-teal/40 hover:bg-teal/[.03] hover:shadow-2xl hover:shadow-teal/10 transition-all duration-300 overflow-hidden reveal"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-teal/10 to-transparent pointer-events-none" />
          <div class="relative">
            <ProjectVisual :kind="p.slug" />
            <p class="text-sm font-semibold uppercase tracking-[.1em] text-teal mb-2">{{ p.role }}</p>
            <h3 class="font-heading font-bold text-xl mb-2">{{ p.title }}</h3>
            <p class="text-sm text-slate dark:text-mist/70 mb-4">{{ p.tagline }}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <TechPill v-for="t in p.tech.slice(0, 5)" :key="t" :label="t" />
              <span v-if="p.tech.length > 5" class="text-sm text-slate dark:text-mist/70 self-center">
                +{{ p.tech.length - 5 }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <BaseButton v-if="p.github" :href="p.github" size="sm" variant="ghost">GitHub</BaseButton>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechPill from '@/components/ui/TechPill.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import ProjectVisual from '@/components/ui/ProjectVisual.vue'
import { projects } from '@/data/projects'
</script>
