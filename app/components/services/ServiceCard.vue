<script setup lang="ts">
import { NuxtLink } from '#components'
import type { Service } from '~/data/site'

const props = withDefaults(defineProps<{
  service: Service
  to?: string
  detailed?: boolean
  headingLevel?: 2 | 3
}>(), {
  to: undefined,
  detailed: false,
  headingLevel: 3,
})

const anchorId = computed(() => (props.detailed ? props.service.key : undefined))
const interactiveClass = computed(() => (props.to ? `${liftOnHover} ${focusRing}` : ''))
</script>

<template>
  <component
    :is="to ? NuxtLink : 'article'"
    :id="anchorId"
    :to="to"
    class="scroll-mt-24"
    :class="[cardClass, interactiveClass]"
  >
    <span
      class="grid size-11.5 place-items-center rounded-field bg-amber/20 font-display text-[1.2rem] font-bold text-amber"
      aria-hidden="true"
    >{{ service.mark }}</span>
    <component
      :is="`h${headingLevel}`"
      :class="cardHeadingClass"
    >
      {{ service.title }}
    </component>
    <p class="m-0 text-muted">
      {{ service.blurb }}
    </p>
    <ul
      v-if="detailed"
      class="mt-1.5 mb-0 grid list-none gap-1.5 p-0"
    >
      <li
        v-for="point in service.points"
        :key="point"
        class="flex gap-2.5 text-[0.95rem]"
      >
        <span
          class="text-amber"
          aria-hidden="true"
        >✦</span>
        {{ point }}
      </li>
    </ul>
  </component>
</template>
