<script setup lang="ts">
interface Point {
  x: number
  y: number
}

const COUNT = 5
const RADIUS = 3

const canvas = useTemplateRef<HTMLCanvasElement>('canvas')
const active = shallowRef(false)
const awake = shallowRef(false)

const points: Point[] = Array.from({ length: COUNT }, () => ({ x: 0, y: 0 }))
const pointer: Point = { x: 0, y: 0 }
let context: CanvasRenderingContext2D | null = null
let color = '#f4a93a'
let frame = 0
let themeObserver: MutationObserver | undefined

function readColor() {
  color = getComputedStyle(document.documentElement).getPropertyValue('--color-amber').trim() || color
}

function resize() {
  const element = canvas.value
  if (!element || !context) return
  const ratio = window.devicePixelRatio || 1
  element.width = Math.round(innerWidth * ratio)
  element.height = Math.round(innerHeight * ratio)
  context.setTransform(ratio, 0, 0, ratio, 0, 0)
}

function onPointerMove(event: PointerEvent) {
  pointer.x = event.clientX
  pointer.y = event.clientY
  if (awake.value) return
  points.forEach((point) => {
    point.x = pointer.x
    point.y = pointer.y
  })
  awake.value = true
}

function draw(time: number) {
  if (context) {
    context.clearRect(0, 0, innerWidth, innerHeight)
    context.fillStyle = color
    context.shadowColor = color
    context.shadowBlur = 12
    points.forEach((point, index) => {
      const targetX = pointer.x + Math.cos(time / 700 + index * 1.3) * (24 + index * 9)
      const targetY = pointer.y + Math.sin(time / 900 + index * 1.7) * (20 + index * 7)
      const ease = 0.04 + index * 0.01
      point.x += (targetX - point.x) * ease
      point.y += (targetY - point.y) * ease
      context?.beginPath()
      context?.arc(point.x, point.y, RADIUS, 0, Math.PI * 2)
      context?.fill()
    })
  }
  frame = requestAnimationFrame(draw)
}

onMounted(async () => {
  const finePointer = matchMedia('(pointer: fine)').matches
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion) return

  active.value = true
  await nextTick()
  context = canvas.value?.getContext('2d') ?? null
  readColor()
  resize()
  themeObserver = new MutationObserver(readColor)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  addEventListener('resize', resize, { passive: true })
  addEventListener('pointermove', onPointerMove, { passive: true })
  frame = requestAnimationFrame(draw)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frame)
  themeObserver?.disconnect()
  removeEventListener('resize', resize)
  removeEventListener('pointermove', onPointerMove)
})
</script>

<template>
  <canvas
    v-if="active"
    ref="canvas"
    class="pointer-events-none fixed inset-0 z-30 size-full transition-opacity duration-600"
    :class="awake ? 'opacity-85' : 'opacity-0'"
    aria-hidden="true"
  />
</template>
