<script setup lang="ts">
withDefaults(defineProps<{ alt?: boolean }>(), { alt: false })
</script>

<template>
  <section
    class="band"
    :class="{ 'band-alt': alt }"
  >
    <div class="wrap">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.band {
  padding-block: 64px;
}

.band-alt {
  background: var(--color-bg-2);
}

@media (min-width: 900px) {
  .band {
    padding-block: 88px;
  }
}
</style>
