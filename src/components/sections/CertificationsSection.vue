<template>
  <section id="training" class="bg-dark-navy py-28 text-white">
    <div class="container">
      <SectionHeading
        eyebrow="Training record"
        title="Verified learning, in the field."
        subtitle="Cisco Networking Academy training connected to the systems I build."
      />
      <p class="-mt-7 mb-6 text-sm text-white/60">
        Browse the record <span aria-hidden="true">→</span>
      </p>
      <div class="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 pr-6">
        <a
          v-for="c in certifications"
          :key="c.name"
          :href="c.file"
          target="_blank"
          rel="noopener noreferrer"
          class="min-w-[19rem] max-w-[19rem] snap-start rounded-xl border border-cyan-glow/25 bg-ocean-blue/35 p-6 transition-all hover:-translate-y-2 hover:border-cyan-glow hover:shadow-[0_0_24px_rgba(0,217,255,.25)]"
          ><div class="mb-4 flex items-start justify-between">
            <svg
              class="h-9 w-9 text-cyan-glow"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 2 15 8l6 .8-4.4 4.3 1 6.1-5.6-3-5.6 3 1-6.1L3 8.8 9 8l3-6Z" /></svg
            ><span class="text-xs font-semibold uppercase tracking-wider text-teal-bright"
              >Verified</span
            >
          </div>
          <h3 class="font-heading text-lg font-semibold text-white">{{ c.name }}</h3>
          <p class="mt-2 text-sm text-white/60">{{ c.issuer }} · {{ c.date }}</p>
          <p class="mt-4 text-sm leading-relaxed text-white/70">
            <span class="font-semibold text-cyan-glow">Applied in:</span> {{ c.applied }}
          </p></a
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { certifications } from '@/data/certifications'
</script>
