<script setup lang="ts">
import type { Stat } from '~/data/site'

defineProps<{ stats: Stat[] }>()
</script>

<template>
  <section
    class="grid grid-cols-2 border-y border-line bg-surface lg:grid-cols-3"
    aria-label="In numbers"
  >
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="grid content-start gap-2.5 overflow-clip border-l border-line px-[max(16px,4vw)] py-[clamp(28px,3.4vw,48px)] first:border-l-0 max-lg:nth-3:col-span-full max-lg:nth-3:border-t max-lg:nth-3:border-l-0"
    >
      <b
        class="text-[clamp(2.8rem,5.8vw,6rem)] leading-[0.92] tabular-nums sfx:animate-up sfx:[animation-range:entry_10%_entry_90%] sfx:[animation-timeline:view()]"
        :class="displayClass"
      >{{ stat.value }}</b>
      <span class="text-base/[1.4] text-muted">{{ stat.label }}</span>
    </div>
  </section>
</template>
