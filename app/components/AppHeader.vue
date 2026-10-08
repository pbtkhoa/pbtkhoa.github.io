<script setup lang="ts">
import { navLinks, site } from '~/data/site'

const route = useRoute()
const menuOpen = shallowRef(false)

const menuLabel = computed(() => (menuOpen.value ? 'Close menu' : 'Open menu'))

const navClass = computed(() => (menuOpen.value
  ? 'absolute inset-x-0 top-17 grid gap-1 border-b border-line bg-bg px-4 pt-3 pb-5'
  : 'hidden'))

const linkClass = `rounded-full px-3.5 py-3 font-medium text-muted no-underline hover:text-fg aria-[current=page]:bg-card aria-[current=page]:text-fg lg:py-2 lg:text-[0.95rem] ${focusRing}`

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
    class="sticky top-0 z-20 border-b border-line/60 bg-bg/72 backdrop-blur-md"
    @keydown.esc="closeMenu"
  >
    <div
      class="flex h-17 items-center justify-between gap-4"
      :class="wrapClass"
    >
      <NuxtLink
        to="/"
        class="flex items-center gap-2.5 rounded-full font-display text-[1.2rem] font-semibold text-inherit no-underline"
        :class="focusRing"
      >
        <KhoaPhoto
          :size="36"
          alt=""
          class="size-9 rounded-full border-2 border-amber object-cover"
          priority
        />
        {{ site.shortName }}
      </NuxtLink>

      <nav
        id="site-menu"
        class="lg:static lg:flex lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0"
        :class="navClass"
        aria-label="Main"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="linkClass"
        >
          {{ link.label }}
        </NuxtLink>
        <AppButton
          to="/contact"
          variant="amber"
          class="mt-2 justify-self-start lg:hidden"
        >
          Hire me
        </AppButton>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          class="grid size-10 cursor-pointer place-items-center rounded-full border border-line bg-card text-fg hover:border-amber lg:hidden"
          :class="focusRing"
          aria-controls="site-menu"
          :aria-expanded="menuOpen"
          :aria-label="menuLabel"
          @click="toggleMenu"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" />
        </button>
        <div class="hidden lg:block">
          <AppButton
            to="/contact"
            variant="amber"
          >
            Hire me
          </AppButton>
        </div>
      </div>
    </div>
  </header>
</template>
