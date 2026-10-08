<script setup lang="ts">
defineProps<{
  stores: string[]
  extensions: string[]
}>()

const chipClass = 'rounded-full border border-line bg-bg-2 px-3.5 py-1.75 font-display text-[1.05rem]'
const moreChipClass = 'inline-flex items-center rounded-full border border-dashed border-line px-3.5 py-1.75 text-[0.9rem] font-semibold text-amber'
</script>

<template>
  <div class="relative grid grid-cols-1 gap-8 overflow-hidden rounded-[32px] border border-line bg-card p-[clamp(24px,4vw,44px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
    <div
      class="pointer-events-none absolute inset-0 bg-radial-[circle_at_100%_0%] from-amber/14 to-transparent to-55%"
      aria-hidden="true"
    />
    <div class="relative">
      <p :class="kickerClass">
        Beyond this page
      </p>
      <h2 :class="displayHeadingClass">
        And much more
      </h2>
      <p class="mt-3.5 mb-0 max-w-[52ch] text-muted">
        Most of my client work runs under NDA, so it isn't listed here: more Shopware stores and plugins, integrations with payment, shipping and ERP systems, and web and mobile apps I've built as a freelancer since 2017.
      </p>
      <AppButton
        to="/contact"
        variant="amber"
        class="mt-5.5"
      >
        Ask about work like yours
      </AppButton>
    </div>
    <div class="relative grid content-start gap-6">
      <div>
        <h3 class="mt-0 mb-2.5 text-[0.95rem] font-semibold">
          Shopware stores
        </h3>
        <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
          <li
            v-for="store in stores"
            :key="store"
            :class="chipClass"
          >
            {{ store }}
          </li>
          <li :class="moreChipClass">
            and many more
          </li>
        </ul>
      </div>
      <div>
        <h3 class="mt-0 mb-2.5 text-[0.95rem] font-semibold">
          Shopware plugins and apps
        </h3>
        <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
          <li
            v-for="extension in extensions"
            :key="extension"
            :class="chipClass"
          >
            {{ extension }}
          </li>
          <li :class="moreChipClass">
            and many more
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
