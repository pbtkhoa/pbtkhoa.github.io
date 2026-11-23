<script setup lang="ts">
import { site } from '~/data/site'
import type { ArtKey } from '~/data/site'

interface Tile {
  key: ArtKey
  delay: string
}

const NAMES: Record<ArtKey, string> = {
  store: 'Shopware store',
  ledger: 'cybooks',
  signin: 'GLS Bank sign-on',
  leads: 'Thermomix leads',
  timesheet: 'Time tracking',
  pos: 'PosBill Mobile',
  trading: 'CHIP trading',
}

const ORDER: ArtKey[][] = [
  ['store', 'pos', 'ledger', 'signin'],
  ['leads', 'timesheet', 'store', 'trading'],
  ['ledger', 'signin', 'pos', 'leads'],
  ['trading', 'store', 'timesheet', 'ledger'],
  ['signin', 'leads', 'trading', 'pos'],
]

const REPEAT = 4
const MAX_ROW_STEP = 6

const TILE_DELAYS = ['[--d:250ms]', '[--d:305ms]', '[--d:360ms]', '[--d:415ms]', '[--d:470ms]', '[--d:525ms]', '[--d:580ms]', '[--d:635ms]', '[--d:690ms]', '[--d:745ms]', '[--d:800ms]', '[--d:855ms]', '[--d:910ms]', '[--d:965ms]', '[--d:1020ms]']

const WORD_DELAYS = ['[--d:100ms]', '[--d:145ms]', '[--d:190ms]', '[--d:235ms]', '[--d:280ms]', '[--d:325ms]', '[--d:370ms]', '[--d:415ms]', '[--d:460ms]', '[--d:505ms]', '[--d:550ms]', '[--d:595ms]', '[--d:640ms]']

const ART_SIZE: Record<'browser' | 'phone', { width: number, height: number }> = {
  browser: { width: 320, height: 180 },
  phone: { width: 180, height: 360 },
}

const artUrls = Object.fromEntries(
  (Object.keys(NAMES) as ArtKey[]).map(key => [key, usePublicUrl(`/art/${key}.svg`)]),
) as Record<ArtKey, string>

const columns: Tile[][] = ORDER.map((list, column) => Array.from({ length: REPEAT }, () => list).flat().map((key, row) => ({
  key,
  delay: TILE_DELAYS[column * 2 + Math.min(row, MAX_ROW_STEP)] ?? '',
})))

const words = site.headline.split(' ').map((text, index) => ({
  text,
  delay: WORD_DELAYS[index] ?? '',
  highlight: (site.highlights as readonly string[]).includes(text),
}))

const scrollLinked = 'sfx:lg:[animation-timeline:--hero]'

const panelClass = `relative mx-[max(16px,4vw)] h-[52svh] min-h-[330px] overflow-clip bg-panel perspective-[1500px] [clip-path:inset(0_round_24px)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--color-dots)_1.2px,transparent_1.7px)] before:bg-[length:24px_24px] lg:absolute lg:inset-0 lg:m-0 lg:h-auto lg:min-h-0 lg:[clip-path:inset(84px_16px_16px_47%_round_32px)] sfx:lg:animate-open sfx:lg:[animation-range:contain_12%_contain_62%] ${scrollLinked}`

const stageClass = 'absolute inset-x-0 -top-[15%] -bottom-[15%] grid transform-3d [place-content:unsafe_center] [place-items:unsafe_center] [transform:rotateY(calc(var(--tx,0)*6deg))_rotateX(calc(var(--ty,0)*-5deg))] motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-[cubic-bezier(.2,.8,.2,1)] lg:right-auto lg:-top-[12%] lg:-bottom-[12%] lg:left-[47%] lg:w-[53%]'

const wallClass = `flex gap-3.5 transform-3d [transform:translateX(0)_rotateX(46deg)_rotateZ(-22deg)_scale(1.08)] lg:gap-5 sfx:lg:animate-flatten sfx:lg:[animation-range:contain_8%_contain_80%] ${scrollLinked}`

const columnClass = 'w-[170px] flex-none flex-col gap-3.5 pb-3.5 lg:w-[250px] lg:gap-5 lg:pb-5'

const tileBase = 'm-0 flex-none overflow-clip bg-frame shadow-[0_22px_40px_-20px_#0008] motion-safe:animate-deal'

const copyClass = `order-first grid gap-5 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[47%] lg:content-center lg:gap-6.5 lg:pt-17 sfx:lg:animate-slide-out sfx:lg:[animation-range:contain_0%_contain_16%] ${scrollLinked} ${wrapClass}`

const panel = useTemplateRef<HTMLElement>('panel')
const stage = useTemplateRef<HTMLElement>('stage')
let tracking = false

onMounted(() => {
  tracking = matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
})

function onMove(event: PointerEvent) {
  if (!tracking || !panel.value || !stage.value) return
  const box = panel.value.getBoundingClientRect()
  panel.value.style.setProperty('--mx', `${Math.round(event.clientX - box.left)}px`)
  panel.value.style.setProperty('--my', `${Math.round(event.clientY - box.top)}px`)
  stage.value.style.setProperty('--tx', (event.clientX / innerWidth - 0.5).toFixed(3))
  stage.value.style.setProperty('--ty', (event.clientY / innerHeight - 0.5).toFixed(3))
}

function onLeave() {
  if (!tracking || !stage.value) return
  stage.value.style.setProperty('--tx', '0')
  stage.value.style.setProperty('--ty', '0')
}
</script>

<template>
  <section class="relative [view-timeline-axis:block] [view-timeline-inset:0px] [view-timeline-name:--hero] sfx:lg:h-[210svh]">
    <div
      class="relative flex flex-col gap-7 pt-24 pb-2 lg:sticky lg:top-0 lg:block lg:h-svh lg:min-h-[620px] lg:overflow-clip lg:p-0"
      @pointermove="onMove"
      @pointerleave="onLeave"
    >
      <div
        ref="panel"
        :class="panelClass"
        aria-hidden="true"
      >
        <div class="absolute inset-0 bg-[radial-gradient(560px_circle_at_var(--mx,76%)_var(--my,50%),var(--color-glow),transparent_62%)]" />
        <div
          ref="stage"
          :class="stageClass"
        >
          <div :class="wallClass">
            <div
              v-for="(column, columnIndex) in columns"
              :key="columnIndex"
              :class="[
                columnClass,
                columnIndex === ORDER.length - 1 ? 'hidden lg:flex' : 'flex',
                columnIndex % 2 ? 'motion-safe:animate-drift-back' : 'motion-safe:animate-drift',
              ]"
            >
              <figure
                v-for="(tile, tileIndex) in column"
                :key="tileIndex"
                :class="[
                  tileBase,
                  tile.delay,
                  tile.key === 'pos' ? 'w-[62%] self-center rounded-3xl border-5 border-frame-edge' : 'rounded-[14px]',
                ]"
              >
                <div
                  v-if="tile.key !== 'pos'"
                  class="flex h-5 items-center gap-[5px] bg-frame-bar px-[9px]"
                >
                  <span class="size-1.5 rounded-full bg-win-red" />
                  <span class="size-1.5 rounded-full bg-win-yellow" />
                  <span class="size-1.5 rounded-full bg-win-green" />
                </div>
                <img
                  :src="artUrls[tile.key]"
                  alt=""
                  decoding="async"
                  :width="ART_SIZE[tile.key === 'pos' ? 'phone' : 'browser'].width"
                  :height="ART_SIZE[tile.key === 'pos' ? 'phone' : 'browser'].height"
                  class="block h-auto w-full"
                >
                <figcaption class="bg-frame-cap px-[11px] py-2 text-xs/[1.3] font-semibold text-frame-ink">
                  {{ NAMES[tile.key] }}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div :class="copyClass">
        <div class="inline-flex items-center gap-3 justify-self-start rounded-full border border-line bg-surface py-1.5 pr-4.5 pl-1.5">
          <KhoaPhoto
            :size="42"
            alt=""
            eager
            class="size-10.5 rounded-full object-cover"
          />
          <div>
            <b class="block text-[0.9375rem]/[1.25] font-semibold">{{ site.badge }}</b>
            <small class="flex items-center gap-2 text-sm/[1.3] text-muted">
              <span class="size-2 flex-none rounded-full bg-ok shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-ok)_28%,transparent)]" />
              {{ site.status }}
            </small>
          </div>
        </div>

        <h1
          class="text-[clamp(2.3rem,10.4vw,3.4rem)] leading-none lg:text-[clamp(2.6rem,4.7vw,5.2rem)]"
          :class="displayClass"
          :aria-label="site.headline"
        >
          <span aria-hidden="true">
            <template
              v-for="(word, index) in words"
              :key="index"
            >
              <span class="-mx-[0.02em] -mb-[0.1em] inline-block overflow-clip px-[0.02em] pb-[0.1em] align-top">
                <span
                  class="inline-block motion-safe:animate-word"
                  :class="[word.delay, word.highlight ? 'rounded-[0.14em] bg-accent px-[0.1em] text-accent-ink box-decoration-clone' : '']"
                >{{ word.text }}</span>
              </span>{{ index < words.length - 1 ? ' ' : '' }}
            </template>
          </span>
        </h1>

        <p class="m-0 max-w-[34rem] text-[clamp(1.0625rem,1.3vw,1.25rem)] text-muted">
          {{ site.pitch }}
        </p>

        <div class="flex flex-wrap gap-3">
          <AppButton
            to="/contact"
            variant="accent"
          >
            Start a project
          </AppButton>
          <AppButton href="#work">
            See my work
          </AppButton>
        </div>
      </div>

      <p class="pointer-events-none absolute inset-x-0 bottom-[6svh] m-0 hidden justify-center opacity-0 sfx:lg:flex sfx:lg:animate-show sfx:lg:[animation-range:contain_72%_contain_90%] sfx:lg:[animation-timeline:--hero]">
        <span class="max-w-[calc(100%-32px)] rounded-full bg-fg px-5.5 py-3 text-center font-semibold text-bg">{{ site.wallCaption }}</span>
      </p>
      <span
        class="absolute right-10 bottom-10 hidden rounded-full border border-line bg-surface px-4 py-2.5 text-[0.875rem] font-semibold text-fg sfx:lg:block sfx:lg:animate-hide sfx:lg:[animation-range:contain_0%_contain_3%] sfx:lg:[animation-timeline:--hero]"
        aria-hidden="true"
      >Scroll to open the wall</span>
    </div>
  </section>
</template>
