<template>
  <section id="work" class="section">
    <div class="wrap">
      <div class="section-head">
        <h2>Selected work</h2>
      </div>
      <div class="project-list">
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

<style scoped>
.project-list {
  display: grid;
  gap: 28px;
}

@media (max-width: 720px) {
  .project-list {
    gap: 20px;
  }
}
</style>
