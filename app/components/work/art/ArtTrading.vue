<script setup lang="ts">
const listings = [
  { price: 34, amount: 22, coin: 'f-accent' },
  { price: 28, amount: 30, coin: 'f-violet' },
  { price: 38, amount: 18, coin: 'f-accent' },
  { price: 30, amount: 26, coin: 'f-ok' },
  { price: 36, amount: 20, coin: 'f-violet' },
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
  >
    <rect
      class="f-bg"
      width="320"
      height="180"
    />
    <rect
      class="f-accent-soft"
      x="14"
      y="10"
      width="34"
      height="12"
      rx="6"
    />
    <rect
      class="f-panel"
      x="52"
      y="10"
      width="34"
      height="12"
      rx="6"
    />
    <rect
      class="f-strong"
      x="140"
      y="13"
      width="30"
      height="6"
      rx="3"
    />
    <rect
      class="f-ok"
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
        class="f-card s-line"
        x="14"
        :y="30 + index * 29"
        width="186"
        height="24"
        rx="6"
      />
      <circle
        class="f-violet"
        cx="27"
        :cy="42 + index * 29"
        r="6"
      />
      <rect
        class="f-muted"
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
        class="f-line"
        x="46"
        :y="46 + index * 29"
        width="20"
        height="3"
        rx="1.5"
      />
      <rect
        class="f-strong"
        x="96"
        :y="37 + index * 29"
        :width="listing.price"
        height="5"
        rx="2.5"
      />
      <rect
        class="f-muted"
        x="96"
        :y="45 + index * 29"
        :width="listing.amount"
        height="3"
        rx="1.5"
      />
      <rect
        class="f-ok"
        x="162"
        :y="36 + index * 29"
        width="30"
        height="12"
        rx="6"
      />
    </g>
    <rect
      class="f-panel"
      x="210"
      y="8"
      width="100"
      height="164"
      rx="8"
    />
    <circle
      class="f-accent"
      cx="223"
      cy="20"
      r="6"
    />
    <circle
      class="f-ok"
      cx="227.5"
      cy="24.5"
      r="2.2"
    />
    <rect
      class="f-strong"
      x="234"
      y="16"
      width="34"
      height="4"
      rx="2"
    />
    <rect
      class="f-muted"
      x="234"
      y="23"
      width="20"
      height="3"
      rx="1.5"
    />
    <rect
      v-for="message in messages"
      :key="message.y"
      :class="message.mine ? 'f-accent-soft' : 'f-line'"
      :x="message.x"
      :y="message.y"
      :width="message.width"
      height="13"
      rx="6.5"
    />
    <circle
      v-for="dot in [0, 1, 2]"
      :key="`typing-${dot}`"
      class="f-muted"
      :cx="230 + dot * 6"
      cy="132"
      r="2"
    />
    <rect
      class="f-card s-line"
      x="216"
      y="148"
      width="70"
      height="16"
      rx="8"
    />
    <circle
      class="f-accent"
      cx="296"
      cy="156"
      r="8"
    />
    <path
      class="s-on-accent"
      d="M292.5 156h6m-2.5-2.5 2.5 2.5-2.5 2.5"
    />
  </svg>
</template>
