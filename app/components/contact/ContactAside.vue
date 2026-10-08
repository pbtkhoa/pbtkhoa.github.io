<script setup lang="ts">
import { site } from '~/data/site'

const cvUrl = usePublicUrl(site.cv)
const mailto = `mailto:${site.email}`
</script>

<template>
  <aside
    class="contact-aside"
    aria-label="Other ways to reach me"
  >
    <div class="hello">
      <p class="hello-text">
        Xin chào! Say hi any time.
      </p>
      <KhoaPhoto
        :size="112"
        alt="Photo of Khoa"
        class="hello-photo"
      />
    </div>
    <div class="card">
      <p class="kicker aside-kicker">
        Email
      </p>
      <a
        :href="mailto"
        class="mail"
      >{{ site.email }}</a>
      <CopyEmail
        :email="site.email"
        class="aside-action"
      />
    </div>
    <div class="card">
      <p class="kicker aside-kicker">
        Elsewhere
      </p>
      <p class="aside-links">
        <a
          :href="site.github"
          class="text-link"
        >GitHub</a>
        <span aria-hidden="true">·</span>
        <a
          :href="site.linkedin"
          class="text-link"
        >LinkedIn</a>
        <span aria-hidden="true">·</span>
        <a
          :href="cvUrl"
          class="text-link"
          download
        >CV (PDF)</a>
      </p>
    </div>
  </aside>
</template>

<style scoped>
.contact-aside {
  display: grid;
  gap: 14px;
}

.hello {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 112px;
  align-items: center;
  gap: 16px;
  overflow: hidden;
  padding: 24px;
  border-radius: var(--radius-panel);
  background: linear-gradient(160deg, var(--color-sky-2), var(--color-sky-3));
  color: var(--color-hero-fg);
}

.hello-text {
  margin: 0;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.2;
}

.hello-photo {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffffd9;
}

.aside-kicker {
  margin: 0;
}

.mail {
  color: inherit;
  font-family: var(--font-display);
  font-size: 1.3rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.mail:hover {
  color: var(--color-amber);
}

.aside-action {
  align-self: flex-start;
}

.aside-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  color: var(--color-muted);
}

.aside-links a {
  color: var(--color-fg);
}
</style>
