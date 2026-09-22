<template>
  <section
    id="about"
    class="relative overflow-hidden bg-gradient-to-b from-ocean-blue via-[#0d5270] to-deep-blue py-28 text-white"
  >
    <div class="water-ripples pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
    <div class="container relative z-10">
      <p class="text-sm font-black uppercase tracking-[.22em] text-cyan-glow">The discovery</p>
      <h2
        class="mt-4 max-w-4xl font-heading text-5xl font-black uppercase tracking-tight text-cyan-glow md:text-7xl"
      >
        Who I am.
      </h2>
      <div class="mt-16 grid items-start gap-14 md:grid-cols-[.8fr_1.2fr]">
        <div class="group mx-auto md:mx-0">
          <div class="relative inline-block">
            <div
              class="absolute -inset-4 rounded-2xl border-2 border-cyan-glow opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
            />
            <img
              src="/images/portrait.jpg"
              alt="Ihtishaam Johnson"
              class="relative h-80 w-80 rounded-2xl border-2 border-teal-bright object-cover shadow-[0_0_30px_rgba(0,217,255,.3)] transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_50px_rgba(29,209,161,.5)]"
              loading="lazy"
            />
            <span
              class="absolute -bottom-4 -right-4 rounded-full border border-cyan-glow/60 bg-dark-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-glow"
              >Field researcher / builder</span
            >
          </div>
          <ul class="mt-12 space-y-3 text-sm text-white/70">
            <li class="border-l-2 border-cyan-glow pl-4">
              Biodiversity &amp; conservation biology
            </li>
            <li class="border-l-2 border-teal-bright pl-4">Full-stack development</li>
            <li class="border-l-2 border-sand pl-4">Stories, animals, and systems</li>
          </ul>
        </div>
        <div>
          <div class="space-y-4 text-lg leading-relaxed text-white/85">
            <p>
              I spent years studying biodiversity. Ecosystems taught me that all complex systems
              share principles: feedback loops, adaptation, and interdependence.
            </p>
            <p class="text-white/70">
              Now I apply those same principles to code. Every project is an organism. Every
              component has a role. The best systems, in nature and software, are those that adapt
              and thrive.
            </p>
          </div>
          <div class="mt-10 grid gap-4">
            <article
              v-for="interest in interests"
              :key="interest.title"
              class="group relative overflow-hidden rounded-xl border border-cyan-glow/35 bg-[#06334d] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-glow hover:shadow-[0_0_22px_rgba(0,217,255,.25)]"
            >
              <div
                class="absolute inset-y-0 right-0 w-1/2 bg-cover bg-center opacity-35 transition-opacity duration-500 group-hover:opacity-55"
                :style="{ backgroundImage: `url(${interest.image})` }"
                aria-hidden="true"
              />
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#06334d] via-[#06334d]/95 to-transparent"
                aria-hidden="true"
              />
              <div class="relative z-10 max-w-[75%]">
                <h3 class="font-heading text-xl font-black" :class="interest.color">
                  {{ interest.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-white/90">{{ interest.text }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="mt-20 max-w-4xl">
        <h3 class="mb-8 font-heading text-2xl font-black text-cyan-glow">
          Education &amp; journey
        </h3>
        <div class="space-y-5 border-l border-cyan-glow/30 pl-6">
          <article
            v-for="(item, index) in education"
            :key="item.title"
            class="group relative rounded-xl border border-cyan-glow/25 bg-cyan-glow/5 p-6 transition-all duration-500 hover:border-cyan-glow hover:bg-cyan-glow/10 hover:shadow-[0_0_22px_rgba(0,217,255,.2)]"
          >
            <span
              class="absolute -left-[2.05rem] top-7 h-3 w-3 rounded-full bg-cyan-glow shadow-[0_0_14px_rgba(0,217,255,.8)]"
            />
            <p class="text-xs font-bold uppercase tracking-wider text-teal-bright">
              {{ item.status }} / 0{{ index + 1 }}
            </p>
            <h4 class="mt-2 font-heading text-xl font-black text-white">{{ item.title }}</h4>
            <p class="mt-1 text-sm text-white/55">{{ item.org }}</p>
            <p class="mt-3 text-sm leading-relaxed text-white/70">{{ item.blurb }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '@/data/education'

const interests = [
  {
    title: 'Film obsessed',
    text: 'Narrative structure, cinematography, and every detail serving the story.',
    image: '/images/scorsese.jpg',
    color: 'text-cyan-glow',
  },
  {
    title: 'Manchester United',
    text: 'Strategy, teamwork, synchronized execution, and shared goals.',
    image: '/images/football.jpg',
    color: 'text-teal-bright',
  },
  {
    title: 'Paleontology',
    text: 'Extinct systems, evolution, adaptation, and the evidence left behind.',
    image: '/images/dino.jpg',
    color: 'text-cyan-glow',
  },
  {
    title: 'Conservation & biomes',
    text: 'Habitats, species relationships, and the careful work of protecting living systems.',
    image: '/images/biome.jpg',
    color: 'text-teal-bright',
  },
]
</script>

<style scoped>
.water-ripples {
  background-image:
    radial-gradient(
      ellipse at 20% 20%,
      transparent 0 16%,
      rgba(0, 217, 255, 0.16) 16.5% 17%,
      transparent 17.5% 35%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      transparent 0 20%,
      rgba(29, 209, 161, 0.12) 20.5% 21%,
      transparent 21.5% 40%
    );
  background-size:
    280px 180px,
    360px 240px;
}
</style>
