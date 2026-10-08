<script setup lang="ts">
import { NuxtLink } from '#components'

type ButtonVariant = 'plain' | 'amber' | 'glass'

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  variant?: ButtonVariant
  type?: 'button' | 'submit'
  download?: boolean
}>(), {
  to: undefined,
  href: undefined,
  variant: 'plain',
  type: 'button',
  download: false,
})

const base = `inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full border px-5.5 py-3 leading-[1.4] font-semibold no-underline hover:border-amber motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 ${focusRing}`

const variants: Record<ButtonVariant, string> = {
  plain: 'border-line bg-card text-fg',
  amber: 'border-amber bg-amber text-amber-ink shadow-[0_8px_30px_-8px_color-mix(in_srgb,var(--color-amber)_70%,transparent)]',
  glass: 'border-glass-line bg-glass text-hero-fg',
}

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
    :class="[base, variants[variant]]"
  >
    <slot />
  </component>
</template>
