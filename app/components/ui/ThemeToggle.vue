<script setup lang="ts">
const { theme, toggle } = useTheme()

const label = computed(() => (theme.value === 'light' ? 'Switch to night theme' : 'Switch to day theme'))
</script>

<template>
  <button
    type="button"
    class="icon-btn"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <AppIcon
      name="moon"
      class="light:hidden"
    />
    <AppIcon
      name="sun"
      class="hidden light:block"
    />
  </button>
</template>
