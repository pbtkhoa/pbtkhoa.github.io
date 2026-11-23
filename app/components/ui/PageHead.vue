<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  title: string
  text?: string
}>(), {
  text: undefined,
})
</script>

<template>
  <div class="grid gap-5 pt-[calc(68px+clamp(48px,7vw,112px))] pb-[clamp(28px,3vw,48px)]">
    <p :class="labelClass">
      {{ label }}
    </p>
    <h1
      class="max-w-[18ch] text-[clamp(2.6rem,6.4vw,6rem)] leading-[0.98]"
      :class="displayClass"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </h1>
    <p
      v-if="text"
      class="m-0 max-w-[40rem] text-[clamp(1.0625rem,1.3vw,1.25rem)] text-muted"
    >
      {{ text }}
    </p>
    <slot />
  </div>
</template>
