<script setup lang="ts">
const { progress, isLoading, error } = useLoadingIndicator()

const loadBar = '[&::-webkit-progress-value]:bg-accent [&::-moz-progress-bar]:bg-accent'
const errorBar = '[&::-webkit-progress-value]:bg-error [&::-moz-progress-bar]:bg-error'
</script>

<template>
  <div
    class="pointer-events-none fixed inset-x-0 top-0 z-40 h-[3px] origin-left bg-accent [transform:scaleX(0)] sfx:animate-grow sfx:[animation-timeline:scroll(root)]"
    aria-hidden="true"
  />
  <progress
    class="pointer-events-none fixed inset-x-0 top-0 z-50 block h-[3px] w-full appearance-none border-0 bg-transparent transition-opacity duration-300 [&::-webkit-progress-bar]:bg-transparent"
    :class="[error ? errorBar : loadBar, isLoading ? 'opacity-100' : 'opacity-0']"
    max="100"
    :value="progress"
    aria-hidden="true"
  />
</template>
