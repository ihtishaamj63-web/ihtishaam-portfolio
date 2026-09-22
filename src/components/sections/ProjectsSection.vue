<template>
  <section id="projects" class="py-24 bg-white">
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
          class="group relative overflow-hidden rounded-none border-2 border-ink bg-ink p-6 text-white shadow-[8px_8px_0_#14b8a6] transition-all duration-300 hover:-translate-y-3 hover:translate-x-1 hover:border-teal hover:shadow-[14px_14px_0_#0f0f0f] reveal"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-teal/10 to-transparent pointer-events-none" />
          <div class="relative">
            <ProjectVisual :kind="p.slug" />
            <p class="text-sm font-semibold uppercase tracking-[.1em] text-teal mb-2">{{ p.role }}</p>
            <h3 class="font-heading font-black text-2xl mb-2">{{ p.title }}</h3>
            <p class="text-base text-white/80 mb-5">{{ p.tagline }}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <TechPill v-for="t in p.tech.slice(0, 5)" :key="t" :label="t" />
              <span v-if="p.tech.length > 5" class="text-sm text-white/70 self-center">
                +{{ p.tech.length - 5 }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <BaseButton v-if="p.github" :href="p.github" size="sm" variant="ghost" class="hover:-translate-y-0.5">GitHub</BaseButton>
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
