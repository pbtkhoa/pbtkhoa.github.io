<script setup lang="ts">
const props = defineProps<{ clients: string[] }>()

const loop = computed(() => [...props.clients, ...props.clients])
const summary = computed(() => `Clients include ${props.clients.join(', ')}.`)
</script>

<template>
  <div class="group mt-16 overflow-hidden border-y border-line py-4.5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
    <p class="sr-only">
      {{ summary }}
    </p>
    <div
      class="flex w-max animate-marquee font-display text-[1.5rem] whitespace-nowrap text-muted group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      aria-hidden="true"
    >
      <span
        v-for="(client, index) in loop"
        :key="`${client}-${index}`"
        class="inline-flex items-center gap-12 pr-12"
      >
        {{ client }}
        <span class="text-[1rem] text-amber">✦</span>
      </span>
    </div>
  </div>
</template>
