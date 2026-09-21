<template>
  <section class="py-20">
    <div class="container max-w-3xl text-center">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        subtitle="Open to opportunities, collaborations, and interesting problems."
      />
      <div class="flex flex-col items-center gap-4">
        <a
          href="mailto:ihtishaamj63@gmail.com"
          class="text-2xl md:text-3xl font-heading font-bold text-ink dark:text-mist hover:text-teal transition-colors"
        >
          ihtishaamj63@gmail.com
        </a>
        <button
          @click="copy"
          class="text-sm text-slate dark:text-mist/60 hover:text-teal transition-colors"
        >
          {{ copied ? 'Copied!' : 'Click to copy' }}
        </button>
        <div class="flex gap-3 mt-4">
          <BaseButton href="https://github.com/ihtishaamj63-web">GitHub</BaseButton>
          <BaseButton href="https://linkedin.com/" variant="ghost">LinkedIn</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText('ihtishaamj63@gmail.com')
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    /* clipboard unavailable — ignore */
  }
}
</script>
