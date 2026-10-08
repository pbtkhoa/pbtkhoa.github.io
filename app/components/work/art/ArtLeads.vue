<script setup lang="ts">
const accountItems = [14, 22]
const leadItems = [58, 66.5, 75, 83.5, 92, 100.5, 109, 117.5, 126]
const leadWidths = [40, 34, 28, 46, 36, 30, 26, 22, 38]
const columns = [104, 134, 160, 196, 214, 268, 312]
const rows = [108, 130, 152]
</script>

<template>
  <svg
    viewBox="0 0 320 180"
    preserveAspectRatio="xMidYMid meet"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <defs>
      <linearGradient
        id="kobold-orange"
        x1="0"
        y1="0"
        x2="0"
        y2="1"
      >
        <stop
          offset="0"
          stop-color="#ed8707"
        />
        <stop
          offset="1"
          stop-color="#de3d10"
        />
      </linearGradient>
    </defs>
    <rect
      class="fill-white"
      width="320"
      height="180"
    />
    <rect
      class="fill-[#f2f2f2] stroke-[#e6e6e6] stroke-[0.6]"
      x="10"
      y="6"
      width="82"
      height="24"
      rx="4"
    />
    <g
      v-for="y in accountItems"
      :key="`account-${y}`"
    >
      <path
        class="fill-none stroke-[#009a3d] stroke-[1.2]"
        :d="`M17 ${y - 1.5}l1.6 1.5-1.6 1.5`"
      />
      <rect
        class="fill-[#333333]"
        x="23"
        :y="y - 1.25"
        :width="y === 14 ? 26 : 22"
        height="2.5"
        rx="1.25"
      />
    </g>
    <rect
      class="fill-[#f2f2f2] stroke-[#e6e6e6] stroke-[0.6]"
      x="10"
      y="34"
      width="82"
      height="100"
      rx="4"
    />
    <rect
      class="fill-[#009a3d]"
      x="16"
      y="41"
      width="22"
      height="5"
      rx="1"
    />
    <line
      class="stroke-[#009a3d] stroke-[1.2]"
      x1="16"
      y1="51"
      x2="86"
      y2="51"
    />
    <g
      v-for="(y, index) in leadItems"
      :key="`lead-${y}`"
    >
      <path
        class="fill-none stroke-[#009a3d] stroke-[1.2]"
        :d="`M17 ${y - 1.5}l1.6 1.5-1.6 1.5`"
      />
      <rect
        class="fill-[#333333]"
        x="23"
        :y="y - 1.25"
        :width="leadWidths[index]"
        height="2.5"
        rx="1.25"
      />
    </g>
    <rect
      class="fill-[#ececec]"
      x="10"
      y="140"
      width="82"
      height="36"
      rx="6"
    />
    <rect
      class="fill-[#113c2b]"
      x="18"
      y="146"
      width="40"
      height="4"
      rx="1"
    />
    <rect
      class="fill-[#009a3d]"
      x="18"
      y="152"
      width="34"
      height="4"
      rx="1"
    />
    <rect
      fill="url(#kobold-orange)"
      x="18"
      y="161"
      width="30"
      height="9"
      rx="2"
    />
    <rect
      class="fill-white"
      x="22"
      y="164.5"
      width="18"
      height="2"
      rx="1"
    />
    <rect
      class="fill-[#1a1a1a]"
      x="104"
      y="10"
      width="64"
      height="6"
      rx="1"
    />
    <line
      class="stroke-[#009a3d] stroke-[1.2]"
      x1="104"
      y1="21"
      x2="312"
      y2="21"
    />
    <g
      v-for="y in [27, 45, 63]"
      :key="`field-${y}`"
    >
      <rect
        class="fill-[#1a1a1a]"
        x="104"
        :y="y"
        :width="y === 27 ? 12 : 18"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-white stroke-[#cccccc] stroke-[0.6]"
        x="104"
        :y="y + 5"
        width="208"
        height="9"
        rx="2.5"
      />
    </g>
    <rect
      class="fill-[#333333]"
      x="108"
      y="35"
      width="6"
      height="3"
      rx="1"
    />
    <path
      class="fill-none stroke-[#333333] stroke-[0.8]"
      d="M306 34.5l1.5-1.5 1.5 1.5M306 37.5l1.5 1.5 1.5-1.5"
    />
    <rect
      class="fill-[#333333]"
      x="108"
      y="53"
      width="20"
      height="3"
      rx="1"
    />
    <rect
      class="fill-[#828282]"
      x="104"
      y="82"
      width="20"
      height="8"
      rx="1"
    />
    <rect
      class="fill-white"
      x="108"
      y="85"
      width="12"
      height="2"
      rx="1"
    />
    <rect
      class="fill-[#e6e6e6] stroke-[#cccccc] stroke-[0.6]"
      x="104"
      y="96"
      width="208"
      height="12"
    />
    <rect
      class="fill-none stroke-[#cccccc] stroke-[0.6]"
      x="104"
      y="96"
      width="208"
      height="84"
    />
    <line
      v-for="x in columns.slice(1, -1)"
      :key="`col-${x}`"
      class="stroke-[#cccccc] stroke-[0.6]"
      :x1="x"
      y1="96"
      :x2="x"
      y2="180"
    />
    <rect
      v-for="(x, index) in columns.slice(0, -1)"
      :key="`head-${x}`"
      class="fill-[#333333]"
      :x="x + 4"
      y="100.75"
      :width="[14, 12, 8, 10, 16, 14][index]"
      height="2.5"
      rx="1"
    />
    <g
      v-for="y in rows"
      :key="`row-${y}`"
    >
      <line
        class="stroke-[#cccccc] stroke-[0.6]"
        x1="104"
        :y1="y + 22"
        x2="312"
        :y2="y + 22"
      />
      <rect
        class="fill-[#333333]"
        x="108"
        :y="y + 10"
        width="20"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-[#333333]"
        x="138"
        :y="y + 7"
        width="18"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-[#333333]"
        x="138"
        :y="y + 12"
        width="12"
        height="2.5"
        rx="1"
      />
      <rect
        v-for="offset in [4, 9, 14]"
        :key="`uid-${y}-${offset}`"
        class="fill-[#009933]"
        x="164"
        :y="y + offset"
        :width="offset === 14 ? 18 : 26"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-[#333333]"
        x="218"
        :y="y + 10"
        width="40"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-[#333333]"
        x="272"
        :y="y + 5"
        width="22"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-[#333333]"
        x="272"
        :y="y + 10"
        width="16"
        height="2.5"
        rx="1"
      />
      <rect
        class="fill-[#333333]"
        x="272"
        :y="y + 15"
        width="12"
        height="2.5"
        rx="1"
      />
    </g>
  </svg>
</template>
