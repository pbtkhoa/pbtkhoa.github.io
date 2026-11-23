<script setup lang="ts">
import type { FeaturedWork } from '~/data/site'

withDefaults(defineProps<{
  items: FeaturedWork[]
  level?: 2 | 3
}>(), {
  level: 3,
})

</script>

<template>
  <div class="border-b border-line">
    <article
      v-for="item in items"
      :key="item.title"
      class="grid items-center gap-[clamp(24px,4vw,72px)] border-t border-line py-[clamp(36px,4.6vw,72px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <div class="grid min-w-0 gap-4">
        <p class="m-0 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
          <span :class="labelClass">{{ item.org }}</span>
          <span class="text-[0.9375rem] font-medium text-muted tabular-nums">{{ item.years }}</span>
        </p>
        <component
          :is="`h${level}`"
          class="text-[clamp(1.9rem,3.1vw,3.1rem)] leading-[1.02]"
          :class="displayClass"
        >
          {{ item.title }}
        </component>
        <p class="m-0 max-w-[32rem] text-[clamp(1.0625rem,1.2vw,1.1875rem)] text-muted">
          {{ item.lede }}
        </p>
        <ul class="m-0 grid list-none gap-2 p-0 font-medium">
          <li
            v-for="point in item.built"
            :key="point"
            :class="dotListItem"
          >
            {{ point }}
          </li>
        </ul>
        <p
          v-if="item.note"
          class="m-0 text-[0.9375rem]"
        >
          {{ item.note }}
        </p>
        <p
          v-if="item.link"
          class="m-0 text-[0.9375rem]"
        >
          {{ item.link.before }}<a
            :href="item.link.href"
            :class="textLinkClass"
            target="_blank"
            rel="noopener"
          >{{ item.link.label }}</a>{{ item.link.after }}
        </p>
        <p class="m-0 text-[0.9375rem] text-muted">
          <b class="font-semibold text-fg">Built with</b> {{ item.stack }}
        </p>
      </div>
      <div
        class="relative grid min-h-[240px] min-w-0 place-items-center overflow-clip rounded-3xl bg-panel p-[clamp(22px,3.8vw,60px)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--color-dots)_1.2px,transparent_1.7px)] before:bg-[length:24px_24px] lg:min-h-[clamp(280px,34vw,500px)] lg:rounded-[28px]"
        aria-hidden="true"
      >
        <ArtFrame :art="item.art" />
      </div>
    </article>
  </div>
</template>
