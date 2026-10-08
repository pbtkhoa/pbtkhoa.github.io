<script setup lang="ts">
interface Product {
  x: number
  titles: number[]
  properties: { x: number, width: number, value?: boolean, divider?: boolean }[]
}

const navItems = [
  { x: 4.7, width: 10.4 },
  { x: 22.6, width: 15.6, active: true },
  { x: 45.8, width: 40.6 },
]

const filters = [
  { x: 4.7, width: 34.1, label: 20.4 },
  { x: 41.8, width: 23.4, label: 10.2 },
  { x: 68.2, width: 25.8, label: 12.6 },
  { x: 96.9, width: 19.6, label: 6.6 },
  { x: 119.7, width: 33, label: 19.8 },
  { x: 155.7, width: 20.4, label: 7.9 },
]

const products: Product[] = [
  {
    x: 9.4,
    titles: [59],
    properties: [{ x: 3.8, width: 6.2 }, { x: 11.1, width: 1.5, value: true }],
  },
  {
    x: 86.4,
    titles: [56, 34],
    properties: [],
  },
  {
    x: 163.4,
    titles: [31.5],
    properties: [
      { x: 3.8, width: 9.2 },
      { x: 14.3, width: 5.8, value: true },
      { x: 21.3, width: 0, divider: true },
      { x: 22.6, width: 6.2 },
      { x: 29.9, width: 2.3, value: true },
    ],
  },
]

const descriptionLines = [
  { y: 165, width: 60.7 },
  { y: 169.3, width: 57 },
  { y: 173.5, width: 57.5 },
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
      class="fill-white"
      width="320"
      height="180"
    />
    <rect
      class="fill-[#012169]"
      x="267.5"
      y="2.2"
      width="4.2"
      height="3"
    />
    <path
      class="fill-none stroke-white stroke-[0.7]"
      stroke-linecap="butt"
      d="M267.5 2.2l4.2 3M271.7 2.2l-4.2 3"
    />
    <path
      class="fill-none stroke-[#c8102e] stroke-[0.6]"
      stroke-linecap="butt"
      d="M269.6 2.2v3M267.5 3.7h4.2"
    />
    <rect
      class="fill-[#4a545b]"
      x="274"
      y="2.8"
      width="13"
      height="1.9"
      rx="0.9"
    />
    <path
      class="fill-[#4a545b]"
      d="M288.6 3.2h2.4l-1.2 1.3z"
    />
    <rect
      class="fill-[#4a545b]"
      x="293.5"
      y="2.8"
      width="18"
      height="1.9"
      rx="0.9"
    />
    <path
      class="fill-[#4a545b]"
      d="M313 3.2h2.4l-1.2 1.3z"
    />
    <rect
      class="fill-[#545454]"
      x="4.7"
      y="10.4"
      width="27"
      height="6.2"
      rx="1"
    />
    <rect
      class="fill-[#9e9e9e]"
      x="33.2"
      y="10.4"
      width="22"
      height="6.2"
      rx="1"
    />
    <rect
      class="fill-white stroke-[#d7d7d7] stroke-[0.5]"
      x="119.2"
      y="10"
      width="93.8"
      height="9.4"
      rx="0.6"
    />
    <rect
      class="fill-[#c4c4c4]"
      x="121.6"
      y="13.9"
      width="34"
      height="1.6"
      rx="0.8"
    />
    <circle
      class="fill-none stroke-[#7d7d7d] stroke-[0.6]"
      cx="208"
      cy="14.2"
      r="1.9"
    />
    <path
      class="fill-none stroke-[#7d7d7d] stroke-[0.6]"
      d="M206.6 15.6l-1.4 1.4"
    />
    <circle
      class="fill-none stroke-[#8e8e8e] stroke-[0.6]"
      cx="277.6"
      cy="12.6"
      r="1.6"
    />
    <path
      class="fill-none stroke-[#8e8e8e] stroke-[0.6]"
      d="M274.6 18c0-2 1.4-3.2 3-3.2s3 1.2 3 3.2"
    />
    <path
      class="fill-none stroke-[#8e8e8e] stroke-[0.6]"
      d="M286.2 13.4h5.4v5h-5.4zM287.6 13.4v-.7a1.3 1.3 0 0 1 2.6 0v.7"
    />
    <rect
      class="fill-[#297376]"
      x="293.8"
      y="13.2"
      width="18.5"
      height="2.6"
      rx="0.8"
    />
    <g
      v-for="item in navItems"
      :key="item.x"
    >
      <rect
        class="fill-[#4a545b]"
        :x="item.x"
        y="25.8"
        :width="item.width"
        :height="item.active ? 2.6 : 2.3"
        rx="1"
      />
      <rect
        v-if="item.active"
        class="fill-[#297376]"
        :x="item.x"
        y="30.6"
        :width="item.width"
        height="0.7"
      />
    </g>
    <rect
      class="fill-[#297376]"
      x="4.7"
      y="38.4"
      width="13.8"
      height="2.6"
      rx="1"
    />
    <g
      v-for="filter in filters"
      :key="filter.x"
    >
      <rect
        class="fill-white stroke-[#bdbdbd] stroke-[0.5]"
        :x="filter.x"
        y="47"
        :width="filter.width"
        height="9"
        rx="0.4"
      />
      <rect
        class="fill-[#5a5e61]"
        :x="filter.x + 3"
        y="50.65"
        :width="filter.label"
        height="1.7"
        rx="0.85"
      />
      <path
        class="fill-none stroke-[#4a545b] stroke-[0.5]"
        :d="`M${filter.x + filter.width - 6} 51l1.1 1.1 1.1-1.1`"
      />
    </g>
    <rect
      class="fill-white stroke-[#bdbdbd] stroke-[0.5]"
      x="179.1"
      y="47"
      width="32.4"
      height="9"
      rx="0.4"
    />
    <rect
      class="fill-white stroke-[#8a8a8a] stroke-[0.45]"
      x="182.1"
      y="49.8"
      width="3.4"
      height="3.4"
      rx="0.5"
    />
    <rect
      class="fill-[#5a5e61]"
      x="187.6"
      y="50.65"
      width="20.8"
      height="1.7"
      rx="0.85"
    />
    <rect
      class="fill-white stroke-[#c7c7c7] stroke-[0.5]"
      x="249.5"
      y="62"
      width="60.7"
      height="9.4"
      rx="0.6"
    />
    <rect
      class="fill-[#4a545b]"
      x="252"
      y="65.8"
      width="15.6"
      height="1.8"
      rx="0.9"
    />
    <path
      class="fill-[#4a545b]"
      d="M305.6 66l.8-.9.8.9zM305.6 67.4l.8.9.8-.9z"
    />
    <g
      v-for="product in products"
      :key="product.x"
    >
      <rect
        class="fill-white stroke-[#bfbfbf] stroke-[0.45]"
        :x="product.x"
        y="76"
        width="69.9"
        height="110"
      />
      <rect
        class="fill-[#f1f3f4]"
        :x="product.x + 4"
        y="80"
        width="61.9"
        height="47"
      />
      <circle
        class="fill-[#cfd4d7]"
        :cx="product.x + 42"
        cy="97"
        r="3"
      />
      <path
        class="fill-[#cfd4d7]"
        :d="`M${product.x + 21} 113.5l9-10 5.5 6 4.5-4.5 9.5 8.5z`"
      />
      <rect
        class="fill-[#3cc261]"
        :x="product.x"
        y="83.2"
        width="12.8"
        height="7.2"
      />
      <rect
        class="fill-white"
        :x="product.x + 2.4"
        y="86"
        width="8"
        height="1.6"
        rx="0.8"
      />
      <rect
        v-for="(width, line) in product.titles"
        :key="line"
        class="fill-[#4a545b]"
        :x="product.x + 4"
        :y="139.3 + line * 5.1"
        :width="width"
        height="3"
        rx="1"
      />
      <template
        v-for="property in product.properties"
        :key="property.x"
      >
        <line
          v-if="property.divider"
          class="stroke-[#4a545b] stroke-[0.4]"
          :x1="product.x + property.x"
          y1="151.2"
          :x2="product.x + property.x"
          y2="154.2"
        />
        <rect
          v-else
          :class="property.value ? 'fill-[#333333]' : 'fill-[#666666]'"
          :x="product.x + property.x"
          y="151.75"
          :width="property.width"
          height="1.9"
          rx="0.9"
        />
      </template>
      <rect
        v-for="line in descriptionLines"
        :key="line.y"
        class="fill-[#6a6a6a]"
        :x="product.x + 4"
        :y="line.y - 0.85"
        :width="line.width"
        height="1.7"
        rx="0.85"
      />
    </g>
  </svg>
</template>
