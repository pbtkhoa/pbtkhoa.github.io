<script setup lang="ts">
defineProps<{ clients: string[] }>()

const listClass = 'm-0 flex list-none gap-14 px-7 py-0'
const itemClass = 'font-display text-[clamp(1.3rem,2.2vw,1.9rem)] font-bold tracking-[-0.035em] whitespace-nowrap text-fg'
</script>

<template>
  <section
    class="overflow-clip border-y border-line bg-surface py-6"
    aria-label="Clients"
  >
    <div class="flex w-max motion-safe:animate-marquee">
      <ul :class="listClass">
        <li
          v-for="client in clients"
          :key="client"
          :class="itemClass"
        >
          {{ client }}
        </li>
      </ul>
      <ul
        :class="listClass"
        aria-hidden="true"
      >
        <li
          v-for="client in clients"
          :key="client"
          :class="itemClass"
        >
          {{ client }}
        </li>
      </ul>
    </div>
  </section>
</template>
