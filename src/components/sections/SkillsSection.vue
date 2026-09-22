<template>
  <section id="skills" class="bg-gradient-to-b from-deep-blue to-[#0d5270] py-28 text-white">
    <div class="container">
      <SectionHeading
        eyebrow="Capabilities"
        title="A focused toolkit."
        subtitle="Languages, systems, and scientific habits for building in deep water."
      />
      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="(group, index) in skills"
          :key="group.category"
          class="group relative overflow-hidden rounded-xl border-2 border-cyan-glow/30 bg-ocean-blue/30 p-7 shadow-none transition-all duration-500 hover:-translate-y-2 hover:bg-ocean-blue/55 hover:border-cyan-glow hover:shadow-[0_0_25px_rgba(0,217,255,.28)]"
        >
          <span
            class="absolute right-5 top-5 h-3 w-3 rounded-full bg-cyan-glow shadow-[0_0_14px_rgba(0,217,255,.8)] transition-colors group-hover:bg-teal-bright"
          />
          <h3
            class="relative font-heading text-xl font-semibold uppercase tracking-wider text-cyan-glow group-hover:text-teal-bright"
          >
            {{ group.category }}
          </h3>
          <ul class="relative mt-5 grid gap-4">
            <li
              v-for="s in group.items"
              :key="s.name"
              class="border-l-2 border-cyan-glow/25 pl-4 transition-colors group-hover:border-teal-bright"
            >
              <span class="text-base font-semibold text-white/90">{{ s.name }}</span>
              <p v-if="s.note" class="mt-1 text-sm leading-relaxed text-white/65">{{ s.note }}</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { skills } from '@/data/skills'
</script>
