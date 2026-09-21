<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :disabled="disabled"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="[sizeClass, variantClass]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  href: String,
  to: [String, Object],
  disabled: Boolean
})

const tag = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})
const external = computed(() => !!props.href && !props.to)

const sizeClass = computed(() => ({
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base'
}[props.size]))

const variantClass = computed(() => ({
  primary: 'bg-teal text-white hover:bg-teal-dark shadow-sm hover:shadow-md',
  ghost: 'border border-ink/20 dark:border-mist/20 text-ink dark:text-mist hover:border-teal hover:text-teal',
  link: 'text-teal hover:text-teal-dark underline-offset-4 hover:underline'
}[props.variant]))
</script>
