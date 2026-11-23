<script setup lang="ts">
import type { ArtKey } from '~/data/site'

const props = defineProps<{ art: ArtKey }>()

const src = computed(() => usePublicUrl(`/art/${props.art}.svg`))
const phone = computed(() => props.art === 'pos')
</script>

<template>
  <div
    v-if="phone"
    class="relative w-[min(42%,230px)] overflow-clip rounded-[30px] border-6 border-frame-edge shadow-[0_30px_70px_-26px_#000b]"
    :class="scrollRise"
  >
    <img
      :src="src"
      alt=""
      width="180"
      height="360"
      loading="lazy"
      decoding="async"
      class="block h-auto w-full"
    >
  </div>
  <div
    v-else
    class="relative w-[min(100%,720px)] overflow-clip rounded-[14px] bg-frame shadow-[0_30px_70px_-26px_#000b]"
    :class="scrollRise"
  >
    <div class="flex h-6.5 items-center gap-[7px] bg-frame-bar px-3">
      <span class="size-[7px] rounded-full bg-win-red" />
      <span class="size-[7px] rounded-full bg-win-yellow" />
      <span class="size-[7px] rounded-full bg-win-green" />
      <span class="ml-2.5 h-2 w-2/5 rounded-sm bg-frame-url" />
    </div>
    <img
      :src="src"
      alt=""
      width="320"
      height="180"
      loading="lazy"
      decoding="async"
      class="block h-auto w-full"
    >
  </div>
</template>
