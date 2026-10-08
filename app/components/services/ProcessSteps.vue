<script setup lang="ts">
import type { ProcessStep } from '~/data/site'

defineProps<{ steps: ProcessStep[] }>()
</script>

<template>
  <ol class="process">
    <li
      v-for="(step, index) in steps"
      :key="step.title"
      class="step"
    >
      <span
        class="step-number"
        aria-hidden="true"
      >{{ index + 1 }}</span>
      <h3 class="step-title">
        {{ step.title }}
      </h3>
      <p class="step-text">
        {{ step.text }}
      </p>
    </li>
  </ol>
</template>

<style scoped>
.process {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.step {
  position: relative;
  padding-top: 56px;
}

.step-number {
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-amber);
  color: var(--color-amber-ink);
  font-weight: 700;
}

.step-title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 600;
}

.step-text {
  margin: 6px 0 0;
  color: var(--color-muted);
  font-size: 0.95rem;
}

@media (min-width: 900px) {
  .process {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 18px;
  }

  .step:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 20px;
    left: 52px;
    right: -10px;
    border-top: 2px dashed var(--color-line);
  }
}
</style>
