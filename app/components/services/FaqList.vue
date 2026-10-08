<script setup lang="ts">
import type { Faq } from '~/data/site'

defineProps<{ items: Faq[] }>()
</script>

<template>
  <div class="grid gap-2.5">
    <details
      v-for="(item, index) in items"
      :key="item.question"
      class="group rounded-tile border border-line bg-card px-5.5 py-4.5"
      :open="index === 0"
    >
      <summary
        class="flex cursor-pointer list-none justify-between gap-3 rounded-md font-semibold [&::-webkit-details-marker]:hidden"
        :class="focusRing"
      >
        {{ item.question }}
        <span
          class="text-[1.3rem] leading-none text-amber"
          aria-hidden="true"
        >
          <span class="group-open:hidden">+</span>
          <span class="hidden group-open:inline">–</span>
        </span>
      </summary>
      <p class="mt-2.5 mb-0 text-muted">
        {{ item.answer }}
      </p>
    </details>
  </div>
</template>
