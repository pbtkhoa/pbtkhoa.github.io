<script setup lang="ts">
import { projectCategoryLabels } from '~/data/site'
import type { ProjectEntry } from '~/data/site'

defineProps<{ projects: ProjectEntry[] }>()
</script>

<template>
  <ul class="m-0 list-none rounded-card border border-line bg-card p-0">
    <li
      v-for="project in projects"
      :key="project.title"
      class="grid grid-cols-1 gap-2 border-line px-5.5 py-4.5 not-first:border-t lg:grid-cols-[160px_minmax(0,1fr)_minmax(0,300px)] lg:items-start lg:gap-6 lg:px-6.5 lg:py-5"
    >
      <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.9rem] lg:grid lg:gap-0.5 lg:pt-0.75">
        <span class="font-semibold text-amber">{{ project.org }}</span>
        <span
          v-if="project.years"
          class="text-muted tabular-nums"
        >{{ project.years }}</span>
        <span class="justify-self-start rounded-full bg-amber/10 px-2.5 py-0.5 text-[0.78rem] font-bold text-amber lg:mt-1.5">{{ projectCategoryLabels[project.category] }}</span>
      </div>
      <div class="min-w-0">
        <h3 class="m-0 font-display text-[1.2rem] leading-[1.25] font-semibold">
          {{ project.title }}
        </h3>
        <p class="mt-0.5 mb-0 text-[0.95rem] text-muted">
          {{ project.summary }}
        </p>
      </div>
      <ul class="m-0 flex list-none flex-wrap gap-1.5 p-0 lg:pt-0.75">
        <li
          v-for="tag in project.tags"
          :key="tag"
          class="rounded-full border border-line px-2.5 py-0.75 text-[0.78rem] font-semibold text-muted"
        >
          {{ tag }}
        </li>
      </ul>
    </li>
  </ul>
</template>
