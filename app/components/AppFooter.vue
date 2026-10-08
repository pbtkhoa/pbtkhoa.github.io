<script setup lang="ts">
import { site } from '~/data/site'

const year = useState('footer-year', () => new Date().getFullYear())
</script>

<template>
  <footer class="border-t border-line py-8 text-[0.9rem] text-muted">
    <div
      class="flex flex-wrap justify-between gap-3.5"
      :class="wrapClass"
    >
      <span>© {{ year }} {{ site.name }}</span>
      <nav
        class="flex flex-wrap gap-4.5"
        aria-label="Footer"
      >
        <a
          :href="site.github"
          :class="textLinkClass"
        >GitHub</a>
        <a
          :href="site.linkedin"
          :class="textLinkClass"
        >LinkedIn</a>
        <NuxtLink
          to="/privacy"
          :class="textLinkClass"
        >
          Privacy
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>
