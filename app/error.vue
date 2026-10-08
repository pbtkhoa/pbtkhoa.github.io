<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const notFound = computed(() => props.error.statusCode === 404)
const title = computed(() => (notFound.value ? 'This page wandered off into the night.' : 'Something went wrong on my side.'))
const text = computed(() => (notFound.value
  ? 'The link may be old or mistyped. The rest of the site is right where you left it.'
  : 'Try again in a moment, or write to me and I\'ll look into it.'))

useSeoMeta({ title: () => `${notFound.value ? 'Page not found' : 'Error'} · Khoa Phạm` })

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <section class="lost">
      <div
        class="lost-stars"
        aria-hidden="true"
      />
      <div class="wrap lost-body">
        <p class="kicker lost-kicker">
          Error {{ error.statusCode }}
        </p>
        <h1 class="lost-title">
          {{ title }}
        </h1>
        <p class="lost-text">
          {{ text }}
        </p>
        <div class="lost-actions">
          <button
            type="button"
            class="btn btn-amber"
            @click="goHome"
          >
            Back to home
          </button>
          <NuxtLink
            to="/contact"
            class="btn btn-glass"
          >
            Contact me
          </NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.lost {
  position: relative;
  overflow: hidden;
  min-height: 70dvh;
  display: grid;
  align-items: center;
  background: linear-gradient(180deg, var(--color-sky-1) 0%, var(--color-sky-2) 62%, var(--color-sky-3) 100%);
}

.lost::after {
  content: "";
  position: absolute;
  left: -5%;
  right: -5%;
  bottom: -1px;
  height: 120px;
  background: var(--color-bg);
  clip-path: path("M0 80 C 200 20, 380 20, 560 60 S 920 110, 1100 50 S 1500 20, 1800 70 S 2300 30, 2800 60 L 2800 140 L 0 140 Z");
}

.lost-stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.5px 1.5px at 12% 18%, #fff9, transparent),
    radial-gradient(1px 1px at 28% 42%, #fff8, transparent),
    radial-gradient(1.5px 1.5px at 66% 14%, #fffa, transparent),
    radial-gradient(1px 1px at 82% 36%, #fff7, transparent),
    radial-gradient(1.5px 1.5px at 92% 12%, #fff9, transparent);
}

[data-theme="light"] .lost-stars {
  opacity: 0;
}

.lost-body {
  position: relative;
  width: 100%;
  z-index: 1;
  padding-block: 72px 160px;
}

.lost-kicker {
  margin: 0;
  color: var(--color-hero-fg);
}

.lost-title {
  max-width: 18ch;
  margin: 12px 0 0;
  color: var(--color-hero-fg);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.06;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.lost-text {
  max-width: 46ch;
  margin: 18px 0 0;
  color: var(--color-hero-muted);
  font-size: 1.1rem;
}

.lost-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
</style>
