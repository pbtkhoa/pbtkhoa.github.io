<script setup lang="ts">
interface Point {
  x: number
  y: number
}

const COUNT = 5

const active = shallowRef(false)
const awake = shallowRef(false)
const dots = useTemplateRef<HTMLElement[]>('dots')

const positions: Point[] = []
const pointer: Point = { x: 0, y: 0 }
let frame = 0

function onPointerMove(event: PointerEvent) {
  pointer.x = event.clientX
  pointer.y = event.clientY
  if (awake.value) return
  positions.forEach((position) => {
    position.x = pointer.x
    position.y = pointer.y
  })
  awake.value = true
}

function tick(time: number) {
  dots.value?.forEach((dot, index) => {
    const position = positions[index]
    if (!position) return
    const targetX = pointer.x + Math.cos(time / 700 + index * 1.3) * (24 + index * 9)
    const targetY = pointer.y + Math.sin(time / 900 + index * 1.7) * (20 + index * 7)
    const ease = 0.04 + index * 0.01
    position.x += (targetX - position.x) * ease
    position.y += (targetY - position.y) * ease
    dot.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`
  })
  frame = requestAnimationFrame(tick)
}

onMounted(async () => {
  const finePointer = matchMedia('(pointer: fine)').matches
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion) return

  for (let index = 0; index < COUNT; index++) positions.push({ x: 0, y: 0 })
  active.value = true
  await nextTick()
  addEventListener('pointermove', onPointerMove, { passive: true })
  frame = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  removeEventListener('pointermove', onPointerMove)
})
</script>

<template>
  <div
    v-if="active"
    class="fireflies"
    :class="{ 'is-awake': awake }"
    aria-hidden="true"
  >
    <i
      v-for="index in COUNT"
      ref="dots"
      :key="index"
      class="firefly"
    />
  </div>
</template>

<style scoped>
.fireflies {
  opacity: 0;
  transition: opacity 0.6s;
}

.fireflies.is-awake {
  opacity: 1;
}

.firefly {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  border-radius: 50%;
  background: var(--color-amber);
  box-shadow: 0 0 12px 3px color-mix(in srgb, var(--color-amber) 70%, transparent);
  opacity: 0.85;
  pointer-events: none;
}
</style>
