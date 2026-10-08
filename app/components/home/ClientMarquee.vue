<script setup lang="ts">
const props = defineProps<{ clients: string[] }>()

const loop = computed(() => [...props.clients, ...props.clients])
const summary = computed(() => `Clients include ${props.clients.join(', ')}.`)
</script>

<template>
  <div class="marquee">
    <p class="sr-only">
      {{ summary }}
    </p>
    <div
      class="marquee-track"
      aria-hidden="true"
    >
      <span
        v-for="(client, index) in loop"
        :key="`${client}-${index}`"
        class="marquee-item"
      >{{ client }}</span>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  overflow: hidden;
  margin-top: 64px;
  padding-block: 18px;
  border-block: 1px solid var(--color-line);
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  color: var(--color-muted);
  font-family: var(--font-display);
  font-size: 1.5rem;
  white-space: nowrap;
  animation: marquee-slide 40s linear infinite;
}

.marquee:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-item {
  padding-right: 48px;
}

.marquee-item::after {
  content: "✦";
  margin-left: 48px;
  color: var(--color-amber);
  font-size: 1rem;
  vertical-align: middle;
}

@keyframes marquee-slide {
  to {
    transform: translateX(-50%);
  }
}
</style>
