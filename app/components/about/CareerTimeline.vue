<script setup lang="ts">
import type { Role } from '~/data/site'

defineProps<{ roles: Role[] }>()
</script>

<template>
  <ol class="timeline">
    <li
      v-for="role in roles"
      :key="`${role.org}-${role.years}`"
      class="timeline-item"
    >
      <span class="timeline-years">{{ role.years }}</span>
      <strong class="timeline-role">{{ role.role }}, {{ role.org }}</strong>
      <span class="timeline-note">{{ role.note }}</span>
    </li>
  </ol>
</template>

<style scoped>
.timeline {
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  border-left: 2px solid var(--color-line);
}

.timeline-item {
  position: relative;
  display: grid;
  padding: 0 0 26px 26px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -7px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-amber);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-amber) 25%, transparent);
}

.timeline-years {
  color: var(--color-amber);
  font-size: 0.85rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.timeline-role {
  font-size: 1.05rem;
}

.timeline-note {
  color: var(--color-muted);
  font-size: 0.95rem;
}
</style>
