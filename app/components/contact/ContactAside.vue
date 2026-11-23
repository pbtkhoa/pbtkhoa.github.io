<script setup lang="ts">
import { site } from '~/data/site'

const cvUrl = usePublicUrl(site.cv)
const mailto = `mailto:${site.email}`

const cardClass = 'grid gap-3 rounded-[28px] border border-line bg-surface p-[clamp(20px,2.6vw,32px)]'
</script>

<template>
  <aside
    class="grid gap-4"
    aria-label="Other ways to reach me"
  >
    <div class="grid grid-cols-[minmax(0,1fr)_96px] items-center gap-4 overflow-clip rounded-[28px] bg-fg p-[clamp(20px,2.6vw,32px)] text-bg">
      <p class="m-0 font-display text-[1.5rem] leading-[1.15] font-bold tracking-[-0.02em]">
        Xin chào! Say hi any time.
      </p>
      <KhoaPhoto
        :size="96"
        alt="Photo of Khoa"
        class="size-24 rounded-full border-4 border-accent object-cover"
      />
    </div>
    <div :class="cardClass">
      <p :class="labelClass">
        Email
      </p>
      <a
        :href="mailto"
        class="justify-self-start rounded-sm font-display text-[1.35rem] font-bold tracking-[-0.02em] text-fg no-underline [overflow-wrap:anywhere] hover:text-accent-text"
        :class="focusRing"
      >{{ site.email }}</a>
      <CopyEmail
        :email="site.email"
        size="sm"
        class="justify-self-start"
      />
    </div>
    <div :class="cardClass">
      <p :class="labelClass">
        Elsewhere
      </p>
      <div class="flex flex-wrap gap-2.5">
        <AppButton
          :href="site.github"
          size="sm"
        >
          GitHub
        </AppButton>
        <AppButton
          :href="site.linkedin"
          size="sm"
        >
          LinkedIn
        </AppButton>
        <AppButton
          :href="cvUrl"
          size="sm"
          download
        >
          CV (PDF)
        </AppButton>
      </div>
    </div>
  </aside>
</template>
