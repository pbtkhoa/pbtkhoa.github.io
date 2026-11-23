<script setup lang="ts">
import type { CareerRow, CareerTone } from '~/data/site'

defineProps<{
  rows: CareerRow[]
  axis: string[]
}>()

const LEFT = ['left-0', 'left-[10%]', 'left-[20%]', 'left-[30%]', 'left-[40%]', 'left-[50%]', 'left-[60%]', 'left-[70%]', 'left-[80%]', 'left-[90%]']

const WIDTH = ['w-0', 'w-[10%]', 'w-[20%]', 'w-[30%]', 'w-[40%]', 'w-[50%]', 'w-[60%]', 'w-[70%]', 'w-[80%]', 'w-[90%]', 'w-full']

const AXIS_POSITION = ['left-0 text-muted', 'left-[20%] -translate-x-1/2 text-muted', 'left-[40%] -translate-x-1/2 text-muted', 'left-[60%] -translate-x-1/2 text-muted', 'left-[80%] -translate-x-1/2 text-muted', 'left-full -translate-x-full text-accent-text']

const TONE: Record<CareerTone, string> = {
  job: 'bg-fg text-bg',
  lead: 'bg-accent text-accent-ink',
  free: 'bg-accent bg-[repeating-linear-gradient(135deg,transparent_0_12px,#0000001f_12px_14px)] text-accent-ink',
}

const barBase = 'absolute top-1/2 -mt-[11px] flex h-[22px] origin-left items-center overflow-clip rounded-[9px] p-0 text-[0px] leading-none font-semibold whitespace-nowrap lg:-mt-4 lg:h-8 lg:px-3 lg:text-[0.8125rem] sfx:animate-bar sfx:[animation-range:entry_0%_entry_100%] sfx:[animation-timeline:view()]'
</script>

<template>
  <div
    class="grid grid-cols-1 gap-x-6 pb-[clamp(64px,8vw,120px)] lg:grid-cols-[minmax(160px,22%)_1fr]"
    role="table"
    aria-label="Career by year"
  >
    <div
      class="hidden lg:block"
      aria-hidden="true"
    />
    <div
      class="relative h-[30px] border-b border-line lg:col-start-2"
      aria-hidden="true"
    >
      <span
        v-for="(label, index) in axis"
        :key="label"
        class="absolute bottom-1.5 text-[0.8125rem] font-semibold tabular-nums"
        :class="AXIS_POSITION[index]"
      >{{ label }}</span>
    </div>
    <div
      v-for="row in rows"
      :key="row.org"
      class="contents"
      role="row"
    >
      <div
        class="grid min-w-0 content-center gap-0.5 border-line pt-3.5 pb-1.5 lg:border-b lg:py-[18px]"
        role="cell"
      >
        <b class="text-[1.0625rem] font-semibold">{{ row.org }}</b>
        <span class="text-[0.9375rem] text-muted">{{ row.role }}, {{ row.years }}</span>
        <span
          v-for="award in row.awards"
          :key="award"
          class="text-[0.875rem] font-semibold text-accent-text"
        >{{ award }}</span>
      </div>
      <div
        class="relative min-h-10 border-b border-line bg-[repeating-linear-gradient(90deg,transparent_0,transparent_calc(10%-1px),var(--color-line)_calc(10%-1px),var(--color-line)_10%)] lg:min-h-0"
        role="cell"
      >
        <span
          :class="[barBase, TONE[row.tone], LEFT[row.start], WIDTH[row.end - row.start]]"
        >{{ row.bar }}</span>
      </div>
    </div>
  </div>
</template>
