<script setup lang="ts">
import { site } from '~/data/site'

const cvUrl = usePublicUrl(site.cv)
const mailto = `mailto:${site.email}`
</script>

<template>
  <aside
    class="grid gap-3.5"
    aria-label="Other ways to reach me"
  >
    <div class="grid grid-cols-[minmax(0,1fr)_112px] items-center gap-4 overflow-hidden rounded-panel bg-linear-160/srgb from-sky-2 to-sky-3 p-6 text-hero-fg">
      <p class="m-0 font-display text-[1.4rem] leading-[1.2] font-semibold">
        Xin chào! Say hi any time.
      </p>
      <KhoaPhoto
        :size="112"
        alt="Photo of Khoa"
        class="size-28 rounded-full border-4 border-white/85 object-cover"
      />
    </div>
    <div :class="cardClass">
      <p :class="kickerClass">
        Email
      </p>
      <a
        :href="mailto"
        class="rounded-md font-display text-[1.3rem] text-inherit no-underline [overflow-wrap:anywhere] hover:text-amber"
        :class="focusRing"
      >{{ site.email }}</a>
      <CopyEmail
        :email="site.email"
        class="self-start"
      />
    </div>
    <div :class="cardClass">
      <p :class="kickerClass">
        Elsewhere
      </p>
      <p class="m-0 flex flex-wrap gap-2 text-muted">
        <a
          :href="site.github"
          :class="textLinkClass"
          class="text-fg"
        >GitHub</a>
        <span aria-hidden="true">·</span>
        <a
          :href="site.linkedin"
          :class="textLinkClass"
          class="text-fg"
        >LinkedIn</a>
        <span aria-hidden="true">·</span>
        <a
          :href="cvUrl"
          :class="textLinkClass"
          class="text-fg"
          download
        >CV (PDF)</a>
      </p>
    </div>
  </aside>
</template>
