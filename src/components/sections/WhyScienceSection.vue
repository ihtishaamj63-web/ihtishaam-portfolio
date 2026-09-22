<template>
  <section class="bg-ocean-blue py-28 text-white">
    <div class="container">
      <SectionHeading
        eyebrow="Why science + code"
        title="The same habits, applied to a new medium."
        subtitle="Ecology, genetics, and conservation taught me to work across scales — from a single observation to a living system."
      />
      <div class="grid gap-5 md:grid-cols-3">
        <article
          v-for="item in items"
          :key="item.title"
          class="group relative overflow-hidden rounded-xl border border-teal-bright/35 bg-deep-blue/45 p-6 shadow-none transition-all duration-500 hover:-translate-y-2 hover:border-teal-bright hover:bg-deep-blue/75 hover:shadow-[0_0_24px_rgba(29,209,161,.28)]"
        >
          <span
            class="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-glow/60 text-cyan-glow transition-all group-hover:rotate-12 group-hover:bg-cyan-glow/10"
            >{{ item.index }}</span
          >
          <h3 class="font-heading text-lg text-white">{{ item.title }}</h3>
          <p class="mt-3 text-base leading-relaxed text-white/70">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
const items = [
  {
    index: '01',
    title: 'Rigor without shortcuts',
    text: 'Field research taught me to validate every assumption. That shows up in strict input validation, error handling, and testing.',
  },
  {
    index: '02',
    title: 'Systems, not silos',
    text: 'Ecology is interconnection. I design APIs and architecture with the same care for what each part changes downstream.',
  },
  {
    index: '03',
    title: 'Clarity is a feature',
    text: 'Scientific writing demands precision. I document decisions so the next person can understand, maintain, and extend the work.',
  },
]
</script>
