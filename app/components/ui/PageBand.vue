<script setup lang="ts">
withDefaults(defineProps<{ alt?: boolean }>(), { alt: false })
</script>

<template>
  <section
    class="py-16 lg:py-22"
    :class="{ 'bg-bg-2': alt }"
  >
    <div :class="wrapClass">
      <slot />
    </div>
  </section>
</template>
