<script setup lang="ts">
import { career, careerAxis, site } from '~/data/site'

const cvUrl = usePublicUrl(site.cv)

useSeoMeta({
  title: 'About',
  description: 'Full-stack engineer since 2016: Laravel and Symfony from the start, team lead at Rikkeisoft, React Native at NFQ, and Shopware 6 since 2021 for companies across Europe.',
})
</script>

<template>
  <div>
    <div
      class="grid grid-cols-1 items-start gap-10 pt-[calc(68px+clamp(48px,7vw,112px))] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[clamp(40px,5vw,88px)]"
      :class="wrapClass"
    >
      <figure class="m-0 overflow-clip rounded-[28px] border border-line bg-surface lg:sticky lg:top-24">
        <KhoaPhoto
          :size="470"
          sizes="320:92vw 640:600px 900:470px"
          alt="Photo of Khoa"
          priority
          class="aspect-square w-full object-cover"
        />
        <figcaption class="px-4.5 py-3.5 text-[0.9375rem] text-muted">
          {{ site.name }}, full-stack software engineer.
        </figcaption>
      </figure>

      <div class="grid gap-5">
        <p :class="labelClass">
          About
        </p>
        <h1
          class="text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02]"
          :class="displayClass"
        >
          I'm a full-stack engineer who likes the boring parts done right.
        </h1>
        <div class="text-[clamp(1.0625rem,1.2vw,1.1875rem)] text-muted [&>p]:mt-0 [&>p]:mb-4.5 [&_strong]:font-semibold [&_strong]:text-fg">
          <p>
            I started with WordPress, Symfony and Laravel in 2016. Since then I've led a team at Rikkeisoft and built React&nbsp;Native apps at NFQ. In 2021 I took up <strong>Shopware 6</strong>, and now I build stores and Laravel apps for companies across Europe.
          </p>
          <p>
            I build and deploy features on both the back end and the front end. I work with <strong>PHP, Node.js, Laravel, Symfony, VueJS, ReactJS, Python, Elasticsearch and AWS</strong> on infrastructure, mobile apps, e-commerce stores and more. I've also upgraded a lot of older systems to current PHP, Symfony and Laravel versions.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <AppButton
            :href="cvUrl"
            variant="accent"
            download
          >
            Download CV (PDF)
          </AppButton>
          <AppButton :href="site.github">
            GitHub
          </AppButton>
          <AppButton :href="site.linkedin">
            LinkedIn
          </AppButton>
        </div>
      </div>
    </div>

    <section
      :class="wrapClass"
      aria-labelledby="career-title"
    >
      <SectionHead
        heading-id="career-title"
        title="Since 2016"
        text="I've worked at five companies, and taken freelance projects on the side since 2017."
      />
      <CareerChart
        :rows="career"
        :axis="careerAxis"
      />
    </section>

    <ContactCta />
  </div>
</template>
