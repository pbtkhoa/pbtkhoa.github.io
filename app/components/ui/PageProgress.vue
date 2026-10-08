<script setup lang="ts">
const { progress, isLoading, error } = useLoadingIndicator()

const glowBar = '[&::-webkit-progress-value]:bg-linear-to-r [&::-webkit-progress-value]:from-sakura [&::-webkit-progress-value]:to-amber [&::-moz-progress-bar]:bg-linear-to-r [&::-moz-progress-bar]:from-sakura [&::-moz-progress-bar]:to-amber drop-shadow-[0_0_6px_var(--color-amber)]'
const errorBar = '[&::-webkit-progress-value]:bg-error [&::-moz-progress-bar]:bg-error drop-shadow-[0_0_6px_var(--color-error)]'
</script>

<template>
  <progress
    class="pointer-events-none fixed inset-x-0 top-0 z-30 block h-[3px] w-full appearance-none border-0 bg-transparent transition-opacity duration-300 [&::-webkit-progress-bar]:bg-transparent"
    :class="[error ? errorBar : glowBar, isLoading ? 'opacity-100' : 'opacity-0']"
    max="100"
    :value="progress"
    aria-hidden="true"
  />
</template>
