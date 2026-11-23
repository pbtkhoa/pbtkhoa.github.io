<script setup lang="ts">
const props = defineProps<{ code: number }>()

const notFound = computed(() => props.code === 404)
const title = computed(() => (notFound.value ? 'This page is not on the wall.' : 'Something went wrong on my side.'))
const text = computed(() => (notFound.value
  ? 'The link may be old or mistyped. The rest of the site is right where you left it.'
  : 'Try again in a moment, or write to me and I\'ll look into it.'))
</script>

<template>
  <div
    class="grid min-h-[80dvh] content-center gap-6 pt-[calc(68px+48px)] pb-24"
    :class="wrapClass"
  >
    <p :class="labelClass">
      Error {{ code }}
    </p>
    <h1
      class="max-w-[16ch] text-[clamp(2.6rem,6.4vw,6rem)] leading-[0.98]"
      :class="displayClass"
    >
      {{ title }}
    </h1>
    <p class="m-0 max-w-[40rem] text-[clamp(1.0625rem,1.3vw,1.25rem)] text-muted">
      {{ text }}
    </p>
    <div class="flex flex-wrap gap-3">
      <AppButton
        to="/"
        variant="accent"
      >
        Back to home
      </AppButton>
      <AppButton to="/contact">
        Contact me
      </AppButton>
    </div>
  </div>
</template>
