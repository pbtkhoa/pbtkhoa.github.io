<script setup lang="ts">
import { site } from '~/data/site'

const year = useState('footer-year', () => new Date().getFullYear())
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-bar">
      <span>© {{ year }} {{ site.name }}</span>
      <nav
        class="footer-nav"
        aria-label="Footer"
      >
        <a
          :href="site.github"
          class="text-link"
        >GitHub</a>
        <a
          :href="site.linkedin"
          class="text-link"
        >LinkedIn</a>
        <NuxtLink
          to="/privacy"
          class="text-link"
        >
          Privacy
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--color-line);
  padding-block: 32px;
  color: var(--color-muted);
  font-size: 0.9rem;
}

.footer-bar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
</style>
