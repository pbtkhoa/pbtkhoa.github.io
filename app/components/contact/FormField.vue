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
  <div class="grid content-start gap-1.5">
    <label
      :for="id"
      class="text-[0.92rem] font-semibold"
    >{{ label }}</label>
    <slot />
    <p
      v-if="error"
      :id="`${id}-error`"
      class="m-0 text-[0.85rem] text-error"
    >
      {{ error }}
    </p>
  </div>
</template>
