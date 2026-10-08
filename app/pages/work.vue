<script setup lang="ts">
import { projects } from '~/data/site'

useSeoMeta({
  title: 'Work',
  description: 'Shopware stores and plugins, a multi-tenant accounting SaaS, banking sign-on, a Thermomix lead tool and more from ten years of client work.',
})
</script>

<template>
  <div>
    <PageBand>
      <SectionHead
        kicker="Work"
        title="Projects from the last ten years"
        text="Client names are shown where the work is public. The rest are described without names."
        :level="1"
      />
      <div class="grid gap-4.5">
        <CaseCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </PageBand>

    <PageBand alt>
      <CtaBand />
    </PageBand>
  </div>
</template>
