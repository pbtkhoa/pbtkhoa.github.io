<script setup lang="ts">
import type { ProcessStep } from '~/data/site'

defineProps<{ steps: ProcessStep[] }>()
</script>

<template>
  <ol class="m-0 grid list-none grid-cols-1 border-y border-line p-0 lg:grid-cols-4">
    <li
      v-for="(step, index) in steps"
      :key="step.title"
      class="grid content-start gap-3 border-t border-line p-[clamp(24px,2.6vw,40px)] first:border-t-0 lg:border-t-0 lg:border-l lg:first:border-l-0"
    >
      <span
        class="font-display text-[clamp(2.4rem,4vw,3.6rem)] leading-none font-bold tracking-[-0.035em] text-accent-text tabular-nums"
        aria-hidden="true"
      >{{ String(index + 1).padStart(2, '0') }}</span>
      <h3
        class="text-[clamp(1.35rem,1.8vw,1.75rem)] leading-[1.1]"
        :class="displayClass"
      >
        {{ step.title }}
      </h3>
      <p class="m-0 text-[1rem] text-muted">
        {{ step.text }}
      </p>
    </li>
  </ol>
</template>
