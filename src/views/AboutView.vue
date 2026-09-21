<template>
  <main id="main-content" class="pt-10">
    <div class="container">
      <SectionHeading
        eyebrow="About"
        title="The long version."
        subtitle="Where I've come from, what I've learned, and how it all fits together."
      />
    </div>

    <section class="py-10">
      <div class="container grid md:grid-cols-[1fr_1.5fr] gap-10 items-start">
        <div class="flex justify-center md:justify-start">
          <div class="relative">
            <div class="absolute -inset-3 rounded-2xl border-2 border-teal/40 translate-x-3 translate-y-3" />
            <img
              src="https://i.ibb.co/qYwYwTzr/ihtishaam.jpg"
              alt="Ihtishaam Johnson"
              class="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
        <div class="space-y-4 text-slate dark:text-mist/70">
          <p>
            I'm <strong class="text-ink dark:text-mist">Ihtishaam Johnson</strong>, a full-stack developer based in Cape Town. My path into software wasn't the standard one — I started in conservation biology, earned a BSc in Biodiversity &amp; Conservation Biology from the University of the Western Cape, and spent years working with ecological datasets before moving into code.
          </p>
          <p>
            That scientific training isn't background noise. It taught me to collect data carefully, question assumptions, document what I do, and never trust a result I can't reproduce. Those habits are exactly what make reliable software.
          </p>
          <p>
            At <strong class="text-ink dark:text-mist">Life Choices Academy</strong> I've moved through HTML, CSS, JavaScript, Python, Node.js, Express, PHP, and MySQL. I've led a team as tech lead on a production HR system with JWT auth, role-based access control, payroll automation, and MySQL normalised to 3NF. I've also managed payments and deployment on CleanSpaces, a community cleanup subscription platform using PayFast.
          </p>
          <p>
            I hold three Cisco Networking Academy certifications — Python Essentials 1, Introduction to Cybersecurity, and Introduction to Data Science — and I'm currently deepening my security, data, and modern JavaScript skills.
          </p>
        </div>
      </div>
    </section>

    <section class="py-16 bg-ink/[0.02] dark:bg-mist/[0.02]">
      <div class="container">
        <SectionHeading eyebrow="Education" title="Where I've learned." />
        <div class="max-w-3xl">
          <div
            v-for="(e, i) in education"
            :key="e.title"
            class="relative pl-10 pb-10 last:pb-0"
          >
            <div v-if="i < education.length - 1" class="absolute left-3 top-2 bottom-0 w-px bg-teal/30" />
            <div class="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface dark:bg-surface-dark border-2 border-teal flex items-center justify-center">
              <div class="w-2 h-2 rounded-full" :class="e.status === 'In progress' ? 'bg-teal animate-pulse' : 'bg-teal'" />
            </div>
            <span class="text-xs font-semibold text-teal uppercase tracking-wider">{{ e.status }}</span>
            <h3 class="font-heading font-bold text-lg mt-1">{{ e.title }}</h3>
            <p class="text-sm text-slate dark:text-mist/60 mb-2">{{ e.org }}</p>
            <p class="text-sm text-slate dark:text-mist/70">{{ e.blurb }}</p>
          </div>
        </div>
      </div>
    </section>

    <SkillsSection />
    <CertificationsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import CertificationsSection from '@/components/sections/CertificationsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import { education } from '@/data/education'
</script>
