<script setup lang="ts">
import { clients, projects, services, site, stats } from '~/data/site'

const featuredServices = services.slice(0, 3)
const featuredProjects = projects.slice(0, 2)

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
          <NuxtLink
            to="/services"
            class="btn"
          >
            All services
          </NuxtLink>
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
          <NuxtLink
            to="/work"
            class="btn"
          >
            All projects
          </NuxtLink>
        </template>
      </SectionHead>
      <div class="grid gap-4.5">
        <CaseCard
          v-for="project in featuredProjects"
          :key="project.slug"
          :project="project"
          to="/work"
        />
      </div>
    </PageBand>

    <PageBand>
      <CtaBand />
    </PageBand>
  </div>
</template>
