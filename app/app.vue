<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} · Khoa Phạm` : 'Khoa Phạm · Full-stack software engineer'),
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
