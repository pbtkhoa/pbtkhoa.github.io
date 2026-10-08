<script setup lang="ts">
import { featuredProjects, moreProjects, shopwareExtensions, shopwareStores } from '~/data/site'

const intro = `${featuredProjects.length} projects in detail, ${moreProjects.length} more below, and plenty more under NDA. Client names appear only where the work is public.`

useSeoMeta({
  title: 'Work',
  description: 'Shopware stores and plugins, a multi-tenant accounting SaaS, banking sign-on, a Thermomix lead tool, trading platforms, mobile apps and more from ten years of client work.',
})
</script>

<template>
  <div>
    <PageBand>
      <SectionHead
        kicker="Work"
        title="Projects from the last ten years"
        :text="intro"
        :level="1"
      />
      <div class="grid gap-4.5">
        <CaseCard
          v-for="project in featuredProjects"
          :id="project.slug"
          :key="project.slug"
          :project="project"
          :heading-level="2"
        />
      </div>
    </PageBand>

    <PageBand alt>
      <SectionHead
        kicker="More projects"
        title="Team projects and freelance builds"
        text="Earlier work at Rikkeisoft, NFQ and Junoteam, and projects I've built as a freelancer."
      />
      <ProjectIndex :projects="moreProjects" />
    </PageBand>

    <PageBand>
      <MuchMore
        :stores="shopwareStores"
        :extensions="shopwareExtensions"
      />
    </PageBand>
  </div>
</template>
