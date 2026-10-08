<script setup lang="ts">
defineProps<{
  stores: string[]
  extensions: string[]
}>()
</script>

<template>
  <div class="much-more">
    <div class="much-copy">
      <p class="kicker much-kicker">
        Beyond this page
      </p>
      <h2 class="heading-display">
        And much more
      </h2>
      <p class="much-text">
        Most of my client work runs under NDA, so it isn't listed here: more Shopware stores and plugins, integrations with payment, shipping and ERP systems, and web and mobile apps I've built as a freelancer since 2017.
      </p>
      <NuxtLink
        to="/contact"
        class="btn btn-amber much-action"
      >
        Ask about work like yours
      </NuxtLink>
    </div>
    <div class="much-lists">
      <div class="much-group">
        <h3 class="much-heading">
          Shopware stores
        </h3>
        <ul class="much-chips">
          <li
            v-for="store in stores"
            :key="store"
            class="much-chip"
          >
            {{ store }}
          </li>
          <li class="much-chip much-chip-more">
            and many more
          </li>
        </ul>
      </div>
      <div class="much-group">
        <h3 class="much-heading">
          Shopware plugins and apps
        </h3>
        <ul class="much-chips">
          <li
            v-for="extension in extensions"
            :key="extension"
            class="much-chip"
          >
            {{ extension }}
          </li>
          <li class="much-chip much-chip-more">
            and many more
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.much-more {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 32px;
  padding: clamp(24px, 4vw, 44px);
  border-radius: 32px;
  border: 1px solid var(--color-line);
  background:
    radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--color-amber) 14%, transparent), transparent 55%),
    var(--color-card);
}

.much-kicker {
  margin: 0;
}

.much-text {
  max-width: 52ch;
  margin: 14px 0 0;
  color: var(--color-muted);
}

.much-action {
  margin-top: 22px;
}

.much-lists {
  display: grid;
  gap: 24px;
  align-content: start;
}

.much-heading {
  margin: 0 0 10px;
  font-size: 0.95rem;
  font-weight: 600;
}

.much-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.much-chip {
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid var(--color-line);
  background: var(--color-bg-2);
  font-family: var(--font-display);
  font-size: 1.05rem;
}

.much-chip-more {
  border-style: dashed;
  background: transparent;
  color: var(--color-amber);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

@media (min-width: 900px) {
  .much-more {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
    gap: 48px;
  }
}
</style>
