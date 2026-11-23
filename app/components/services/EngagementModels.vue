<script setup lang="ts">
import type { Engagement } from '~/data/site'

defineProps<{ engagements: Engagement[] }>()
</script>

<template>
  <ul class="m-0 grid list-none grid-cols-1 gap-4 p-0 lg:grid-cols-3">
    <li
      v-for="engagement in engagements"
      :key="engagement.title"
      class="grid content-start gap-3 rounded-[28px] border p-[clamp(24px,2.6vw,36px)]"
      :class="engagement.featured
        ? 'border-transparent bg-accent text-accent-ink'
        : 'border-line bg-surface text-fg'"
    >
      <h3
        class="text-[clamp(1.35rem,1.8vw,1.75rem)] leading-[1.1]"
        :class="displayClass"
      >
        {{ engagement.title }}
      </h3>
      <p
        class="m-0 text-[0.8125rem]/[1.35] font-semibold tracking-[0.07em] uppercase"
        :class="engagement.featured ? 'text-accent-ink' : 'text-accent-text'"
      >
        {{ engagement.terms }}
      </p>
      <p
        class="m-0"
        :class="engagement.featured ? 'text-accent-ink' : 'text-muted'"
      >
        {{ engagement.text }}
      </p>
    </li>
  </ul>
</template>
