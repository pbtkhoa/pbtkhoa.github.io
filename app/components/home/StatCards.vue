<script setup lang="ts">
import type { Stat } from '~/data/site'

defineProps<{ stats: Stat[] }>()
</script>

<template>
  <div class="wrap">
    <ul class="stats">
      <li
        v-for="stat in stats"
        :key="stat.label"
        class="stat"
      >
        <strong class="stat-value">{{ stat.value }}</strong>
        <span class="stat-label">{{ stat.label }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.stats {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin: -64px 0 0;
  padding: 0;
  list-style: none;
}

.stat {
  padding: 22px;
  border-radius: 22px;
  border: 1px solid var(--color-line);
  background: var(--color-card);
}

.stat-value {
  display: block;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.stat-label {
  display: block;
  margin-top: 8px;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (min-width: 900px) {
  .stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
