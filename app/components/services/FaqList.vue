<script setup lang="ts">
import type { Faq } from '~/data/site'

defineProps<{ items: Faq[] }>()
</script>

<template>
  <div class="border-b border-line">
    <details
      v-for="(item, index) in items"
      :key="item.question"
      class="group border-t border-line"
      :open="index === 0"
    >
      <summary
        class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-5 text-[clamp(1.0625rem,1.4vw,1.25rem)] font-semibold [&::-webkit-details-marker]:hidden"
        :class="focusRing"
      >
        {{ item.question }}
        <span
          class="grid size-9 flex-none place-items-center rounded-full border border-line text-[1.25rem] leading-none text-accent-text"
          aria-hidden="true"
        >
          <span class="group-open:hidden">+</span>
          <span class="hidden group-open:inline">-</span>
        </span>
      </summary>
      <p class="mt-0 mb-5 max-w-[48rem] text-muted">
        {{ item.answer }}
      </p>
    </details>
  </div>
</template>
