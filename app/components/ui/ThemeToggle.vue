<script setup lang="ts">
const { theme, toggle } = useTheme()

const label = computed(() => (theme.value === 'light' ? 'Switch to night theme' : 'Switch to day theme'))
</script>

<template>
  <button
    type="button"
    class="grid size-10 cursor-pointer place-items-center rounded-full border border-line bg-card text-fg hover:border-amber motion-safe:transition-colors"
    :class="focusRing"
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
