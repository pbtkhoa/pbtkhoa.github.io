<script setup lang="ts">
import type { Service } from '~/data/site'

const props = withDefaults(defineProps<{
  services: Service[]
  ai: Service
  level?: 2 | 3
}>(), {
  level: 3,
})

const heading = computed(() => `h${props.level}`)

const markClass = 'font-display text-[clamp(3.2rem,6.2vw,6.6rem)] leading-[0.86] font-bold tracking-[-0.035em] text-transparent [-webkit-text-stroke:1.5px_var(--color-fg)] group-hover:text-accent group-hover:[-webkit-text-stroke-color:var(--color-accent)] group-focus-within:text-accent group-focus-within:[-webkit-text-stroke-color:var(--color-accent)] motion-safe:transition-[color,-webkit-text-stroke-color] motion-safe:duration-300'

const titleClass = 'text-[clamp(1.35rem,1.8vw,1.75rem)] leading-[1.1]'

const pad = 'p-[clamp(24px,2.6vw,40px)]'

const padLeftPlusLine = 'lg:pl-[calc(clamp(24px,2.6vw,40px)+1px)]'
</script>

<template>
  <div>
    <div class="flex flex-col border-y border-line lg:min-h-[clamp(440px,50vw,620px)] lg:flex-row">
      <article
        v-for="service in services"
        :key="service.key"
        class="group flex min-w-0 flex-1 flex-col gap-4 overflow-clip border-t border-line first:border-t-0 hover:bg-surface focus-within:bg-surface motion-safe:transition-[flex-grow,background-color] motion-safe:duration-600 motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] lg:border-t-0 lg:border-l lg:first:border-l-0 lg:hover:grow-[1.7] lg:focus-within:grow-[1.7]"
        :class="[pad, insetFocusRing]"
        tabindex="0"
      >
        <span
          :class="markClass"
          aria-hidden="true"
        >{{ service.mark }}</span>
        <component
          :is="heading"
          class="lg:mt-auto"
          :class="[displayClass, titleClass]"
        >
          {{ service.title }}
        </component>
        <p class="m-0 text-[1rem] text-muted">
          {{ service.blurb }}
        </p>
        <ul class="m-0 grid list-none gap-1.5 p-0 text-[0.9375rem] font-medium">
          <li
            v-for="point in service.points"
            :key="point"
            :class="dotListItem"
          >
            {{ point }}
          </li>
        </ul>
      </article>
    </div>
    <article
      class="group grid grid-cols-1 items-center gap-4 border-b border-line hover:bg-surface focus-within:bg-surface motion-safe:transition-colors motion-safe:duration-300 lg:grid-cols-4 lg:gap-0 lg:p-0"
      :class="[pad, insetFocusRing]"
      tabindex="0"
    >
      <span
        class="lg:p-[clamp(24px,2.6vw,40px)]"
        :class="markClass"
        aria-hidden="true"
      >{{ ai.mark }}</span>
      <div
        class="lg:col-span-2 lg:py-[clamp(24px,2.6vw,40px)] lg:pr-[clamp(24px,2.6vw,40px)]"
        :class="padLeftPlusLine"
      >
        <component
          :is="heading"
          class="mb-2.5"
          :class="[displayClass, titleClass]"
        >
          {{ ai.title }}
        </component>
        <p class="m-0 max-w-[34rem] text-[1rem] text-muted">
          {{ ai.blurb }}
        </p>
      </div>
      <ul
        class="m-0 grid list-none gap-1.5 p-0 text-[0.9375rem] font-medium lg:py-[clamp(24px,2.6vw,40px)] lg:pr-[clamp(24px,2.6vw,40px)]"
        :class="padLeftPlusLine"
      >
        <li
          v-for="point in ai.points"
          :key="point"
          :class="dotListItem"
        >
          {{ point }}
        </li>
      </ul>
    </article>
  </div>
</template>
