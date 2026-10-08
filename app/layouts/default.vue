<template>
  <div class="app-shell">
    <a
      href="#main"
      class="skip-link"
    >Skip to content</a>
    <AppHeader />
    <main
      id="main"
      tabindex="-1"
    >
      <slot />
    </main>
    <AppFooter />
    <SiteFireflies />
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.app-shell > main {
  flex: 1;
  outline: none;
}

.skip-link {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 50;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--color-amber);
  color: var(--color-amber-ink);
  font-weight: 600;
  text-decoration: none;
  transform: translateY(-200%);
}

.skip-link:focus {
  transform: none;
}
</style>
