<script setup lang="ts">
import { NuxtLink } from '#components'

type ButtonVariant = 'accent' | 'line'
type ButtonSize = 'md' | 'sm'

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit'
  download?: boolean
}>(), {
  to: undefined,
  href: undefined,
  variant: 'line',
  size: 'md',
  type: 'button',
  download: false,
})

const base = `inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border-[1.5px] text-base leading-none font-semibold whitespace-nowrap no-underline motion-safe:transition-[translate,background-color,color] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 ${focusRing}`

const variants: Record<ButtonVariant, string> = {
  accent: 'border-transparent bg-accent text-accent-ink',
  line: 'border-fg bg-transparent text-fg hover:bg-fg hover:text-bg',
}

const sizes: Record<ButtonSize, string> = {
  md: 'min-h-13 px-6.5',
  sm: 'min-h-11 px-4.5',
}

const external = computed(() => Boolean(props.href && /^https?:/.test(props.href)))

const tag = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :download="download || undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
    :class="[base, variants[variant], sizes[size]]"
  >
    <slot />
  </component>
</template>
