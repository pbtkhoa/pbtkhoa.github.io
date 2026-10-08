<script setup lang="ts">
const products = [
  { x: 14, shape: 'round' },
  { x: 88, shape: 'tall' },
  { x: 162, shape: 'round' },
  { x: 236, shape: 'wide' },
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
      class="f-accent"
      x="14"
      y="12"
      width="34"
      height="8"
      rx="4"
    />
    <rect
      v-for="offset in [118, 146, 174, 202]"
      :key="offset"
      class="f-muted"
      :x="offset"
      y="14"
      width="20"
      height="4"
      rx="2"
    />
    <path
      class="s-strong"
      d="M280 11h4l3 10h12l2.5-7H285.5"
    />
    <circle
      class="f-strong"
      cx="289"
      cy="24.5"
      r="1.6"
    />
    <circle
      class="f-strong"
      cx="298"
      cy="24.5"
      r="1.6"
    />
    <circle
      class="f-accent"
      cx="304"
      cy="10"
      r="4"
    />
    <rect
      class="f-panel"
      x="14"
      y="32"
      width="292"
      height="48"
      rx="7"
    />
    <rect
      class="f-strong"
      x="26"
      y="43"
      width="96"
      height="7"
      rx="3.5"
    />
    <rect
      class="f-muted"
      x="26"
      y="55"
      width="70"
      height="4"
      rx="2"
    />
    <rect
      class="f-accent"
      x="26"
      y="64"
      width="42"
      height="9"
      rx="4.5"
    />
    <circle
      class="f-accent-soft"
      cx="256"
      cy="56"
      r="20"
    />
    <rect
      class="f-violet"
      x="244"
      y="44"
      width="24"
      height="24"
      rx="6"
    />
    <g
      v-for="product in products"
      :key="product.x"
    >
      <rect
        class="f-card s-line"
        :x="product.x"
        y="90"
        width="68"
        height="80"
        rx="7"
      />
      <rect
        class="f-panel"
        :x="product.x + 6"
        y="96"
        width="56"
        height="38"
        rx="5"
      />
      <circle
        v-if="product.shape === 'round'"
        class="f-line"
        :cx="product.x + 34"
        cy="115"
        r="11"
      />
      <rect
        v-else-if="product.shape === 'tall'"
        class="f-line"
        :x="product.x + 27"
        y="101"
        width="14"
        height="28"
        rx="4"
      />
      <rect
        v-else
        class="f-line"
        :x="product.x + 16"
        y="108"
        width="36"
        height="16"
        rx="4"
      />
      <rect
        class="f-muted"
        :x="product.x + 6"
        y="140"
        width="40"
        height="4"
        rx="2"
      />
      <rect
        class="f-accent"
        :x="product.x + 6"
        y="152"
        width="24"
        height="7"
        rx="3.5"
      />
      <rect
        class="f-line"
        :x="product.x + 46"
        y="150"
        width="16"
        height="11"
        rx="5.5"
      />
      <path
        class="s-strong"
        :d="`M${product.x + 54} 152.5v6M${product.x + 51} 155.5h6`"
      />
    </g>
  </svg>
</template>
