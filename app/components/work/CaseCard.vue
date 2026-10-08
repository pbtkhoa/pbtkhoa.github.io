<script setup lang="ts">
import { NuxtLink } from '#components'
import type { Project } from '~/data/site'

withDefaults(defineProps<{
  project: Project
  to?: string
}>(), {
  to: undefined,
})
</script>

<template>
  <component
    :is="to ? NuxtLink : 'article'"
    :to="to"
    class="case"
    :class="{ 'case-link': to }"
  >
    <div
      class="case-art"
      :class="`tone-${project.tone}`"
      aria-hidden="true"
    >
      <div class="case-window">
        <span class="case-window-bar" />
        <span class="case-window-body">
          <span class="case-block case-block-wide" />
          <span class="case-block" />
          <span class="case-block" />
          <span class="case-block" />
        </span>
      </div>
    </div>
    <div class="case-body">
      <p class="case-meta">
        {{ project.org }} · {{ project.years }}
      </p>
      <h3 class="case-title">
        {{ project.title }}
      </h3>
      <p class="case-summary">
        {{ project.summary }}
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

.case-art {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 220px;
  padding: 28px;
}

.case-window {
  display: grid;
  grid-template-rows: 22px 1fr;
  width: 86%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-bg);
  box-shadow: 0 24px 50px -20px #0009;
}

.case-window-bar {
  display: flex;
  align-items: center;
  padding-left: 10px;
  background: var(--color-bg-2);
}

.case-window-bar::before {
  content: "";
  width: 34px;
  height: 8px;
  background:
    radial-gradient(circle at 4px 4px, #f26b6b 3px, transparent 4px),
    radial-gradient(circle at 17px 4px, #f4c04a 3px, transparent 4px),
    radial-gradient(circle at 30px 4px, #6bd17a 3px, transparent 4px);
}

.case-window-body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
}

.case-block {
  border-radius: 6px;
  background: var(--color-bg-2);
}

.case-block-wide {
  grid-column: span 3;
  background: color-mix(in srgb, var(--color-amber) 30%, var(--color-bg-2));
}

.tone-dusk { background: linear-gradient(135deg, #4a3f8c, #c97a8e); }
.tone-ocean { background: linear-gradient(135deg, #24305e, #4a6fb8); }
.tone-ember { background: linear-gradient(135deg, #5b3a6e, #f4a93a); }
.tone-forest { background: linear-gradient(135deg, #2f5e57, #9cc3a4); }
.tone-blossom { background: linear-gradient(135deg, #3a2a52, #f2b5c4); }
.tone-night { background: linear-gradient(135deg, #1c2140, #6b6fb0); }

.case-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px;
}

.case-meta {
  margin: 0;
  color: var(--color-amber);
  font-weight: 600;
  font-size: 0.9rem;
}

.case-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(1.5rem, 2.4vw, 1.8rem);
  line-height: 1.15;
}

.case-summary {
  margin: 0;
  color: var(--color-muted);
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
  .case {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .case-art {
    min-height: 260px;
  }

  .case-body {
    padding: 34px;
  }

  .case:nth-child(even) .case-art {
    order: 2;
  }
}
</style>
