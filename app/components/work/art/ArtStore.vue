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
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect
      class="fill-bg"
      width="320"
      height="180"
    />
    <rect
      class="fill-amber"
      x="14"
      y="12"
      width="34"
      height="8"
      rx="4"
    />
    <rect
      v-for="offset in [118, 146, 174, 202]"
      :key="offset"
      class="fill-muted/55"
      :x="offset"
      y="14"
      width="20"
      height="4"
      rx="2"
    />
    <path
      class="fill-none stroke-fg/80 stroke-[1.6]"
      d="M280 11h4l3 10h12l2.5-7H285.5"
    />
    <circle
      class="fill-fg/80"
      cx="289"
      cy="24.5"
      r="1.6"
    />
    <circle
      class="fill-fg/80"
      cx="298"
      cy="24.5"
      r="1.6"
    />
    <circle
      class="fill-amber"
      cx="304"
      cy="10"
      r="4"
    />
    <rect
      class="fill-bg-2"
      x="14"
      y="32"
      width="292"
      height="48"
      rx="7"
    />
    <rect
      class="fill-fg/80"
      x="26"
      y="43"
      width="96"
      height="7"
      rx="3.5"
    />
    <rect
      class="fill-muted/55"
      x="26"
      y="55"
      width="70"
      height="4"
      rx="2"
    />
    <rect
      class="fill-amber"
      x="26"
      y="64"
      width="42"
      height="9"
      rx="4.5"
    />
    <circle
      class="fill-amber/28"
      cx="256"
      cy="56"
      r="20"
    />
    <rect
      class="fill-iris"
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
        class="fill-card stroke-line"
        :x="product.x"
        y="90"
        width="68"
        height="80"
        rx="7"
      />
      <rect
        class="fill-bg-2"
        :x="product.x + 6"
        y="96"
        width="56"
        height="38"
        rx="5"
      />
      <circle
        v-if="product.shape === 'round'"
        class="fill-line"
        :cx="product.x + 34"
        cy="115"
        r="11"
      />
      <rect
        v-else-if="product.shape === 'tall'"
        class="fill-line"
        :x="product.x + 27"
        y="101"
        width="14"
        height="28"
        rx="4"
      />
      <rect
        v-else
        class="fill-line"
        :x="product.x + 16"
        y="108"
        width="36"
        height="16"
        rx="4"
      />
      <rect
        class="fill-muted/55"
        :x="product.x + 6"
        y="140"
        width="40"
        height="4"
        rx="2"
      />
      <rect
        class="fill-amber"
        :x="product.x + 6"
        y="152"
        width="24"
        height="7"
        rx="3.5"
      />
      <rect
        class="fill-line"
        :x="product.x + 46"
        y="150"
        width="16"
        height="11"
        rx="5.5"
      />
      <path
        class="fill-none stroke-fg/80 stroke-[1.6]"
        :d="`M${product.x + 54} 152.5v6M${product.x + 51} 155.5h6`"
      />
    </g>
  </svg>
</template>
