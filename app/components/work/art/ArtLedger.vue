<script setup lang="ts">
const menu = [0, 1, 2, 3, 4, 5]
const kpis = [74, 154, 234]
const bars = [30, 44, 38, 56, 48, 64, 58, 76]
const rows = [
  { amount: 30, up: true },
  { amount: 22, up: false },
  { amount: 34, up: true },
  { amount: 18, up: true },
  { amount: 26, up: false },
  { amount: 30, up: true },
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
      class="f-panel"
      width="62"
      height="180"
    />
    <rect
      class="f-accent"
      x="12"
      y="12"
      width="26"
      height="7"
      rx="3.5"
    />
    <rect
      class="f-accent-soft"
      x="6"
      y="45"
      width="50"
      height="14"
      rx="4"
    />
    <rect
      v-for="item in menu"
      :key="item"
      :class="item === 1 ? 'f-accent' : 'f-muted'"
      x="12"
      :y="34 + item * 16"
      width="36"
      height="4"
      rx="2"
    />
    <g
      v-for="(x, index) in kpis"
      :key="x"
    >
      <rect
        class="f-card s-line"
        :x="x"
        y="12"
        width="74"
        height="40"
        rx="6"
      />
      <rect
        class="f-muted"
        :x="x + 8"
        y="20"
        width="30"
        height="4"
        rx="2"
      />
      <rect
        class="f-strong"
        :x="x + 8"
        y="30"
        :width="34 + index * 6"
        height="9"
        rx="3"
      />
      <rect
        :class="index === 1 ? 'f-down' : 'f-ok'"
        :x="x + 56"
        y="31"
        width="12"
        height="6"
        rx="3"
      />
    </g>
    <rect
      class="f-card s-line"
      x="74"
      y="60"
      width="152"
      height="110"
      rx="6"
    />
    <rect
      class="f-muted"
      x="84"
      y="69"
      width="44"
      height="4"
      rx="2"
    />
    <line
      class="s-line"
      x1="84"
      y1="158"
      x2="216"
      y2="158"
    />
    <rect
      v-for="(height, index) in bars"
      :key="index"
      :class="index === bars.length - 1 ? 'f-accent' : 'f-violet'"
      :x="88 + index * 16"
      :y="158 - height"
      width="9"
      :height="height"
      rx="2"
    />
    <rect
      class="f-card s-line"
      x="234"
      y="60"
      width="74"
      height="110"
      rx="6"
    />
    <g
      v-for="(row, index) in rows"
      :key="index"
    >
      <circle
        :class="row.up ? 'f-ok' : 'f-down'"
        cx="243"
        :cy="74 + index * 16"
        r="2.5"
      />
      <rect
        class="f-muted"
        x="249"
        :y="72 + index * 16"
        width="20"
        height="4"
        rx="2"
      />
      <rect
        class="f-strong"
        :x="300 - row.amount * 0.7"
        :y="72 + index * 16"
        :width="row.amount * 0.7"
        height="4"
        rx="2"
      />
    </g>
  </svg>
</template>
