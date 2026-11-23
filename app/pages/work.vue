<script setup lang="ts">
import { featuredWork, workGroups } from '~/data/site'

useSeoMeta({
  title: 'Work',
  description: 'Shopware stores and plugins, a multi-tenant accounting SaaS, GLS Bank sign-on, the PosBill ordering app and more from my client and freelance work.',
})
</script>

<template>
  <div>
    <div :class="wrapClass">
      <PageHead
        label="Work"
        title="Selected work"
        text="Stores, SaaS, banking and mobile. The screens are drawings based on the real products, and most client work is under NDA."
      />
      <FeaturedWork
        :items="featuredWork"
        :level="2"
      />
      <WorkIndex
        :groups="workGroups"
        :level="2"
      />
    </div>
    <ContactCta />
  </div>
</template>
