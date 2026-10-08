<script setup lang="ts">
defineProps<{
  label: string
  stack: string
}>()
</script>

<template>
  <div class="moon">
    <KhoaPhoto
      :size="460"
      densities="x1"
      alt="Photo of Khoa smiling"
      class="moon-photo"
      priority
    />
    <p class="moon-badge">
      <span>{{ label }}</span>
      <strong class="moon-stack">{{ stack }}</strong>
    </p>
  </div>
</template>

<style scoped>
.moon {
  position: relative;
  justify-self: center;
  order: -1;
  width: min(300px, 74vw);
  aspect-ratio: 1;
}

.moon::before {
  content: "";
  position: absolute;
  inset: -18%;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in srgb, var(--color-amber) 45%, transparent), transparent 62%);
}

.moon-photo {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid #ffffffd9;
  box-shadow: 0 30px 80px -20px #0008;
}

.moon-badge {
  position: absolute;
  left: -4%;
  bottom: 10%;
  display: grid;
  margin: 0;
  padding: 10px 16px;
  border-radius: var(--radius-tile);
  background: var(--color-card);
  color: var(--color-fg);
  font-size: 0.85rem;
  box-shadow: 0 16px 40px -12px #0007;
}

.moon-stack {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
}

@media (min-width: 900px) {
  .moon {
    order: 0;
    width: min(420px, 80vw);
  }
}
</style>
