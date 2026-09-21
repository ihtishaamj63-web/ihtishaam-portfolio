<template>
  <section class="py-20">
    <div class="container">
      <SectionHeading
        eyebrow="About"
        title="Science, data, and clean code."
        subtitle="I approach software the way I approached conservation biology — with curiosity, structure, and respect for the data."
      />
      <div class="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
        <div class="flex justify-center">
          <div class="relative">
            <div class="absolute -inset-3 rounded-2xl border-2 border-teal/40 translate-x-3 translate-y-3" />
            <img
              src="https://i.ibb.co/qYwYwTzr/ihtishaam.jpg"
              alt="Ihtishaam Johnson"
              class="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
        <div class="space-y-4 text-slate dark:text-mist/70">
          <p>
            I'm <strong class="text-ink dark:text-mist">Ihtishaam Johnson</strong> — a full-stack developer with a BSc in Biodiversity &amp; Conservation Biology from the University of the Western Cape. That background isn't a detour; it's the foundation. Years of collecting, cleaning, and interpreting complex ecological datasets taught me the discipline that makes good software: rigor, structure, and a refusal to hand-wave over messy details.
          </p>
          <p>
            At <strong class="text-ink dark:text-mist">Life Choices Academy</strong> I've channelled that into full-stack development — Vue 3, Node.js, Express, MySQL, PHP, and Python. I've led a team as tech lead on a production HR management system and managed payments, pricing, and deployment on a community cleanup subscription platform.
          </p>
          <p>
            I hold three Cisco Networking Academy certifications (Python Essentials 1, Introduction to Cybersecurity, Introduction to Data Science), and I'm currently going deeper into security, data science, and modern JavaScript.
          </p>
          <BaseButton href="https://your-host.example/cv.pdf" variant="ghost" class="mt-2">
            Download CV
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
</script>
