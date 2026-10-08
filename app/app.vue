<script setup lang="ts">
useHead({
  titleTemplate: title => (title ? `${title} · Khoa Phạm` : 'Khoa Phạm · Full-stack software engineer'),
})

const { message, politeness } = useRouteAnnouncer()
const hydrated = shallowRef(false)

const announcement = computed(() => (hydrated.value ? message.value : ''))

onMounted(() => {
  hydrated.value = true
})
</script>

<template>
  <p
    class="sr-only"
    :aria-live="politeness"
    aria-atomic="true"
  >
    {{ announcement }}
  </p>
  <PageProgress />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
