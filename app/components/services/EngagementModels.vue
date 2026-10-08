<script setup lang="ts">
import type { Engagement } from '~/data/site'

defineProps<{ engagements: Engagement[] }>()
</script>

<template>
  <ul class="m-0 grid list-none grid-cols-1 gap-4.5 p-0 lg:grid-cols-3">
    <li
      v-for="engagement in engagements"
      :key="engagement.title"
      class="grid content-start gap-2 rounded-card border p-7"
      :class="engagement.featured
        ? 'border-transparent bg-linear-160/srgb from-violet to-[#2a2560] text-white'
        : 'border-line bg-card'"
    >
      <h3 :class="cardHeadingClass">
        {{ engagement.title }}
      </h3>
      <p
        class="m-0 font-display text-[1.1rem]"
        :class="engagement.featured ? 'text-[#f4a93a]' : 'text-amber'"
      >
        {{ engagement.terms }}
      </p>
      <p
        class="m-0"
        :class="engagement.featured ? 'text-[#ddd8f5]' : 'text-muted'"
      >
        {{ engagement.text }}
      </p>
    </li>
  </ul>
</template>
