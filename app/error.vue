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
    <SkyScene ground="page">
      <div
        class="grid min-h-[70dvh] items-center pt-18 pb-40"
        :class="wrapClass"
      >
        <div>
          <p class="m-0 text-[0.95rem] font-semibold text-hero-fg">
            Error {{ error.statusCode }}
          </p>
          <h1 class="mt-3 mb-0 max-w-[18ch] font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.06] font-semibold tracking-[-0.02em] text-balance text-hero-fg">
            {{ title }}
          </h1>
          <p class="mt-4.5 mb-0 max-w-[46ch] text-[1.1rem] text-hero-muted">
            {{ text }}
          </p>
          <div class="mt-7 flex flex-wrap gap-3">
            <AppButton
              variant="amber"
              @click="goHome"
            >
              Back to home
            </AppButton>
            <AppButton
              to="/contact"
              variant="glass"
            >
              Contact me
            </AppButton>
          </div>
        </div>
      </div>
    </SkyScene>
  </NuxtLayout>
</template>
