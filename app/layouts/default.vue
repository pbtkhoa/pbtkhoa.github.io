<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main"
      class="absolute top-3 left-3 z-50 -translate-y-[200%] rounded-full bg-amber px-4 py-2.5 font-semibold text-amber-ink no-underline focus:translate-y-0"
      :class="focusRing"
    >Skip to content</a>
    <AppHeader />
    <main
      id="main"
      class="flex-1 scroll-mt-24 outline-none"
      tabindex="-1"
    >
      <slot />
    </main>
    <AppFooter />
    <SiteFireflies />
  </div>
</template>
