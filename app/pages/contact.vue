<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Contact',
  description: `Tell me about your project or role. ${site.replyPromise}`,
})
</script>

<template>
  <div>
    <PageBand>
      <SectionHead
        kicker="Contact"
        title="Let's talk about your project"
        :text="`A few lines are enough. ${site.replyPromise}`"
        :level="1"
      />
      <div class="grid items-start gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ContactForm />
        <ContactAside />
      </div>
    </PageBand>
  </div>
</template>
