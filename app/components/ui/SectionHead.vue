<script setup lang="ts">
withDefaults(defineProps<{
  kicker: string
  title: string
  text?: string
  level?: 1 | 2
}>(), {
  text: undefined,
  level: 2,
})
</script>

<template>
  <div class="mb-9 flex flex-wrap items-end justify-between gap-5">
    <div>
      <p :class="kickerClass">
        {{ kicker }}
      </p>
      <component
        :is="`h${level}`"
        :class="displayHeadingClass"
      >
        {{ title }}
      </component>
      <p
        v-if="text"
        class="mt-2.5 mb-0 max-w-[48ch] text-muted"
      >
        {{ text }}
      </p>
    </div>
    <slot name="action" />
  </div>
</template>
