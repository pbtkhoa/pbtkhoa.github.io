<script setup lang="ts">
import type { WorkGroup } from '~/data/site'

const props = withDefaults(defineProps<{
  groups: WorkGroup[]
  level?: 2 | 3
}>(), {
  level: 3,
})

const entryLevel = computed(() => props.level + 1)
</script>

<template>
  <div class="pt-[clamp(56px,7vw,104px)] pb-[clamp(40px,5vw,72px)]">
    <div class="grid gap-2 pb-7">
      <component
        :is="`h${level}`"
        class="text-[clamp(1.9rem,3.4vw,3rem)] leading-none"
        :class="displayClass"
      >
        And much more
      </component>
      <p class="m-0 max-w-[34rem] text-muted">
        Client projects, internal tools and freelance builds, grouped by where I made them.
      </p>
    </div>
    <div>
      <div
        v-for="group in groups"
        :key="group.org"
        class="grid gap-3.5 border-t-[1.5px] border-fg pt-[18px] not-first:mt-9 lg:grid-cols-[minmax(150px,15rem)_minmax(0,1fr)] lg:gap-x-8 lg:gap-y-0"
      >
        <div class="grid content-start gap-0.5 self-start lg:sticky lg:top-22">
          <b class="font-display text-[1.35rem]/[1.15] font-bold tracking-[-0.02em]">{{ group.org }}</b>
          <span class="text-[0.9375rem] font-medium text-muted tabular-nums">{{ group.years }}</span>
        </div>
        <ul class="m-0 list-none p-0">
          <li
            v-for="entry in group.entries"
            :key="entry.title"
            class="grid gap-x-8 gap-y-1.5 border-line pb-[18px] not-first:border-t not-first:pt-[18px] lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]"
          >
            <div>
              <component
                :is="`h${entryLevel}`"
                class="m-0 font-sans text-lg/[1.3] font-semibold"
              >
                {{ entry.title }}
              </component>
              <p class="mt-1 mb-0 max-w-[44rem] text-[1rem] text-muted">
                {{ entry.text }}
              </p>
            </div>
            <p class="m-0 text-[0.9375rem]/[1.5] text-fg">
              {{ entry.stack }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
