<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

useSeoMeta({ title: () => `${props.error.statusCode === 404 ? 'Page not found' : 'Error'} | Khoa Pham` })
</script>

<template>
  <NuxtLayout>
    <ErrorView :code="error.statusCode ?? 500" />
  </NuxtLayout>
</template>
