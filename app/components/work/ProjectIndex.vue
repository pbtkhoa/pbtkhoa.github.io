<script setup lang="ts">
import { projectCategoryLabels } from '~/data/site'
import type { ProjectEntry } from '~/data/site'

defineProps<{ projects: ProjectEntry[] }>()
</script>

<template>
  <ul class="index">
    <li
      v-for="project in projects"
      :key="project.title"
      class="index-row"
    >
      <div class="index-where">
        <span class="index-org">{{ project.org }}</span>
        <span
          v-if="project.years"
          class="index-years"
        >{{ project.years }}</span>
        <span class="index-category">{{ projectCategoryLabels[project.category] }}</span>
      </div>
      <div class="index-main">
        <h3 class="index-title">
          {{ project.title }}
        </h3>
        <p class="index-summary">
          {{ project.summary }}
        </p>
      </div>
      <div class="index-side">
        <ul class="index-tags">
          <li
            v-for="tag in project.tags"
            :key="tag"
            class="index-tag"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.index {
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-line);
  background: var(--color-card);
}

.index-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
  padding: 18px 22px;
}

.index-row + .index-row {
  border-top: 1px solid var(--color-line);
}

.index-where {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 10px;
  font-size: 0.9rem;
}

.index-org {
  color: var(--color-amber);
  font-weight: 600;
}

.index-years {
  color: var(--color-muted);
  font-variant-numeric: tabular-nums;
}

.index-main {
  min-width: 0;
}

.index-title {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.25;
}

.index-summary {
  margin: 2px 0 0;
  color: var(--color-muted);
  font-size: 0.95rem;
}

.index-side {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.index-category {
  justify-self: start;
  padding: 2px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-amber) 10%, transparent);
  color: var(--color-amber);
  font-size: 0.78rem;
  font-weight: 700;
}

.index-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.index-tag {
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid var(--color-line);
  color: var(--color-muted);
  font-size: 0.78rem;
  font-weight: 600;
}

@media (min-width: 900px) {
  .index-row {
    grid-template-columns: 160px minmax(0, 1fr) minmax(0, 300px);
    align-items: start;
    gap: 24px;
    padding: 20px 26px;
  }

  .index-where {
    display: grid;
    gap: 2px;
    padding-top: 3px;
  }

  .index-category {
    margin-top: 6px;
  }

  .index-tags {
    justify-content: flex-end;
    padding-top: 3px;
  }
}
</style>
