<script setup lang="ts">
const listings = [
  { price: 34, amount: 22, coin: 'fill-amber' },
  { price: 28, amount: 30, coin: 'fill-iris' },
  { price: 38, amount: 18, coin: 'fill-amber' },
  { price: 30, amount: 26, coin: 'fill-ok' },
  { price: 36, amount: 20, coin: 'fill-iris' },
]
const messages = [
  { y: 36, x: 222, width: 58, mine: false },
  { y: 54, x: 238, width: 58, mine: true },
  { y: 72, x: 222, width: 46, mine: false },
  { y: 90, x: 230, width: 66, mine: true },
  { y: 108, x: 222, width: 52, mine: false },
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
      class="fill-amber/28"
      x="14"
      y="10"
      width="34"
      height="12"
      rx="6"
    />
    <rect
      class="fill-bg-2"
      x="52"
      y="10"
      width="34"
      height="12"
      rx="6"
    />
    <rect
      class="fill-fg/80"
      x="140"
      y="13"
      width="30"
      height="6"
      rx="3"
    />
    <rect
      class="fill-ok"
      x="174"
      y="13"
      width="20"
      height="6"
      rx="3"
    />
    <g
      v-for="(listing, index) in listings"
      :key="index"
    >
      <rect
        class="fill-card stroke-line"
        x="14"
        :y="30 + index * 29"
        width="186"
        height="24"
        rx="6"
      />
      <circle
        class="fill-iris"
        cx="27"
        :cy="42 + index * 29"
        r="6"
      />
      <rect
        class="fill-muted/55"
        x="38"
        :y="37 + index * 29"
        width="32"
        height="4"
        rx="2"
      />
      <circle
        :class="listing.coin"
        cx="41"
        :cy="47.5 + index * 29"
        r="2.5"
      />
      <rect
        class="fill-line"
        x="46"
        :y="46 + index * 29"
        width="20"
        height="3"
        rx="1.5"
      />
      <rect
        class="fill-fg/80"
        x="96"
        :y="37 + index * 29"
        :width="listing.price"
        height="5"
        rx="2.5"
      />
      <rect
        class="fill-muted/55"
        x="96"
        :y="45 + index * 29"
        :width="listing.amount"
        height="3"
        rx="1.5"
      />
      <rect
        class="fill-ok"
        x="162"
        :y="36 + index * 29"
        width="30"
        height="12"
        rx="6"
      />
    </g>
    <rect
      class="fill-bg-2"
      x="210"
      y="8"
      width="100"
      height="164"
      rx="8"
    />
    <circle
      class="fill-amber"
      cx="223"
      cy="20"
      r="6"
    />
    <circle
      class="fill-ok"
      cx="227.5"
      cy="24.5"
      r="2.2"
    />
    <rect
      class="fill-fg/80"
      x="234"
      y="16"
      width="34"
      height="4"
      rx="2"
    />
    <rect
      class="fill-muted/55"
      x="234"
      y="23"
      width="20"
      height="3"
      rx="1.5"
    />
    <rect
      v-for="message in messages"
      :key="message.y"
      :class="message.mine ? 'fill-amber/28' : 'fill-line'"
      :x="message.x"
      :y="message.y"
      :width="message.width"
      height="13"
      rx="6.5"
    />
    <circle
      v-for="dot in [0, 1, 2]"
      :key="`typing-${dot}`"
      class="fill-muted/55"
      :cx="230 + dot * 6"
      cy="132"
      r="2"
    />
    <rect
      class="fill-card stroke-line"
      x="216"
      y="148"
      width="70"
      height="16"
      rx="8"
    />
    <circle
      class="fill-amber"
      cx="296"
      cy="156"
      r="8"
    />
    <path
      class="fill-none stroke-amber-ink stroke-[1.6]"
      d="M292.5 156h6m-2.5-2.5 2.5 2.5-2.5 2.5"
    />
  </svg>
</template>
