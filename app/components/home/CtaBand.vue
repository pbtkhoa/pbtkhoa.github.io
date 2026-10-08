<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <div class="grid grid-cols-1 items-center gap-6 rounded-[32px] bg-linear-120/srgb from-violet to-[#9a5874] p-7 text-white lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8 lg:px-11 lg:py-9">
    <KhoaPhoto
      :size="96"
      alt=""
      class="hidden size-24 rounded-full border-4 border-white/85 object-cover lg:block"
    />
    <div>
      <h2 class="mt-1.5 mb-0 font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.08] font-semibold tracking-[-0.015em] text-balance text-white">
        Have a project for the next quarter?
      </h2>
      <p class="mt-1.5 mb-0 text-[#f3eefc]">
        Tell me what you're building. {{ site.replyPromise }}
      </p>
    </div>
    <AppButton
      to="/contact"
      variant="amber"
      class="justify-self-start"
    >
      Get in touch
    </AppButton>
  </div>
</template>
