<script setup lang="ts">
import type { Role } from '~/data/site'

defineProps<{ roles: Role[] }>()
</script>

<template>
  <ol class="mt-7 mb-0 list-none border-l-2 border-line p-0">
    <li
      v-for="role in roles"
      :key="`${role.org}-${role.years}`"
      class="relative grid pb-6.5 pl-6.5 before:absolute before:top-1.5 before:left-[-7px] before:size-3 before:rounded-full before:bg-amber before:ring-4 before:ring-amber/25"
    >
      <span class="text-[0.85rem] font-semibold text-amber tabular-nums">{{ role.years }}</span>
      <strong class="text-[1.05rem]">{{ role.role }}, {{ role.org }}</strong>
      <span class="text-[0.95rem] text-muted">{{ role.note }}</span>
    </li>
  </ol>
</template>
