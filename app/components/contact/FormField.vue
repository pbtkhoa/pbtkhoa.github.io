<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  label: string
  error?: string
}>(), {
  error: undefined,
})
</script>

<template>
  <div
    class="field"
    :class="{ 'field-invalid': error }"
  >
    <label
      :for="id"
      class="field-label"
    >{{ label }}</label>
    <slot />
    <p
      v-if="error"
      :id="`${id}-error`"
      class="field-error"
    >
      {{ error }}
    </p>
  </div>
</template>

<style scoped>
.field {
  display: grid;
  align-content: start;
  gap: 6px;
}

.field-label {
  font-weight: 600;
  font-size: 0.92rem;
}

.field :slotted(.field-control) {
  width: 100%;
  padding: 12px 14px;
  border-radius: var(--radius-field);
  border: 1px solid var(--color-line);
  background: var(--color-bg);
  color: var(--color-fg);
  font: inherit;
}

.field :slotted(.field-control:focus) {
  outline: 2px solid var(--color-amber);
  outline-offset: 1px;
}

.field :slotted(textarea.field-control) {
  resize: vertical;
  min-height: 140px;
}

.field-invalid :slotted(.field-control) {
  border-color: var(--color-error);
}

.field-error {
  margin: 0;
  color: var(--color-error);
  font-size: 0.85rem;
}
</style>
