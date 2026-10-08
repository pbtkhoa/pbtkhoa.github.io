<script setup lang="ts">
import { NuxtLink } from '#components'
import type { Service } from '~/data/site'

const props = withDefaults(defineProps<{
  service: Service
  to?: string
  detailed?: boolean
}>(), {
  to: undefined,
  detailed: false,
})

const anchorId = computed(() => (props.detailed ? props.service.key : undefined))
</script>

<template>
  <component
    :is="to ? NuxtLink : 'article'"
    :id="anchorId"
    :to="to"
    class="card"
    :class="{ 'card-link': to }"
  >
    <span
      class="lantern"
      aria-hidden="true"
    >{{ service.mark }}</span>
    <h3 class="heading-card">
      {{ service.title }}
    </h3>
    <p class="service-blurb">
      {{ service.blurb }}
    </p>
    <ul
      v-if="detailed"
      class="service-points"
    >
      <li
        v-for="point in service.points"
        :key="point"
        class="service-point"
      >
        {{ point }}
      </li>
    </ul>
  </component>
</template>

<style scoped>
.lantern {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: color-mix(in srgb, var(--color-amber) 20%, transparent);
  color: var(--color-amber);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
}

.service-blurb {
  margin: 0;
  color: var(--color-muted);
}

.service-points {
  display: grid;
  gap: 6px;
  margin: 6px 0 0;
  padding: 0;
  list-style: none;
}

.service-point {
  display: flex;
  gap: 10px;
  font-size: 0.95rem;
}

.service-point::before {
  content: "✦";
  color: var(--color-amber);
}
</style>
