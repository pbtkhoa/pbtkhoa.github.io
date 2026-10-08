<script setup lang="ts">
import { ArtLeads, ArtLedger, ArtPos, ArtSignin, ArtStore, ArtTimesheet, ArtTrading } from '#components'
import type { ProjectArt, ProjectTone } from '~/data/site'

const props = defineProps<{
  kind: ProjectArt
  tone: ProjectTone
}>()

const scenes = {
  store: ArtStore,
  ledger: ArtLedger,
  signin: ArtSignin,
  leads: ArtLeads,
  timesheet: ArtTimesheet,
  trading: ArtTrading,
  pos: ArtPos,
}

const tones: Record<ProjectTone, string> = {
  dusk: 'from-[#4a3f8c] to-[#c97a8e]',
  ocean: 'from-[#24305e] to-[#4a6fb8]',
  ember: 'from-[#5b3a6e] to-[#f4a93a]',
  forest: 'from-[#2f5e57] to-[#9cc3a4]',
  blossom: 'from-[#3a2a52] to-[#f2b5c4]',
  night: 'from-[#1c2140] to-[#6b6fb0]',
  meadow: 'from-[#1d3a12] to-[#8bc34a]',
}

const scene = computed(() => scenes[props.kind])
const isPhone = computed(() => props.kind === 'pos')
</script>

<template>
  <div
    class="grid place-items-center bg-linear-135/srgb p-[clamp(18px,4vw,32px)]"
    :class="tones[tone]"
    aria-hidden="true"
  >
    <div
      v-if="isPhone"
      class="relative w-[150px] overflow-hidden rounded-[26px] border-[5px] border-[#0d1020] bg-bg shadow-[0_24px_50px_-20px_#0009]"
    >
      <span class="absolute top-1 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-[#0d1020]" />
      <component
        :is="scene"
        class="block h-auto w-full"
      />
    </div>
    <div
      v-else
      class="w-[min(100%,440px)] overflow-hidden rounded-xl bg-bg shadow-[0_24px_50px_-20px_#0009]"
    >
      <div class="flex h-5.5 items-center gap-3 bg-bg-2 px-2.5">
        <span class="ml-px flex flex-none gap-[7px]">
          <span class="size-1.5 rounded-full bg-[#f26b6b]" />
          <span class="size-1.5 rounded-full bg-[#f4c04a]" />
          <span class="size-1.5 rounded-full bg-[#6bd17a]" />
        </span>
        <span class="h-2 max-w-40 flex-1 rounded-sm bg-line" />
      </div>
      <component
        :is="scene"
        class="block h-auto w-full"
      />
    </div>
  </div>
</template>
