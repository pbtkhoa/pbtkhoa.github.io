<script setup lang="ts">
import { site } from '~/data/site'

useSeoMeta({
  title: 'Contact',
  description: `Tell me about your project or role. ${site.replyPromise}`,
})
</script>

<template>
  <div
    class="pb-[clamp(64px,8vw,120px)]"
    :class="wrapClass"
  >
    <PageHead
      label="Contact"
      title="Let's talk about your project"
      :text="`A few lines are enough. ${site.replyPromise}`"
    />
    <div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <ContactForm />
      <ContactAside />
    </div>
  </div>
</template>
