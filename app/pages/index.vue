<script setup lang="ts">
import { clients, featuredProjects, moreProjects, services, site, stats } from '~/data/site'

const HOME_PROJECT_COUNT = 3

const featuredServices = services.slice(0, 3)
const homeProjects = featuredProjects.slice(0, HOME_PROJECT_COUNT)
const remainingProjects = featuredProjects.length + moreProjects.length - HOME_PROJECT_COUNT

useSeoMeta({
  description: site.pitch,
  ogTitle: `${site.shortName} · ${site.role}`,
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
    <HeroSky />
    <StatCards :stats="stats" />
    <ClientMarquee :clients="clients" />

    <PageBand>
      <SectionHead
        kicker="What I do"
        title="Three ways I can help"
      >
        <template #action>
          <AppButton to="/services">
            All services
          </AppButton>
        </template>
      </SectionHead>
      <div class="grid gap-4.5 lg:grid-cols-3">
        <ServiceCard
          v-for="service in featuredServices"
          :key="service.key"
          :service="service"
          :to="`/services#${service.key}`"
        />
      </div>
    </PageBand>

    <PageBand alt>
      <SectionHead
        kicker="Selected work"
        title="Recent projects"
      >
        <template #action>
          <AppButton to="/work">
            All projects
          </AppButton>
        </template>
      </SectionHead>
      <div class="grid gap-4.5 lg:grid-cols-3">
        <CaseCard
          v-for="project in homeProjects"
          :key="project.slug"
          :project="project"
          :to="`/work#${project.slug}`"
          layout="stack"
        />
      </div>
      <p class="mt-7 mb-0 text-muted">
        Plus {{ remainingProjects }} more projects on the work page, and many more stores and plugins under NDA.
        <NuxtLink
          to="/work"
          class="font-semibold text-fg"
          :class="textLinkClass"
        >
          See all projects
        </NuxtLink>
      </p>
    </PageBand>

    <PageBand>
      <CtaBand />
    </PageBand>
  </div>
</template>
