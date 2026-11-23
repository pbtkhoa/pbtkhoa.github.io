<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main"
      class="fixed top-3 left-3 z-60 -translate-y-[200%] rounded-full bg-accent px-4 py-2.5 font-semibold text-accent-ink no-underline focus:translate-y-0"
      :class="focusRing"
    >Skip to content</a>
    <AppHeader />
    <main
      id="main"
      class="flex-1 outline-none"
      tabindex="-1"
    >
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
