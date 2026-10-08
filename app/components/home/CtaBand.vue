<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <div class="cta-band">
    <KhoaPhoto
      :size="96"
      alt=""
      class="cta-photo"
    />
    <div>
      <h2 class="heading-display cta-title">
        Have a project for the next quarter?
      </h2>
      <p class="cta-text">
        Tell me what you're building. {{ site.replyPromise }}
      </p>
    </div>
    <NuxtLink
      to="/contact"
      class="btn btn-amber cta-action"
    >
      Get in touch
    </NuxtLink>
  </div>
</template>

<style scoped>
.cta-band {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 24px;
  padding: 28px;
  border-radius: 32px;
  background: linear-gradient(120deg, var(--color-violet), #9a5874);
  color: #ffffff;
}

.cta-photo {
  display: none;
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffffd9;
}

.cta-title {
  color: #ffffff;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
}

.cta-text {
  margin: 6px 0 0;
  color: #f3eefc;
}

.cta-action {
  justify-self: start;
}

@media (min-width: 900px) {
  .cta-band {
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 32px;
    padding: 36px 44px;
  }

  .cta-photo {
    display: block;
  }
}
</style>
