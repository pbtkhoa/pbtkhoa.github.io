<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section
    class="sky"
    aria-labelledby="hero-title"
  >
    <div
      class="stars"
      aria-hidden="true"
    />
    <div class="wrap hero">
      <div>
        <p class="status-pill">
          <span
            class="status-dot"
            aria-hidden="true"
          />
          {{ site.status }}
        </p>
        <h1
          id="hero-title"
          class="hero-title"
        >
          {{ site.headline }}
        </h1>
        <p class="hero-lede">
          {{ site.pitch }}
        </p>
        <div class="hero-actions">
          <NuxtLink
            to="/contact"
            class="btn btn-amber"
          >
            Start a project
          </NuxtLink>
          <NuxtLink
            to="/work"
            class="btn btn-glass"
          >
            See my work
          </NuxtLink>
        </div>
      </div>
      <PhotoMoon
        :label="site.badge.label"
        :stack="site.badge.stack"
      />
    </div>
  </section>
</template>

<style scoped>
.sky {
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, var(--color-sky-1) 0%, var(--color-sky-2) 62%, var(--color-sky-3) 100%);
}

.sky::after {
  content: "";
  position: absolute;
  left: -5%;
  right: -5%;
  bottom: -1px;
  height: 120px;
  background: var(--color-hill);
  clip-path: path("M0 80 C 200 20, 380 20, 560 60 S 920 110, 1100 50 S 1500 20, 1800 70 S 2300 30, 2800 60 L 2800 140 L 0 140 Z");
}

.stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.5px 1.5px at 12% 18%, #fff9, transparent),
    radial-gradient(1px 1px at 28% 42%, #fff8, transparent),
    radial-gradient(1.5px 1.5px at 66% 14%, #fffa, transparent),
    radial-gradient(1px 1px at 82% 36%, #fff7, transparent),
    radial-gradient(1px 1px at 48% 8%, #fff8, transparent),
    radial-gradient(1.5px 1.5px at 92% 12%, #fff9, transparent);
}

[data-theme="light"] .stars {
  opacity: 0;
}

.hero {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 40px;
  padding-block: 40px 120px;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid var(--color-glass-line);
  background: var(--color-glass);
  color: var(--color-hero-fg);
  font-size: 0.9rem;
  font-weight: 500;
}

.status-dot {
  width: 8px;
  height: 8px;
  flex: none;
  border-radius: 50%;
  background: var(--color-ok);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-ok) 20%, transparent);
}

.hero-title {
  margin: 16px 0 0;
  color: var(--color-hero-fg);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.4rem, 5vw, 3.9rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.hero-lede {
  max-width: 46ch;
  margin: 20px 0 0;
  color: var(--color-hero-muted);
  font-size: 1.15rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    padding-block: 72px 140px;
  }
}
</style>
