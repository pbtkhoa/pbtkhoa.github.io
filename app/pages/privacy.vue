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
      <div class="legal">
        <SectionHead
          kicker="Privacy"
          title="What this site knows about you"
          text="Short version: very little. No cookies, no analytics, no tracking."
          :level="1"
        />
        <h2 class="legal-heading">
          Who runs this site
        </h2>
        <p>
          {{ site.name }}, a software engineer based in Vietnam. Write to <a
            :href="mailto"
            class="text-link"
          >{{ site.email }}</a> with any privacy question or request.
        </p>
        <h2 class="legal-heading">
          Hosting
        </h2>
        <p>
          The site is a set of static pages served by GitHub Pages. GitHub receives your IP address and browser details when it delivers the pages, as described in the <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            class="text-link"
          >GitHub privacy statement</a>. I don't get access to those logs.
        </p>
        <h2 class="legal-heading">
          Fonts, cookies and analytics
        </h2>
        <p>
          Fonts are served from this site, not from Google. There are no cookies, no analytics and no third-party scripts. Your day or night theme choice is saved in your own browser's local storage and never leaves your device.
        </p>
        <h2 class="legal-heading">
          When you contact me
        </h2>
        <p>
          If you send a message by email or through the contact form, I receive your name, email address and message. I use them only to reply and to talk about the work. I don't share them and I don't add you to any mailing list. Ask me at any time to delete them.
        </p>
      </div>
    </PageBand>
  </div>
</template>

<style scoped>
.legal {
  max-width: 68ch;
}

.legal p {
  margin: 0 0 18px;
  color: var(--color-muted);
}

.legal-heading {
  margin: 32px 0 8px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.4rem;
}
</style>
