<script setup lang="ts">
import { career, site } from '~/data/site'

const cvUrl = usePublicUrl(site.cv)

useSeoMeta({
  title: 'About',
  description: 'Full-stack engineer since 2016: team lead at Rikkeisoft, React Native at NFQ, and five years of Shopware 6 and Laravel for companies in Germany and Austria.',
})
</script>

<template>
  <div>
    <PageBand>
      <div class="about">
        <figure class="portrait">
          <KhoaPhoto
            :size="460"
            densities="x1"
            alt="Photo of Khoa"
            class="portrait-photo"
          />
          <figcaption class="portrait-caption">
            {{ site.name }}, full-stack software engineer.
          </figcaption>
        </figure>

        <div>
          <p class="kicker about-kicker">
            About
          </p>
          <h1 class="heading-display">
            I'm a full-stack engineer who likes the boring parts done right.
          </h1>
          <div class="prose">
            <p>
              I started with WordPress and Symfony in 2016. Since then I've led a team at Rikkeisoft, built React Native apps at NFQ, and spent the last five years on <strong>Shopware 6 and Laravel</strong> for companies in Germany and Austria.
            </p>
            <p>
              I like taking a feature from the database to the deploy, and I've done a lot of <strong>upgrades of older systems</strong> to current PHP, Symfony and Laravel versions. I studied Electronics and Telecommunications at Hue University.
            </p>
          </div>
          <div class="about-actions">
            <a
              :href="cvUrl"
              class="btn btn-amber"
              download
            >Download CV (PDF)</a>
            <a
              :href="site.github"
              class="btn"
            >GitHub</a>
            <a
              :href="site.linkedin"
              class="btn"
            >LinkedIn</a>
          </div>
          <h2 class="sr-only">
            Experience
          </h2>
          <CareerTimeline :roles="career" />
        </div>
      </div>
    </PageBand>
  </div>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: 40px;
}

.portrait {
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius-panel);
  border: 1px solid var(--color-line);
}

.portrait-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

.portrait-caption {
  padding: 14px 18px;
  background: var(--color-card);
  color: var(--color-muted);
  font-size: 0.9rem;
}

.about-kicker {
  margin: 0;
}

.prose {
  margin-top: 20px;
}

.prose p {
  margin: 0 0 18px;
  color: var(--color-muted);
  font-size: 1.08rem;
}

.prose strong {
  color: var(--color-fg);
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

@media (min-width: 900px) {
  .about {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
    gap: 56px;
  }

  .portrait {
    position: sticky;
    top: 96px;
  }
}
</style>
