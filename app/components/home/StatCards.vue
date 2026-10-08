<script setup lang="ts">
import type { Stat } from '~/data/site'

defineProps<{ stats: Stat[] }>()
</script>

<template>
  <div :class="wrapClass">
    <ul class="relative z-2 -mt-16 mb-0 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-4">
      <li
        v-for="stat in stats"
        :key="stat.label"
        class="rounded-[22px] border border-line bg-card p-5.5"
      >
        <strong class="block font-display text-[2.2rem] leading-none font-semibold tabular-nums">{{ stat.value }}</strong>
        <span class="mt-2 block text-[0.9rem]/normal text-muted">{{ stat.label }}</span>
      </li>
    </ul>
  </div>
</template>
