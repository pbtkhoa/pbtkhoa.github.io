<script setup lang="ts">
const filters = [
  { x: 14, width: 30, active: true },
  { x: 50, width: 38, active: false },
  { x: 94, width: 34, active: false },
  { x: 134, width: 30, active: false },
]
const columns = [24, 132, 190, 246]
const rows = [
  { name: 46, status: 'f-violet', reminder: false },
  { name: 38, status: 'f-accent', reminder: true },
  { name: 52, status: 'f-ok', reminder: false },
  { name: 42, status: 'f-accent', reminder: false },
  { name: 48, status: 'f-violet', reminder: true },
]
</script>

<template>
  <svg
    viewBox="0 0 320 180"
    preserveAspectRatio="xMidYMid meet"
  >
    <rect
      class="f-bg"
      width="320"
      height="180"
    />
    <rect
      class="f-strong"
      x="14"
      y="12"
      width="56"
      height="6"
      rx="3"
    />
    <rect
      class="f-panel s-line"
      x="86"
      y="8"
      width="92"
      height="14"
      rx="7"
    />
    <circle
      class="s-line-strong"
      cx="96"
      cy="14.5"
      r="3"
    />
    <path
      class="s-line-strong"
      d="M98.2 16.7l2.3 2.3"
    />
    <rect
      class="f-card s-line"
      x="188"
      y="8"
      width="56"
      height="14"
      rx="7"
    />
    <path
      class="s-strong"
      d="M198 18v-6m-2.5 2.5L198 12l2.5 2.5"
    />
    <rect
      class="f-muted"
      x="206"
      y="13"
      width="30"
      height="4"
      rx="2"
    />
    <rect
      class="f-accent"
      x="250"
      y="8"
      width="56"
      height="14"
      rx="7"
    />
    <path
      class="s-on-accent"
      d="M260 12v6m-2.5-2.5L260 18l2.5-2.5"
    />
    <rect
      class="f-on-accent-soft"
      x="268"
      y="13"
      width="30"
      height="4"
      rx="2"
    />
    <rect
      v-for="filter in filters"
      :key="filter.x"
      :class="filter.active ? 'f-accent-soft' : 'f-panel'"
      :x="filter.x"
      y="30"
      :width="filter.width"
      height="10"
      rx="5"
    />
    <rect
      class="f-card s-line"
      x="14"
      y="48"
      width="292"
      height="124"
      rx="7"
    />
    <rect
      class="f-panel"
      x="14.5"
      y="48.5"
      width="291"
      height="16"
      rx="6.5"
    />
    <rect
      v-for="x in columns"
      :key="`head-${x}`"
      class="f-muted"
      :x="x"
      y="54.5"
      width="24"
      height="4"
      rx="2"
    />
    <g
      v-for="(row, index) in rows"
      :key="index"
    >
      <line
        v-if="index > 0"
        class="s-line"
        x1="14"
        :y1="66 + index * 21"
        x2="306"
        :y2="66 + index * 21"
      />
      <circle
        class="f-violet"
        cx="30"
        :cy="76 + index * 21"
        r="5"
      />
      <rect
        class="f-strong"
        x="40"
        :y="73 + index * 21"
        :width="row.name"
        height="4"
        rx="2"
      />
      <rect
        class="f-muted"
        x="40"
        :y="79 + index * 21"
        width="30"
        height="3"
        rx="1.5"
      />
      <circle
        class="f-line"
        cx="138"
        :cy="76 + index * 21"
        r="5"
      />
      <rect
        class="f-muted"
        x="146"
        :y="74 + index * 21"
        width="22"
        height="4"
        rx="2"
      />
      <rect
        :class="row.status"
        x="190"
        :y="71.5 + index * 21"
        width="34"
        height="9"
        rx="4.5"
      />
      <rect
        class="f-muted"
        x="246"
        :y="74 + index * 21"
        width="28"
        height="4"
        rx="2"
      />
      <path
        v-if="row.reminder"
        class="s-accent"
        :d="`M284 ${80 + index * 21}h9m-7-0v-3.5a2.5 2.5 0 0 1 5 0V${80 + index * 21}`"
      />
    </g>
  </svg>
</template>
