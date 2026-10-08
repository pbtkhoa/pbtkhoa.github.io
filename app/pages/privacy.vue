<script setup lang="ts">
import { site } from '~/data/site'

const mailto = `mailto:${site.email}`

useSeoMeta({
  title: 'Privacy',
  description: 'What this site stores about you: no cookies, no analytics, and contact details only when you write to me.',
})
</script>

<template>
  <div>
    <PageBand>
      <div class="max-w-[68ch] [&>p]:mt-0 [&>p]:mb-4.5 [&>p]:text-muted">
        <SectionHead
          kicker="Privacy"
          title="What this site knows about you"
          text="Short version: very little. No cookies, no analytics, no tracking."
          :level="1"
        />
        <h2 class="mt-8 mb-2 font-display text-[1.4rem] font-semibold">
          Who runs this site
        </h2>
        <p>
          {{ site.name }}, a software engineer based in Vietnam. Write to <a
            :href="mailto"
            :class="textLinkClass"
          >{{ site.email }}</a> with any privacy question or request.
        </p>
        <h2 class="mt-8 mb-2 font-display text-[1.4rem] font-semibold">
          Hosting
        </h2>
        <p>
          The site is a set of static pages served by GitHub Pages. GitHub receives your IP address and browser details when it delivers the pages, as described in the <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            :class="textLinkClass"
          >GitHub privacy statement</a>. I don't get access to those logs.
        </p>
        <h2 class="mt-8 mb-2 font-display text-[1.4rem] font-semibold">
          Fonts, cookies and analytics
        </h2>
        <p>
          Fonts are served from this site, not from Google. There are no cookies, no analytics and no third-party scripts. Your day or night theme choice is saved in your own browser's local storage and never leaves your device.
        </p>
        <h2 class="mt-8 mb-2 font-display text-[1.4rem] font-semibold">
          When you contact me
        </h2>
        <p>
          The contact form doesn't send anything by itself. It opens your own email app with your message filled in, and nothing reaches me until you press send there. When you write to me, I receive your name, email address and message. I use them only to reply and to talk about the work. I don't share them and I don't add you to any mailing list. Ask me at any time to delete them.
        </p>
      </div>
    </PageBand>
  </div>
</template>
