<script setup lang="ts">
import { navLinks, site } from '~/data/site'

const route = useRoute()
const menuOpen = shallowRef(false)

const menuLabel = computed(() => (menuOpen.value ? 'Close menu' : 'Open menu'))

const navClass = computed(() => (menuOpen.value
  ? `fixed inset-x-0 top-17 grid gap-1 border-b border-line bg-bg pt-3 pb-5 shadow-[0_28px_40px_-28px_#0007] lg:static lg:shadow-none lg:flex lg:gap-7.5 lg:border-0 lg:bg-transparent lg:p-0 ${wrapClass}`
  : 'hidden lg:flex lg:gap-7.5'))

const linkClass = `justify-self-start rounded-sm bg-[linear-gradient(var(--color-accent),var(--color-accent))] bg-[length:0_2px] bg-[position:left_bottom] bg-no-repeat py-3 text-[1.0625rem] font-medium text-fg no-underline hover:bg-[length:100%_2px] aria-[current=page]:bg-[length:100%_2px] motion-safe:transition-[background-size] motion-safe:duration-250 lg:py-1.5 lg:text-[1rem] ${focusRing}`

watch(() => route.fullPath, () => {
  menuOpen.value = false
})

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-20 flex h-17 items-center justify-between gap-4 border-b border-line bg-bg"
    :class="wrapClass"
    @keydown.esc="closeMenu"
  >
    <NuxtLink
      to="/"
      class="rounded-sm py-3 font-display text-[1.2rem] leading-none font-bold tracking-[-0.035em] whitespace-nowrap text-fg no-underline"
      :class="focusRing"
      :aria-label="`${site.shortName}, home`"
    >
      {{ site.shortName }}<span class="text-accent-text">.</span>
    </NuxtLink>

    <nav
      id="site-menu"
      :class="navClass"
      aria-label="Main"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="linkClass"
        @click="closeMenu"
      >
        {{ link.label }}
      </NuxtLink>
      <div class="pt-2 lg:hidden">
        <AppButton
          to="/contact"
          variant="accent"
          size="sm"
        >
          Hire me
        </AppButton>
      </div>
    </nav>

    <div class="flex items-center gap-2.5">
      <ThemeToggle />
      <button
        type="button"
        class="grid size-11 cursor-pointer place-items-center rounded-xl border border-line bg-surface p-0 text-fg lg:hidden"
        :class="focusRing"
        aria-controls="site-menu"
        :aria-expanded="menuOpen"
        :aria-label="menuLabel"
        @click="toggleMenu"
      >
        <AppIcon :name="menuOpen ? 'close' : 'menu'" />
      </button>
      <div class="hidden min-[521px]:block">
        <AppButton
          to="/contact"
          variant="accent"
          size="sm"
        >
          Hire me
        </AppButton>
      </div>
    </div>
  </header>
</template>
