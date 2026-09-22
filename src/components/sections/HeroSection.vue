<template>
  <section class="hero relative overflow-hidden bg-[#eef9f7] text-deep-blue">
    <div class="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
    <div
      class="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[.9fr_1.1fr] lg:py-24"
    >
      <div class="relative z-10 max-w-2xl">
        <p
          class="eyebrow mb-6 flex items-center gap-3 text-sm font-black uppercase tracking-[.2em] text-ocean-blue"
        >
          <span
            class="h-2 w-2 rounded-full bg-teal-bright shadow-[0_0_0_6px_rgba(29,209,161,.15)]"
          />
          Genetics / systems / software
        </p>
        <h1
          class="font-heading text-6xl font-black leading-[.86] tracking-[-.04em] md:text-8xl lg:text-9xl"
        >
          Ihtishaam<br /><span class="text-ocean-blue">Johnson.</span>
        </h1>
        <p class="mt-8 max-w-xl text-2xl font-bold leading-tight text-deep-blue md:text-3xl">
          I build digital systems that make complexity easier to understand.
        </p>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">
          Full-stack developer with a BSc in Biodiversity &amp; Conservation Biology. I bring
          field-science curiosity, sharp systems thinking, and a little cinematic energy to every
          build.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <BaseButton
            href="#projects"
            class="!rounded-full !bg-deep-blue !px-7 !py-3 !font-black !uppercase !tracking-wide !text-white hover:!bg-ocean-blue hover:!shadow-[0_10px_24px_rgba(0,26,51,.2)]"
            >Explore projects</BaseButton
          >
          <BaseButton
            href="#about"
            variant="ghost"
            class="!rounded-full !border-deep-blue !px-7 !py-3 !font-black !uppercase !tracking-wide !text-deep-blue hover:!bg-white"
            >Meet the person</BaseButton
          >
        </div>
        <div
          class="mt-12 flex flex-wrap gap-6 text-xs font-black uppercase tracking-[.16em] text-ocean-blue/70"
        >
          <span>01 / Observe</span><span>02 / Map</span><span>03 / Build</span>
        </div>
      </div>
      <div class="relative min-h-[22rem] lg:min-h-[38rem]">
        <div
          class="dna-frame absolute inset-0 overflow-hidden rounded-[2rem] bg-deep-blue shadow-[16px_16px_0_#1dd1a1] transition-transform duration-700 hover:rotate-1 hover:scale-[1.015]"
        >
          <img
            src="/images/dna-helix.jpg"
            alt="DNA double helix"
            class="dna-image h-full w-full object-contain p-5 md:p-10"
          />
          <div
            class="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 via-transparent to-deep-blue/45"
          />
          <div
            class="absolute left-6 top-6 rounded-full border border-white/30 bg-deep-blue/70 px-4 py-2 text-[10px] font-black uppercase tracking-[.2em] text-white backdrop-blur-sm"
          >
            Specimen 001 / DNA
          </div>
          <div
            class="absolute bottom-6 right-6 max-w-[12rem] text-right text-xs font-bold uppercase leading-relaxed tracking-[.12em] text-white/70"
          >
            From living systems to usable software
          </div>
        </div>
        <div
          class="absolute -bottom-8 -left-5 hidden w-36 rotate-[-6deg] rounded-xl border border-white/70 bg-white p-3 shadow-xl sm:block"
        >
          <img src="/images/shark.jpg" alt="Shark silhouette" class="h-20 w-full object-cover" />
          <p class="mt-2 text-[9px] font-black uppercase tracking-[.16em] text-deep-blue">
            Field note / adaptation
          </p>
        </div>
        <span
          class="absolute -right-3 -top-5 h-20 w-20 rounded-full border border-ocean-blue/20 bg-teal-bright/30"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<style scoped>
.hero-mesh {
  background-image:
    linear-gradient(rgba(10, 63, 90, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 63, 90, 0.06) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(90deg, black, transparent 75%);
}
.dna-image {
  filter: saturate(1.2) contrast(1.08) drop-shadow(0 0 24px rgba(0, 217, 255, 0.32));
  transition: transform 700ms ease;
}
.dna-frame:hover .dna-image {
  transform: scale(1.04);
}
@media (prefers-reduced-motion: reduce) {
  .dna-image,
  .dna-frame {
    transition: none;
  }
}
</style>
