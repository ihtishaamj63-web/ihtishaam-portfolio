<template>
  <section id="skills" class="py-24 bg-ink/[0.02] dark:bg-mist/[0.02]"><div class="container"><SectionHeading eyebrow="Skills" title="A focused toolkit." subtitle="The practical craft of software, strengthened by scientific method." />
    <div class="flex flex-wrap gap-2 mb-8"><button v-for="f in filters" :key="f.value" @click="active = f.value" class="px-4 py-2 rounded-full text-sm font-medium border transition-colors" :class="active === f.value ? 'bg-teal text-white border-teal' : 'border-ink/15 dark:border-mist/20 text-slate dark:text-mist/70 hover:border-teal hover:text-teal'">{{ f.label }}</button></div>
    <div class="grid md:grid-cols-2 gap-5"><div v-for="group in visibleGroups" :key="group.category" class="relative overflow-hidden rounded-2xl border border-ink/10 dark:border-mist/10 bg-surface dark:bg-surface-dark p-6"><div class="absolute right-5 top-5 h-12 w-12 rounded-full border border-teal/15"/><div class="flex items-center justify-between mb-5"><h3 class="font-heading font-semibold">{{ group.category }}</h3><span v-if="group.type === 'data'" class="text-xs uppercase tracking-wider text-amber">Field methods</span></div><ul class="space-y-4"><li v-for="s in group.items" :key="s.name"><span class="text-base font-medium text-ink dark:text-mist">{{ s.name }}</span><p v-if="s.note" class="mt-1 text-sm leading-relaxed text-slate dark:text-mist/70">{{ s.note }}</p></li></ul></div></div>
  </div></section>
</template>
<script setup>
import { ref, computed } from 'vue'; import SectionHeading from '@/components/ui/SectionHeading.vue'; import { skills } from '@/data/skills'
const filters = [{ value: 'all', label: 'All' }, { value: 'practical', label: 'Practical' }, { value: 'data', label: 'Scientific' }, { value: 'infrastructure', label: 'Infrastructure' }]; const active = ref('all'); const visibleGroups = computed(() => active.value === 'all' ? skills : skills.filter((g) => g.type === active.value))
</script>
