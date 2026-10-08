<script setup lang="ts">
import { navLinks, site } from '~/data/site'

const route = useRoute()
const menuOpen = shallowRef(false)

const menuLabel = computed(() => (menuOpen.value ? 'Close menu' : 'Open menu'))

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
    class="site-header"
    @keydown.esc="closeMenu"
  >
    <div class="wrap header-bar">
      <NuxtLink
        to="/"
        class="brand"
      >
        <KhoaPhoto
          :size="36"
          alt=""
          class="brand-photo"
          priority
        />
        {{ site.shortName }}
      </NuxtLink>

      <nav
        id="site-menu"
        class="site-nav"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="btn btn-amber nav-hire"
        >
          Hire me
        </NuxtLink>
      </nav>

      <div class="header-actions">
        <ThemeToggle />
        <button
          type="button"
          class="icon-btn menu-btn"
          aria-controls="site-menu"
          :aria-expanded="menuOpen"
          :aria-label="menuLabel"
          @click="toggleMenu"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" />
        </button>
        <NuxtLink
          to="/contact"
          class="btn btn-amber header-hire"
        >
          Hire me
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: color-mix(in srgb, var(--color-bg) 72%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--color-line) 60%, transparent);
}

.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 68px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: inherit;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.2rem;
}

.brand-photo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid var(--color-amber);
  object-fit: cover;
}

.site-nav {
  display: none;
}

.site-nav.is-open {
  display: grid;
  gap: 4px;
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  padding: 12px 16px 20px;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-line);
}

.nav-link {
  color: var(--color-muted);
  padding: 12px 14px;
  border-radius: 999px;
  font-weight: 500;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-fg);
}

.nav-link[aria-current="page"] {
  color: var(--color-fg);
  background: var(--color-card);
}

.nav-hire {
  justify-self: start;
  margin-top: 8px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-hire {
  display: none;
}

@media (min-width: 900px) {
  .site-nav,
  .site-nav.is-open {
    display: flex;
    gap: 4px;
    position: static;
    padding: 0;
    background: none;
    border: 0;
  }

  .nav-link {
    padding: 8px 14px;
    font-size: 0.95rem;
  }

  .nav-hire,
  .menu-btn {
    display: none;
  }

  .header-hire {
    display: inline-flex;
  }
}
</style>
