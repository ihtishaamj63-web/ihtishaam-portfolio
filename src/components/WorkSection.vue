<template>
  <section id="work" class="section">
    <div class="wrap">
      <div class="section-head">
        <span class="index">01</span>
        <h2>Selected work</h2>
      </div>
      <p class="section-note">
        Summaries first. Open a project for the full breakdown, the stack, and the responsive
        builds.
      </p>

      <div>
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.id"
          :project="project"
          :index="i"
          @open="$emit('open-project', project)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'

defineEmits(['open-project'])
</script>
