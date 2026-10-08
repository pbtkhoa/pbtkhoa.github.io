<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  size: number
  alt: string
  sizes?: string
  priority?: boolean
  eager?: boolean
}>(), {
  sizes: undefined,
  priority: false,
  eager: false,
})

const SOURCE = '/images/khoa.jpg'
const AVIF_QUALITY = 50
const WEBP_QUALITY = 75

const image = useImage()

function variant(format: 'avif' | 'webp', quality: number) {
  return image.getSizes(SOURCE, {
    sizes: props.sizes,
    densities: 'x1 x2',
    modifiers: { format, quality, width: props.size, height: props.size },
  })
}

const avif = computed(() => variant('avif', AVIF_QUALITY))
const webp = computed(() => variant('webp', WEBP_QUALITY))
const loading = computed(() => (props.priority || props.eager ? 'eager' : 'lazy'))

if (props.priority) {
  useHead({
    link: [{
      rel: 'preload',
      as: 'image',
      type: 'image/avif',
      fetchpriority: 'high',
      imagesrcset: avif.value.srcset,
      imagesizes: avif.value.sizes || undefined,
    }],
  })
}
</script>

<template>
  <picture class="contents">
    <source
      type="image/avif"
      :srcset="avif.srcset"
      :sizes="avif.sizes || undefined"
    >
    <img
      v-bind="$attrs"
      :src="webp.src"
      :srcset="webp.srcset"
      :sizes="webp.sizes || undefined"
      :width="size"
      :height="size"
      :alt="alt"
      :loading="loading"
      :fetchpriority="priority ? 'high' : undefined"
      :decoding="priority ? undefined : 'async'"
    >
  </picture>
</template>
