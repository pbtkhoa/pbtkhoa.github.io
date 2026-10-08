<script setup lang="ts">
import { engagements, faqs, processSteps, services } from '~/data/site'

useSeoMeta({
  title: 'Services',
  description: 'Shopware 6 development, PHP and Node.js back ends, VueJS, ReactJS and mobile front ends, or a remote engineer on your team.',
})
</script>

<template>
  <div>
    <PageBand>
      <SectionHead
        kicker="Services"
        title="Engineering for e-commerce and business apps"
        text="PHP and JavaScript since 2016 for online stores, banks, agencies and SaaS products. Pick one service or combine them."
        :level="1"
      />
      <div class="grid gap-4.5 lg:grid-cols-2">
        <ServiceCard
          v-for="service in services"
          :key="service.key"
          :service="service"
          :heading-level="2"
          detailed
        />
      </div>
    </PageBand>

    <PageBand alt>
      <SectionHead
        kicker="How we work"
        title="How a project runs"
      />
      <ProcessSteps :steps="processSteps" />
    </PageBand>

    <PageBand>
      <SectionHead
        kicker="Ways to work together"
        title="Choose what fits your team"
      />
      <EngagementModels :engagements="engagements" />
    </PageBand>

    <PageBand alt>
      <SectionHead
        kicker="FAQ"
        title="Common questions"
      />
      <FaqList :items="faqs" />
    </PageBand>

    <PageBand>
      <CtaBand />
    </PageBand>
  </div>
</template>
