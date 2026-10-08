<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section aria-labelledby="hero-title">
    <SkyScene>
      <div
        class="grid grid-cols-1 items-center gap-10 pt-10 pb-30 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:pt-18 lg:pb-35"
        :class="wrapClass"
      >
        <div>
          <p class="m-0 inline-flex items-center gap-2.5 rounded-full border border-glass-line bg-glass px-3.5 py-1.75 text-[0.9rem] font-medium text-hero-fg">
            <span
              class="size-2 flex-none rounded-full bg-ok ring-4 ring-ok/20"
              aria-hidden="true"
            />
            {{ site.status }}
          </p>
          <h1
            id="hero-title"
            class="mt-4 mb-0 font-display text-[clamp(2.4rem,5vw,3.9rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-balance text-hero-fg"
          >
            {{ site.headline }}
          </h1>
          <p class="mt-5 mb-0 max-w-[46ch] text-[1.15rem] text-hero-muted">
            {{ site.pitch }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <AppButton
              to="/contact"
              variant="amber"
            >
              Start a project
            </AppButton>
            <AppButton
              to="/work"
              variant="glass"
            >
              See my work
            </AppButton>
          </div>
        </div>
        <PhotoMoon
          :label="site.badge.label"
          :stack="site.badge.stack"
        />
      </div>
    </SkyScene>
  </section>
</template>
