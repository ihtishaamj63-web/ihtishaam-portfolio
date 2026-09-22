<template>
  <section id="about" class="relative overflow-hidden py-24">
    <svg class="pointer-events-none absolute left-0 top-12 hidden h-[32rem] w-48 text-teal/15 lg:block" viewBox="0 0 160 520" fill="none" aria-hidden="true"><path d="M82 520C82 360 77 234 86 0M80 360c-42-18-52-55-50-85 37 4 55 32 50 85Zm2-115c40-18 50-51 47-80-35 3-51 29-47 80Zm1 218c40-20 47-53 43-79-35 5-48 30-43 79Z" stroke="currentColor" stroke-width="2"/><path d="M82 137c-23-20-30-47-23-68 27 9 36 33 23 68Z" fill="currentColor"/></svg>
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
        <div class="space-y-5 text-base leading-relaxed text-slate dark:text-mist/80 md:text-lg">
          <p>
            I'm <strong class="text-ink dark:text-mist">Ihtishaam Johnson</strong> — a full-stack developer with a BSc in Biodiversity &amp; Conservation Biology from the University of the Western Cape. That background isn't a detour; it's the foundation. Years of collecting, cleaning, and interpreting complex ecological datasets taught me the discipline that makes good software: rigor, structure, and a refusal to hand-wave over messy details.
          </p>
          <p>
            At <strong class="text-ink dark:text-mist">Life Choices Academy</strong> I've channelled that into full-stack development — Vue 3, Node.js, Express, MySQL, PHP, and Python. I've led a team as tech lead on a production HR management system and managed payments, pricing, and deployment on a community cleanup subscription platform.
          </p>
          <p>
            I hold three Cisco Networking Academy certifications (Python Essentials 1, Introduction to Cybersecurity, Introduction to Data Science), and I'm currently going deeper into security, data science, and modern JavaScript.
          </p>
          <p class="border-l-2 border-amber pl-4 text-sm italic text-ink dark:text-mist">From organisms to ecosystems, conservation biology is the study of relationships. That lens is central to how I build software.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
</script>
