<template>
  <section
    id="projects"
    class="relative overflow-hidden bg-gradient-to-b from-deep-blue to-ocean-blue py-28 text-white"
  >
    <div class="container">
      <SectionHeading
        eyebrow="Projects"
        title="Projects that matter."
        subtitle="Systems built for people, communities, and the living complexity between them."
      />
      <div class="grid md:grid-cols-2 gap-6">
        <article
          v-for="(p, i) in projects"
          :key="p.slug"
          class="group relative overflow-hidden rounded-2xl border-2 border-cyan-glow/30 bg-ocean-blue/50 p-6 text-white shadow-none transition-all duration-500 hover:-translate-y-3 hover:border-cyan-glow hover:shadow-[0_0_30px_rgba(0,217,255,.35)] reveal"
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div
            class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-glow/10 to-transparent transition-transform duration-700 group-hover:translate-x-full pointer-events-none"
          />
          <div
            class="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan-glow transition-all duration-300 group-hover:h-3 group-hover:w-3 group-hover:bg-teal-bright group-hover:shadow-[0_0_0_5px_rgba(0,217,255,.15)]"
          />
          <div class="relative">
            <ProjectVisual :kind="p.slug" />
            <p class="text-sm font-semibold uppercase tracking-[.1em] text-teal mb-2">
              {{ p.role }}
            </p>
            <h3 class="font-heading font-black text-2xl mb-2">{{ p.title }}</h3>
            <p class="text-base text-white/80 mb-5">{{ p.tagline }}</p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <TechPill v-for="t in p.tech.slice(0, 5)" :key="t" :label="t" />
              <span v-if="p.tech.length > 5" class="text-sm text-white/70 self-center">
                +{{ p.tech.length - 5 }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <BaseButton
                v-if="p.github"
                :href="p.github"
                size="sm"
                variant="ghost"
                class="hover:-translate-y-0.5"
                >GitHub</BaseButton
              >
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
