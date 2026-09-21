<template>
  <section class="py-20 bg-ink/[0.02] dark:bg-mist/[0.02]">
    <div class="container">
      <SectionHeading
        eyebrow="Skills"
        title="What I work with."
        subtitle="Practical skills from real projects, theoretical strengths from science and Cisco training."
      />

      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="f in filters"
          :key="f.value"
          @click="active = f.value"
          class="px-3 py-1.5 rounded-full text-xs font-medium border transition-colors"
          :class="active === f.value
            ? 'bg-teal text-white border-teal'
            : 'border-ink/15 dark:border-mist/20 text-slate dark:text-mist/70 hover:border-teal hover:text-teal'"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="group in visibleGroups"
          :key="group.category"
          class="rounded-2xl border border-ink/10 dark:border-mist/10 bg-surface dark:bg-surface-dark p-6"
        >
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-heading font-semibold">{{ group.category }}</h3>
            <span
              v-if="group.type === 'theoretical'"
              class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-dashed border-teal/50 text-teal"
            >Theory</span>
          </div>
          <ul class="space-y-3">
            <li v-for="s in group.items" :key="s.name">
              <div class="flex items-center justify-between text-sm mb-1">
                <span class="text-ink dark:text-mist">{{ s.name }}</span>
                <span class="text-xs text-slate dark:text-mist/50">{{ s.level }}%</span>
              </div>
              <div class="h-1 rounded-full bg-ink/10 dark:bg-mist/10 overflow-hidden">
                <div
                  class="h-full rounded-full bg-teal transition-all duration-1000"
                  :style="{ width: s.level + '%' }"
                />
              </div>
              <p v-if="s.note" class="text-xs text-slate dark:text-mist/50 mt-1">{{ s.note }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import { skills } from '@/data/skills'

const filters = [
  { value: 'all', label: 'All' },
  { value: 'practical', label: 'Practical' },
  { value: 'theoretical', label: 'Theoretical' },
  { value: 'data', label: 'Data & Science' }
]
const active = ref('all')

const visibleGroups = computed(() =>
  active.value === 'all' ? skills : skills.filter((g) => g.type === active.value)
)
</script>
