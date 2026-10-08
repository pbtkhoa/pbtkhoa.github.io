<script setup lang="ts">
withDefaults(defineProps<{
  size: number
  alt: string
  priority?: boolean
  densities?: string
}>(), {
  priority: false,
  densities: 'x1 x2',
})
</script>

<template>
  <NuxtImg
    src="/images/khoa.jpg"
    format="webp"
    :width="size"
    :height="size"
    :alt="alt"
    :densities="densities"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : 'auto'"
    :preload="priority"
    decoding="async"
  />
</template>
