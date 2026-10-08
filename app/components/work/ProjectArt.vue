<script setup lang="ts">
import { ArtLeads, ArtLedger, ArtSignin, ArtStore, ArtTimesheet, ArtTrading } from '#components'
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
}

const scene = computed(() => scenes[props.kind])
</script>

<template>
  <div
    class="art"
    :class="`tone-${tone}`"
    aria-hidden="true"
  >
    <div class="art-window">
      <div class="art-bar">
        <span class="art-dots" />
        <span class="art-url" />
      </div>
      <component
        :is="scene"
        class="art-scene"
      />
    </div>
  </div>
</template>

<style scoped>
.art {
  display: grid;
  place-items: center;
  padding: clamp(18px, 4vw, 32px);
}

.art-window {
  width: min(100%, 440px);
  overflow: hidden;
  border-radius: 12px;
  background: var(--color-bg);
  box-shadow: 0 24px 50px -20px #0009;
}

.art-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 22px;
  padding-inline: 10px;
  background: var(--color-bg-2);
}

.art-dots {
  flex: none;
  width: 34px;
  height: 8px;
  background:
    radial-gradient(circle at 4px 4px, #f26b6b 3px, transparent 4px),
    radial-gradient(circle at 17px 4px, #f4c04a 3px, transparent 4px),
    radial-gradient(circle at 30px 4px, #6bd17a 3px, transparent 4px);
}

.art-url {
  flex: 1;
  max-width: 160px;
  height: 8px;
  border-radius: 4px;
  background: var(--color-line);
}

.art-scene {
  display: block;
  width: 100%;
  height: auto;
}

.art-scene :deep(.f-bg) { fill: var(--color-bg); }
.art-scene :deep(.f-panel) { fill: var(--color-bg-2); }
.art-scene :deep(.f-card) { fill: var(--color-card); }
.art-scene :deep(.f-line) { fill: var(--color-line); }
.art-scene :deep(.f-muted) { fill: color-mix(in srgb, var(--color-muted) 55%, transparent); }
.art-scene :deep(.f-strong) { fill: color-mix(in srgb, var(--color-fg) 80%, transparent); }
.art-scene :deep(.f-accent) { fill: var(--color-amber); }
.art-scene :deep(.f-accent-soft) { fill: color-mix(in srgb, var(--color-amber) 28%, transparent); }
.art-scene :deep(.f-on-accent) { fill: var(--color-amber-ink); }
.art-scene :deep(.f-on-accent-soft) { fill: color-mix(in srgb, var(--color-amber-ink) 55%, transparent); }
.art-scene :deep(.s-on-accent) { stroke: var(--color-amber-ink); stroke-width: 1.6; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.art-scene :deep(.f-violet) { fill: color-mix(in srgb, var(--color-violet) 85%, var(--color-sakura)); }
.art-scene :deep(.f-ok) { fill: var(--color-ok); }
.art-scene :deep(.f-ok-soft) { fill: color-mix(in srgb, var(--color-ok) 30%, transparent); }
.art-scene :deep(.f-down) { fill: var(--color-sakura); }
.art-scene :deep(.f-down-soft) { fill: color-mix(in srgb, var(--color-sakura) 35%, transparent); }
.art-scene :deep(.s-line) { stroke: var(--color-line); stroke-width: 1; }
.art-scene :deep(.s-line-strong) { stroke: var(--color-muted); stroke-width: 1.5; fill: none; }
.art-scene :deep(.s-strong) { stroke: color-mix(in srgb, var(--color-fg) 80%, transparent); stroke-width: 1.6; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.art-scene :deep(.s-accent) { stroke: var(--color-amber); stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.art-scene :deep(.f-card.s-accent) { fill: var(--color-card); }
.art-scene :deep(.s-ok) { stroke: var(--color-ok); stroke-width: 1.2; }
.art-scene :deep(.s-down) { stroke: var(--color-sakura); stroke-width: 1.2; }
.art-scene :deep(.s-on-ok) { stroke: var(--color-bg); stroke-width: 1.8; fill: none; stroke-linecap: round; stroke-linejoin: round; }
.art-scene :deep(.dashed) { stroke-dasharray: 3 4; }

.tone-dusk { background: linear-gradient(135deg, #4a3f8c, #c97a8e); }
.tone-ocean { background: linear-gradient(135deg, #24305e, #4a6fb8); }
.tone-ember { background: linear-gradient(135deg, #5b3a6e, #f4a93a); }
.tone-forest { background: linear-gradient(135deg, #2f5e57, #9cc3a4); }
.tone-blossom { background: linear-gradient(135deg, #3a2a52, #f2b5c4); }
.tone-night { background: linear-gradient(135deg, #1c2140, #6b6fb0); }
</style>
