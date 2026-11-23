<script setup lang="ts">
const { theme, toggle } = useTheme()

const label = computed(() => (theme.value === 'light' ? 'Switch to dark theme' : 'Switch to light theme'))
</script>

<template>
  <button
    type="button"
    class="grid size-11 cursor-pointer place-items-center rounded-xl border border-line bg-surface p-0 text-fg"
    :class="focusRing"
    :aria-label="label"
    :title="label"
    @click="toggle"
  >
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="12"
        cy="12"
        r="8"
      />
      <path
        d="M12 4a8 8 0 0 0 0 16z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>
