<script setup lang="ts">
import type { Engagement } from '~/data/site'

defineProps<{ engagements: Engagement[] }>()
</script>

<template>
  <ul class="models">
    <li
      v-for="engagement in engagements"
      :key="engagement.title"
      class="model"
      :class="{ 'model-featured': engagement.featured }"
    >
      <h3 class="heading-card">
        {{ engagement.title }}
      </h3>
      <p class="model-terms">
        {{ engagement.terms }}
      </p>
      <p class="model-text">
        {{ engagement.text }}
      </p>
    </li>
  </ul>
</template>

<style scoped>
.models {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.model {
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 28px;
  border-radius: var(--radius-card);
  border: 1px solid var(--color-line);
  background: var(--color-card);
}

.model-featured {
  border-color: transparent;
  background: linear-gradient(160deg, var(--color-violet), #2a2560);
  color: #ffffff;
}

.model-terms {
  margin: 0;
  color: var(--color-amber);
  font-family: var(--font-display);
  font-size: 1.1rem;
}

.model-featured .model-terms {
  color: #f4a93a;
}

.model-text {
  margin: 0;
  color: var(--color-muted);
}

.model-featured .model-text {
  color: #ddd8f5;
}

@media (min-width: 900px) {
  .models {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
