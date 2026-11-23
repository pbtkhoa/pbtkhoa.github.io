<script setup lang="ts">
type IconName = 'menu' | 'close'

defineProps<{ name: IconName }>()

const paths: Record<IconName, string> = {
  menu: 'M4 8h16M4 16h16',
  close: 'M6 6l12 12M18 6 6 18',
}
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="paths[name]" />
  </svg>
</template>
