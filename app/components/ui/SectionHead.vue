<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  headingId?: string
  text?: string
  linkTo?: string
  linkLabel?: string
}>(), {
  headingId: undefined,
  text: undefined,
  linkTo: undefined,
  linkLabel: undefined,
})
</script>

<template>
  <div class="grid items-end gap-6 pt-[clamp(72px,9vw,140px)] pb-[clamp(28px,3vw,48px)] lg:grid-cols-[1fr_auto]">
    <h2
      :id="headingId"
      :class="sectionTitleClass"
    >
      {{ title }}
    </h2>
    <div
      v-if="text || linkTo"
      class="grid max-w-[28rem] gap-2.5"
    >
      <p
        v-if="text"
        class="m-0 text-[1.0625rem] text-muted"
      >
        {{ text }}
      </p>
      <p
        v-if="linkTo"
        class="m-0"
      >
        <NuxtLink
          :to="linkTo"
          :class="textLinkClass"
        >
          {{ linkLabel }}
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
