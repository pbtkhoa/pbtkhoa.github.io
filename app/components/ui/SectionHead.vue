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
  <div class="section-head">
    <div>
      <p class="kicker section-kicker">
        {{ kicker }}
      </p>
      <component
        :is="`h${level}`"
        class="heading-display"
      >
        {{ title }}
      </component>
      <p
        v-if="text"
        class="section-text"
      >
        {{ text }}
      </p>
    </div>
    <slot name="action" />
  </div>
</template>

<style scoped>
.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.section-kicker {
  margin: 0;
}

.section-text {
  color: var(--color-muted);
  max-width: 48ch;
  margin: 10px 0 0;
}
</style>
