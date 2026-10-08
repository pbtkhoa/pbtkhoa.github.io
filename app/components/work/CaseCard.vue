<script setup lang="ts">
import { NuxtLink } from '#components'
import type { Project } from '~/data/site'

const props = withDefaults(defineProps<{
  project: Project
  to?: string
  layout?: 'row' | 'stack'
}>(), {
  to: undefined,
  layout: 'row',
})

const showHighlight = computed(() => Boolean(props.project.highlight) && props.layout === 'row')

const classes = computed(() => ({
  'case-link': Boolean(props.to),
  'case-stack': props.layout === 'stack',
}))
</script>

<template>
  <component
    :is="to ? NuxtLink : 'article'"
    :to="to"
    class="case"
    :class="classes"
  >
    <ProjectArt
      :kind="project.art"
      :tone="project.tone"
      class="case-art"
    />
    <div class="case-body">
      <p class="case-meta">
        {{ project.org }} · <span class="case-years">{{ project.years }}</span>
      </p>
      <h3 class="case-title">
        {{ project.title }}
      </h3>
      <p class="case-summary">
        {{ project.summary }}
      </p>
      <p
        v-if="showHighlight"
        class="case-highlight"
      >
        {{ project.highlight }}
      </p>
      <ul class="case-tags">
        <li
          v-for="tag in project.tags"
          :key="tag"
          class="case-tag"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </component>
</template>

<style scoped>
.case {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto 1fr;
  overflow: hidden;
  border-radius: var(--radius-panel);
  border: 1px solid var(--color-line);
  background: var(--color-card);
  color: var(--color-fg);
  text-decoration: none;
}

.case-link {
  transition: transform 0.25s, border-color 0.25s;
}

.case-link:hover {
  transform: translateY(-4px);
  border-color: var(--color-amber);
}

.case-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
}

.case-meta {
  margin: 0;
  color: var(--color-amber);
  font-weight: 600;
  font-size: 0.9rem;
}

.case-years {
  white-space: nowrap;
}

.case-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.4rem, 2.4vw, 1.8rem);
  line-height: 1.15;
  text-wrap: balance;
}

.case-stack .case-title {
  font-size: 1.35rem;
}

.case-summary {
  margin: 0;
  color: var(--color-muted);
}

.case-highlight {
  margin: 0;
  padding-left: 12px;
  border-left: 2px solid var(--color-amber);
  font-size: 0.92rem;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: auto 0 0;
  padding: 8px 0 0;
  list-style: none;
}

.case-tag {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--color-line);
  background: var(--color-bg-2);
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 600;
}

@media (min-width: 900px) {
  .case:not(.case-stack) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    grid-template-rows: auto;
  }

  .case:not(.case-stack) .case-body {
    justify-content: center;
    padding: 34px;
  }

  .case:not(.case-stack) .case-tags {
    margin-top: 6px;
  }

  .case:not(.case-stack):nth-child(even) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  }

  .case:not(.case-stack):nth-child(even) .case-art {
    order: 2;
  }
}
</style>
