<script setup lang="ts">
import { career, site } from '~/data/site'

const cvUrl = usePublicUrl(site.cv)

useSeoMeta({
  title: 'About',
  description: 'Full-stack engineer since 2016: team lead at Rikkeisoft, React Native at NFQ, and five years of Shopware 6 and Laravel for companies in Germany and Austria.',
})
</script>

<template>
  <div>
    <PageBand>
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-14">
        <figure class="m-0 overflow-hidden rounded-panel border border-line lg:sticky lg:top-24">
          <KhoaPhoto
            :size="470"
            sizes="320:92vw 640:600px 900:470px"
            alt="Photo of Khoa"
            priority
            class="aspect-square w-full object-cover"
          />
          <figcaption class="bg-card px-4.5 py-3.5 text-[0.9rem] text-muted">
            {{ site.name }}, full-stack software engineer.
          </figcaption>
        </figure>

        <div>
          <p :class="kickerClass">
            About
          </p>
          <h1 :class="displayHeadingClass">
            I'm a full-stack engineer who likes the boring parts done right.
          </h1>
          <div class="mt-5 text-[1.08rem] text-muted [&>p]:mt-0 [&>p]:mb-4.5 [&_strong]:text-fg">
            <p>
              I started with WordPress and Symfony in 2016. Since then I've led a team at Rikkeisoft, built React Native apps at NFQ, and spent the last five years on <strong>Shopware 6 and Laravel</strong> for companies in Germany and Austria.
            </p>
            <p>
              I like taking a feature from the database to the deploy. On the back end I work in <strong>PHP and, more and more, Node.js</strong>, and I've done a lot of upgrades of older systems to current PHP, Symfony and Laravel versions. I studied Electronics and Telecommunications at Hue University.
            </p>
          </div>
          <div class="mt-2 flex flex-wrap gap-3">
            <AppButton
              :href="cvUrl"
              variant="amber"
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
          <h2 class="sr-only">
            Experience
          </h2>
          <CareerTimeline :roles="career" />
        </div>
      </div>
    </PageBand>
  </div>
</template>
