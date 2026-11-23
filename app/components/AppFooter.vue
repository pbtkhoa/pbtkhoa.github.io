<script setup lang="ts">
import { navLinks, site } from '~/data/site'

const year = useState('footer-year', () => new Date().getFullYear())

const linkClass = `rounded-sm text-muted no-underline hover:text-fg ${focusRing}`
</script>

<template>
  <footer
    class="flex flex-wrap justify-between gap-4 border-t border-line py-6.5 text-[0.9375rem] text-muted"
    :class="wrapClass"
  >
    <span>© {{ year }} {{ site.name }}</span>
    <nav
      class="flex flex-wrap gap-x-5 gap-y-2"
      aria-label="Footer"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="linkClass"
      >
        {{ link.label }}
      </NuxtLink>
      <NuxtLink
        to="/privacy"
        :class="linkClass"
      >
        Privacy
      </NuxtLink>
      <a
        :href="site.github"
        :class="linkClass"
        target="_blank"
        rel="noopener"
      >GitHub</a>
      <a
        :href="site.linkedin"
        :class="linkClass"
        target="_blank"
        rel="noopener"
      >LinkedIn</a>
    </nav>
  </footer>
</template>
