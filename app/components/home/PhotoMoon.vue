<script setup lang="ts">
defineProps<{ badge: string }>()
</script>

<template>
  <div class="relative order-first aspect-square w-[min(300px,74vw)] justify-self-center lg:order-none lg:w-[min(420px,100%)]">
    <div
      class="absolute -inset-[18%] rounded-full bg-radial/srgb from-amber/45 to-transparent to-62%"
      aria-hidden="true"
    />
    <KhoaPhoto
      :size="420"
      sizes="300px 900:420px"
      alt="Photo of Khoa smiling"
      class="relative size-full rounded-full border-8 border-white/85 object-cover shadow-[0_30px_80px_-20px_#0008]"
      priority
    />
    <p class="absolute bottom-[10%] left-[-4%] m-0 rounded-tile bg-card px-5 py-3 font-display text-[clamp(1.25rem,2.2vw,1.5rem)] leading-tight font-semibold whitespace-nowrap text-fg shadow-[0_16px_40px_-12px_#0007]">
      {{ badge }}
    </p>
  </div>
</template>
