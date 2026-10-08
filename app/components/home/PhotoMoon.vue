<script setup lang="ts">
defineProps<{
  label: string
  stack: string
}>()
</script>

<template>
  <div class="relative order-first aspect-square w-[min(300px,74vw)] justify-self-center lg:order-none lg:w-[min(420px,100%)]">
    <div
      class="absolute -inset-[18%] rounded-full bg-radial/srgb from-amber/45 to-transparent to-62%"
      aria-hidden="true"
    />
    <KhoaPhoto
      :size="460"
      densities="x1"
      alt="Photo of Khoa smiling"
      class="relative size-full rounded-full border-8 border-white/85 object-cover shadow-[0_30px_80px_-20px_#0008]"
      priority
    />
    <p class="absolute bottom-[10%] left-[-4%] m-0 grid rounded-tile bg-card px-4 py-2.5 text-[0.85rem] text-fg shadow-[0_16px_40px_-12px_#0007]">
      <span>{{ label }}</span>
      <strong class="font-display text-[1.15rem] font-semibold">{{ stack }}</strong>
    </p>
  </div>
</template>
