<script setup lang="ts">
import type { ProcessStep } from '~/data/site'

defineProps<{ steps: ProcessStep[] }>()
</script>

<template>
  <ol class="m-0 grid list-none grid-cols-1 gap-7 p-0 lg:grid-cols-4 lg:gap-4.5">
    <li
      v-for="(step, index) in steps"
      :key="step.title"
      class="relative pt-14 lg:not-last:after:absolute lg:not-last:after:top-5 lg:not-last:after:right-[-10px] lg:not-last:after:left-13 lg:not-last:after:border-t-2 lg:not-last:after:border-dashed lg:not-last:after:border-line"
    >
      <span
        class="absolute top-0 left-0 grid size-10 place-items-center rounded-full bg-amber font-bold text-amber-ink"
        aria-hidden="true"
      >{{ index + 1 }}</span>
      <h3 class="m-0 font-display text-[1.25rem] font-semibold">
        {{ step.title }}
      </h3>
      <p class="mt-1.5 mb-0 text-[0.95rem] text-muted">
        {{ step.text }}
      </p>
    </li>
  </ol>
</template>
