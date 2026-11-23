<script setup lang="ts">
import { aiService, engagements, faqs, processSteps, services } from '~/data/site'

useSeoMeta({
  title: 'Services',
  description: 'Shopware 6 development, PHP and Node.js back ends, VueJS, ReactJS and mobile front ends, or a remote engineer on your team.',
})
</script>

<template>
  <div>
    <div :class="wrapClass">
      <PageHead
        label="Services"
        title="Engineering for e-commerce and business apps"
        text="PHP and JavaScript since 2016 for online stores, banks, agencies and SaaS products. Pick one service or combine them."
      >
        <template #title>
          Engineering for <span class="whitespace-nowrap">e-commerce</span> and business apps
        </template>
      </PageHead>
    </div>
    <ServiceColumns
      :services="services"
      :ai="aiService"
      :level="2"
    />

    <section
      :class="wrapClass"
      aria-labelledby="process-title"
    >
      <SectionHead
        heading-id="process-title"
        title="How a project runs"
      />
      <ProcessSteps :steps="processSteps" />
    </section>

    <section
      :class="wrapClass"
      aria-labelledby="terms-title"
    >
      <SectionHead
        heading-id="terms-title"
        title="Ways to work together"
        text="Choose what fits your team."
      />
      <EngagementModels :engagements="engagements" />
    </section>

    <section
      :class="wrapClass"
      aria-labelledby="faq-title"
    >
      <SectionHead
        heading-id="faq-title"
        title="Common questions"
      />
      <FaqList :items="faqs" />
    </section>

    <ContactCta />
  </div>
</template>
