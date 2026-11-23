<script setup lang="ts">
import { site } from '~/data/site'

const mailto = `mailto:${site.email}`

useSeoMeta({
  title: 'Privacy',
  description: 'What this site stores about you: no cookies, no analytics, and contact details only when you write to me.',
})
</script>

<template>
  <div
    class="pb-[clamp(64px,8vw,120px)]"
    :class="wrapClass"
  >
    <PageHead
      label="Privacy"
      title="What this site knows about you"
      text="Short version: very little. No cookies, no analytics, no tracking."
    />
    <div class="max-w-[68ch] [&>h2]:mt-10 [&>h2]:mb-2.5 [&>h2]:font-display [&>h2]:text-[clamp(1.35rem,1.8vw,1.75rem)] [&>h2]:leading-[1.1] [&>h2]:font-bold [&>h2]:tracking-[-0.035em] [&>p]:mt-0 [&>p]:mb-4.5 [&>p]:text-muted">
      <h2>
      Who runs this site
    </h2>
    <p>
      {{ site.name }}, a software engineer based in Vietnam. Write to <a
        :href="mailto"
        :class="textLinkClass"
      >{{ site.email }}</a> with any privacy question or request.
    </p>
    <h2>
      Hosting
    </h2>
    <p>
      The site is a set of static pages served by GitHub Pages. GitHub receives your IP address and browser details when it delivers the pages, as described in the <a
        href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
        :class="textLinkClass"
      >GitHub privacy statement</a>. I don't get access to those logs.
    </p>
    <h2>
      Fonts, cookies and analytics
    </h2>
    <p>
      Fonts are served from this site, not from Google. There are no cookies, no analytics and no third-party scripts. Your light or dark theme choice is saved in your own browser's local storage and never leaves your device.
    </p>
    <h2>
      When you contact me
    </h2>
    <p>
      The contact form doesn't send anything by itself. It opens your own email app with your message filled in, and nothing reaches me until you press send there. When you write to me, I receive your name, email address and message. I use them only to reply and to talk about the work. I don't share them and I don't add you to any mailing list. Ask me at any time to delete them.
    </p>
      </div>
  </div>
</template>
