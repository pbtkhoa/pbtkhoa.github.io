<script setup lang="ts">
withDefaults(defineProps<{ ground?: 'hill' | 'page' }>(), { ground: 'hill' })

const stars = [
  'top-[18%] left-[12%] size-[1.5px] bg-white/60',
  'top-[42%] left-[28%] size-px bg-white/55',
  'top-[14%] left-[66%] size-[1.5px] bg-white/65',
  'top-[36%] left-[82%] size-px bg-white/45',
  'top-[8%] left-[48%] size-px bg-white/55',
  'top-[12%] left-[92%] size-[1.5px] bg-white/60',
]

const hillPath = 'M0 80 C 200 20, 380 20, 560 60 S 920 110, 1100 50 S 1500 20, 1800 70 S 2300 30, 2800 60 L 2800 140 L 0 140 Z'
</script>

<template>
  <div class="relative overflow-hidden bg-linear-to-b/srgb from-sky-1 from-0% via-sky-2 via-62% to-sky-3 to-100%">
    <div
      class="absolute inset-0 light:opacity-0"
      aria-hidden="true"
    >
      <span
        v-for="star in stars"
        :key="star"
        class="absolute rounded-full"
        :class="star"
      />
    </div>
    <svg
      class="absolute -bottom-px left-[-5%] h-[120px] w-[2800px] max-w-none"
      viewBox="0 0 2800 120"
      aria-hidden="true"
      focusable="false"
    >
      <path
        :class="ground === 'hill' ? 'fill-hill' : 'fill-bg'"
        :d="hillPath"
      />
    </svg>
    <div class="relative z-1">
      <slot />
    </div>
  </div>
</template>
