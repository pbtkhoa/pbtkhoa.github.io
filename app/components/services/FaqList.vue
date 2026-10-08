<script setup lang="ts">
import type { Faq } from '~/data/site'

defineProps<{ items: Faq[] }>()
</script>

<template>
  <div class="faq">
    <details
      v-for="(item, index) in items"
      :key="item.question"
      class="faq-item"
      :open="index === 0"
    >
      <summary class="faq-question">
        {{ item.question }}
      </summary>
      <p class="faq-answer">
        {{ item.answer }}
      </p>
    </details>
  </div>
</template>

<style scoped>
.faq {
  display: grid;
  gap: 10px;
}

.faq-item {
  padding: 18px 22px;
  border-radius: var(--radius-tile);
  border: 1px solid var(--color-line);
  background: var(--color-card);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-weight: 600;
  list-style: none;
  cursor: pointer;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question::after {
  content: "+";
  color: var(--color-amber);
  font-size: 1.3rem;
  line-height: 1;
}

.faq-item[open] .faq-question::after {
  content: "–";
}

.faq-answer {
  margin: 10px 0 0;
  color: var(--color-muted);
}
</style>
