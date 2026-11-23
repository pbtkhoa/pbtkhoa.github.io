<script setup lang="ts">
useSeoMeta({
  title: 'Page not found',
  robots: 'noindex',
})
</script>

<template>
  <ErrorView :code="404" />
</template>
