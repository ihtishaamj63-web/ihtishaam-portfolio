<template>
  <span class="inline-flex items-center gap-2 text-xs font-medium">
    <span
      class="w-2 h-2 rounded-full"
      :class="{
        'bg-teal animate-[pulseDot_2s_ease-in-out_infinite]': status === 'up',
        'bg-amber animate-[pulseDot_2s_ease-in-out_infinite]': status === 'checking',
        'bg-red-500': status === 'down'
      }"
    />
    <span :class="{
      'text-teal': status === 'up',
      'text-amber': status === 'checking',
      'text-red-500': status === 'down'
    }">{{ label }}</span>
  </span>
</template>

<script setup>
defineProps({
  status: { type: String, default: 'checking' },
  label: { type: String, default: '' }
})
</script>
