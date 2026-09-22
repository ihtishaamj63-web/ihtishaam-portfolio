<template>
  <div
    class="project-visual group/visual relative mb-6 h-44 overflow-hidden border border-cyan-glow/25 bg-deep-blue/70 transition-colors duration-500 group-hover:border-teal-bright group-hover:bg-ocean-blue/60"
  >
    <img
      :src="backgroundImage"
      alt=""
      class="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen transition-all duration-700 group-hover/visual:scale-110 group-hover/visual:opacity-40"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-deep-blue/65" aria-hidden="true" />
    <svg
      v-if="kind === 'cleanspaces'"
      viewBox="0 0 500 210"
      class="h-full w-full transition-transform duration-700 group-hover/visual:scale-105"
      aria-label="Community cleanup network map"
      role="img"
    >
      <path
        d="M0 155 95 120l90 20 98-65 107 29 120-54M22 67l92 36 71-20 85 31 102-67 114 47"
        fill="none"
        stroke="#1dd1a1"
        stroke-width="1"
        opacity=".6"
      />
      <g fill="none" stroke="#00d9ff" stroke-width="2">
        <path d="M72 151 148 92l87 41 86-84 93 67" />
        <path d="M148 92 183 44m52 89 67-26m-67 26 34 49m86-133 54-45" />
      </g>
      <g fill="#0a8ca8">
        <circle cx="72" cy="151" r="8" />
        <circle cx="148" cy="92" r="8" />
        <circle cx="235" cy="133" r="8" />
        <circle cx="321" cy="49" r="8" />
        <circle cx="414" cy="116" r="8" />
      </g>
      <g fill="#e8d7c3">
        <circle cx="183" cy="44" r="5" />
        <circle cx="269" cy="169" r="5" />
        <circle cx="375" cy="-1" r="5" />
      </g>
      <path d="M357 153c-8-18 1-34 14-43 8 16 4 33-14 43Z" fill="#1dd1a1" />
      <path
        d="M357 153c3-16 8-29 14-43m-14 43c-7-9-11-16-12-23"
        stroke="#ffffff"
        stroke-width="1.5"
      />
      <g fill="#b5d0de" font-family="Inter, sans-serif" font-size="11">
        <text x="27" y="188">RESIDENTS</text>
        <text x="194" y="119">60% ACTIVE</text>
        <text x="350" y="138">CLEAN ZONE</text>
      </g>
    </svg>
    <svg
      v-else
      viewBox="0 0 500 210"
      class="h-full w-full transition-transform duration-700 group-hover/visual:scale-105"
      aria-label="Connected people and permissions network"
      role="img"
    >
      <g fill="none" stroke="#00d9ff" stroke-width="2" opacity=".75">
        <path
          d="M250 42 130 100l-34 67M250 42l120 58 34 67M130 100l120 43 120-43M96 167l154-24 154 24"
        />
        <path d="M250 42v101" />
      </g>
      <g fill="#0a8ca8">
        <circle cx="250" cy="42" r="18" />
        <circle cx="130" cy="100" r="13" />
        <circle cx="370" cy="100" r="13" />
        <circle cx="96" cy="167" r="12" />
        <circle cx="250" cy="143" r="14" />
        <circle cx="404" cy="167" r="12" />
      </g>
      <g fill="#ffffff" font-family="Inter, sans-serif" font-size="10" text-anchor="middle">
        <text x="250" y="46">CORE</text>
        <text x="130" y="104">PEOPLE</text>
        <text x="370" y="104">ROLES</text>
        <text x="96" y="171">TIME</text>
        <text x="250" y="147">DATA</text>
        <text x="404" y="171">PAY</text>
      </g>
      <circle
        cx="250"
        cy="143"
        r="27"
        fill="none"
        stroke="#1dd1a1"
        stroke-width="2"
        stroke-dasharray="3 5"
      />
      <text x="205" y="195" fill="#b5d0de" font-family="Inter, sans-serif" font-size="11">
        INTERDEPENDENT SYSTEM
      </text>
    </svg>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({ kind: { type: String, required: true } })
const backgroundImage = computed(() =>
  props.kind === 'cleanspaces' ? '/images/shark.jpg' : '/images/dna-helix.jpg',
)
</script>
