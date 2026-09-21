<template>
  <section class="py-20 bg-ink/[0.02] dark:bg-mist/[0.02]">
    <div class="container">
      <SectionHeading
        eyebrow="Certifications"
        title="Verified training."
        subtitle="Cisco Networking Academy certifications earned through Life Choices Academy."
      />
      <div class="grid md:grid-cols-3 gap-5">
        <a
          v-for="c in certifications"
          :key="c.name"
          :href="c.file"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-2xl border border-ink/10 dark:border-mist/10 bg-surface dark:bg-surface-dark p-6 hover:border-teal/40 hover:shadow-md transition-all"
        >
          <div class="flex items-start justify-between mb-3">
            <svg class="w-8 h-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            <span class="text-[10px] uppercase tracking-wider text-teal font-semibold">Verified</span>
          </div>
          <h3 class="font-heading font-semibold mb-1">{{ c.name }}</h3>
          <p class="text-xs text-slate dark:text-mist/60">{{ c.issuer }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { certifications } from '@/data/certifications'
</script>
