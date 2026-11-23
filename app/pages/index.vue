<script setup lang="ts">
import { aiService, career, careerAxis, clients, featuredWork, services, site, stats, workGroups } from '~/data/site'

useSeoMeta({
  description: site.pitch,
  ogTitle: `${site.shortName}, ${site.role.toLowerCase()}`,
  ogDescription: site.pitch,
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': site.name,
      'jobTitle': site.role,
      'email': `mailto:${site.email}`,
      'sameAs': [site.github, site.linkedin],
    }),
  }],
})
</script>

<template>
  <div>
    <HeroWall />
    <StatRow :stats="stats" />

    <section
      id="work"
      :class="wrapClass"
      aria-labelledby="work-title"
    >
      <SectionHead
        heading-id="work-title"
        title="Selected work"
        text="Stores, SaaS, banking and mobile. The screens are drawings based on the real products."
      />
      <FeaturedWork :items="featuredWork" />
      <WorkIndex :groups="workGroups" />
    </section>

    <section
      id="services"
      aria-labelledby="services-title"
    >
      <div :class="wrapClass">
        <SectionHead
          heading-id="services-title"
          title="Services"
          text="Hire me for a fixed-scope project, a monthly retainer or a full-time remote seat."
          link-to="/services"
          link-label="How a project runs, terms and FAQ"
        />
      </div>
      <ServiceColumns
        :services="services"
        :ai="aiService"
      />
    </section>

    <section
      id="about"
      :class="wrapClass"
      aria-labelledby="about-title"
    >
      <SectionHead
        heading-id="about-title"
        title="Since 2016"
        text="I've worked at five companies, and taken freelance projects on the side since 2017."
        link-to="/about"
        link-label="More about me"
      />
      <CareerChart
        :rows="career"
        :axis="careerAxis"
      />
    </section>

    <ClientMarquee :clients="clients" />
    <ContactCta />
  </div>
</template>
