<script setup lang="ts">
import { NuxtLink } from '#components'
import type { Project } from '~/data/site'

const props = withDefaults(defineProps<{
  project: Project
  to?: string
  layout?: 'row' | 'stack'
  headingLevel?: 2 | 3
}>(), {
  to: undefined,
  layout: 'row',
  headingLevel: 3,
})

const isRow = computed(() => props.layout === 'row')
const showHighlight = computed(() => Boolean(props.project.highlight) && isRow.value)
const showLink = computed(() => Boolean(props.project.link) && !props.to)

const rootClass = computed(() => [
  isRow.value ? 'lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:grid-rows-[auto] lg:even:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]' : '',
  props.to ? `${liftOnHover} ${focusRing}` : '',
])
</script>

<template>
  <component
    :is="to ? NuxtLink : 'article'"
    :to="to"
    class="group grid scroll-mt-24 grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-panel border border-line bg-card text-fg no-underline"
    :class="rootClass"
  >
    <ProjectArt
      :kind="project.art"
      :tone="project.tone"
      :class="isRow ? 'lg:group-even:order-2' : ''"
    />
    <div
      class="flex flex-col gap-2.5 p-6"
      :class="isRow ? 'lg:justify-center lg:p-8.5' : ''"
    >
      <p class="m-0 text-[0.9rem] font-semibold text-amber">
        {{ project.org }} · <span class="whitespace-nowrap">{{ project.years }}</span>
      </p>
      <component
        :is="`h${headingLevel}`"
        class="m-0 font-display leading-[1.15] font-semibold text-balance"
        :class="isRow ? 'text-[clamp(1.4rem,2.4vw,1.8rem)]' : 'text-[1.35rem]'"
      >
        {{ project.title }}
      </component>
      <p class="m-0 text-muted">
        {{ project.summary }}
      </p>
      <p
        v-if="showHighlight"
        class="m-0 border-l-2 border-amber pl-3 text-[0.92rem]"
      >
        {{ project.highlight }}
      </p>
      <a
        v-if="showLink && project.link"
        :href="project.link.href"
        class="self-start text-[0.92rem] font-semibold"
        :class="textLinkClass"
      >
        {{ project.link.label }}
        <span aria-hidden="true">↗</span>
      </a>
      <ul
        class="mb-0 flex list-none flex-wrap gap-1.5 p-0 pt-2"
        :class="isRow ? 'mt-auto lg:mt-1.5' : 'mt-auto'"
      >
        <li
          v-for="tag in project.tags"
          :key="tag"
          :class="pillTagClass"
          class="bg-bg-2"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </component>
</template>
