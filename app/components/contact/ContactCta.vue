<script setup lang="ts">
import { site } from '~/data/site'

withDefaults(defineProps<{ showForm?: boolean }>(), { showForm: true })
</script>

<template>
  <section
    id="contact"
    class="grid gap-7 py-[clamp(88px,12vw,180px)]"
    :class="wrapClass"
    aria-labelledby="contact-title"
  >
    <p :class="labelClass">
      Contact
    </p>
    <h2
      id="contact-title"
      class="text-[clamp(2.8rem,8vw,8.8rem)] leading-[0.98]"
      :class="displayClass"
    >
      Have a project for the <span class="text-accent-text">next quarter?</span>
    </h2>
    <p class="m-0 text-[1.1875rem] text-muted">
      Tell me what you're building. {{ site.replyPromise }}
    </p>
    <div class="flex flex-wrap items-center gap-3">
      <div class="inline-flex max-w-full flex-wrap items-center gap-3 rounded-[32px] border border-line bg-surface py-1.5 pr-1.5 pl-5">
        <span class="text-[1.0625rem] font-semibold select-all [overflow-wrap:anywhere]">{{ site.email }}</span>
        <CopyEmail
          :email="site.email"
          variant="accent"
          size="sm"
        />
      </div>
      <AppButton :href="site.github">
        GitHub
      </AppButton>
      <AppButton :href="site.linkedin">
        LinkedIn
      </AppButton>
    </div>
    <p
      v-if="showForm"
      class="m-0 text-muted"
    >
      Prefer a form? <NuxtLink
        to="/contact"
        :class="textLinkClass"
      >Write to me here</NuxtLink>.
    </p>
  </section>
</template>
