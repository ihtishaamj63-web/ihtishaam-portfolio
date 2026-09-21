<template>
  <section class="py-20">
    <div class="container">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built."
        subtitle="Full-stack applications with real users, real data, and real problems to solve."
      />
      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="(p, i) in projects"
          :key="p.slug"
          class="group relative rounded-2xl border border-ink/10 dark:border-mist/10 bg-surface dark:bg-surface-dark p-6 hover:border-teal/40 hover:shadow-lg transition-all duration-300 overflow-hidden reveal"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-teal/10 to-transparent pointer-events-none" />
          <div class="relative">
            <h3 class="font-heading font-bold text-xl mb-2">{{ p.title }}</h3>
            <p class="text-sm text-slate dark:text-mist/70 mb-4">{{ p.tagline }}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <TechPill v-for="t in p.tech.slice(0, 5)" :key="t" :label="t" />
              <span v-if="p.tech.length > 5" class="text-xs text-slate dark:text-mist/50 self-center">
                +{{ p.tech.length - 5 }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <BaseButton :to="`/projects/${p.slug}`" size="sm">Details</BaseButton>
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
import { projects } from '@/data/projects'
</script>
