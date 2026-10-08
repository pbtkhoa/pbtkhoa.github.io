<script setup lang="ts">
const items = [
  { y: 112, name: 46 },
  { y: 132, name: 30 },
  { y: 152, name: 36 },
  { y: 172, name: 58 },
  { y: 192, name: 40 },
  { y: 212, name: 50 },
  { y: 232, name: 34 },
]
const courses = [
  { y: 82, state: 'idle' },
  { y: 112, state: 'idle' },
  { y: 142, state: 'idle' },
  { y: 172, state: 'idle' },
  { y: 202, state: 'active' },
  { y: 232, state: 'idle' },
  { y: 262, state: 'alert' },
  { y: 292, state: 'idle' },
]
const courseFill: Record<string, string> = {
  idle: 'fill-[#aef656]',
  active: 'fill-[#12a55e]',
  alert: 'fill-[#ff0d0d]',
}
const bottomButtons = [0, 45, 90, 135]
</script>

<template>
  <svg
    viewBox="0 0 180 360"
    preserveAspectRatio="xMidYMid meet"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect
      class="fill-white"
      width="180"
      height="360"
    />
    <rect
      class="fill-[#265119]"
      width="180"
      height="12"
    />
    <rect
      class="fill-white/85"
      x="10"
      y="4"
      width="16"
      height="4"
      rx="2"
    />
    <rect
      v-for="offset in [146, 155, 164]"
      :key="offset"
      class="fill-white/85"
      :x="offset"
      y="4"
      width="6"
      height="4"
      rx="1"
    />
    <rect
      class="fill-[#aef656]"
      y="12"
      width="180"
      height="36"
    />
    <path
      class="fill-none stroke-[#1c3a10] stroke-[1.8]"
      d="M10 23h12M10 29h12M10 35h12"
    />
    <rect
      class="fill-[#1c3a10]"
      x="58"
      y="20"
      width="64"
      height="6"
      rx="3"
    />
    <rect
      class="fill-[#1c3a10]"
      x="74"
      y="32"
      width="32"
      height="6"
      rx="3"
    />
    <path
      class="fill-[#f5c518] stroke-[#1c3a10] stroke-[0.8]"
      d="M146 22l2.4 4.9 5.4.8-3.9 3.8.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.9-3.8 5.4-.8z"
    />
    <path
      class="fill-none stroke-[#1c3a10] stroke-[1.8]"
      d="M174 30h-10m4-4-4 4 4 4"
    />
    <rect
      class="fill-[#265119]"
      y="48"
      width="180"
      height="16"
    />
    <rect
      class="fill-[#aef656]"
      x="6"
      y="51"
      width="10"
      height="10"
      rx="2"
    />
    <rect
      class="fill-[#ff0d0d]"
      x="20"
      y="51"
      width="10"
      height="10"
      rx="2"
    />
    <rect
      class="fill-white/80"
      x="36"
      y="54"
      width="44"
      height="4"
      rx="2"
    />
    <rect
      class="fill-white/80"
      x="132"
      y="54"
      width="22"
      height="4"
      rx="2"
    />
    <path
      class="fill-none stroke-white/80 stroke-[1.4]"
      d="M162 54l3 3 3-3"
    />
    <rect
      class="fill-[#aef656]"
      y="64"
      width="180"
      height="16"
    />
    <g
      v-for="offset in [6, 62, 120]"
      :key="offset"
    >
      <circle
        class="fill-[#6ea832]"
        :cx="offset + 6"
        cy="72"
        r="5"
      />
      <rect
        class="fill-[#1c3a10]/70"
        :x="offset + 14"
        y="70"
        width="34"
        height="4"
        rx="2"
      />
    </g>
    <rect
      class="fill-[#eeeeee]"
      y="80"
      width="144"
      height="16"
    />
    <rect
      class="fill-[#333333]"
      x="8"
      y="86"
      width="30"
      height="4"
      rx="2"
    />
    <rect
      class="fill-[#8bc34a]"
      x="4"
      y="94"
      width="38"
      height="2"
    />
    <rect
      v-for="offset in [52, 92]"
      :key="offset"
      class="fill-[#9e9e9e]"
      :x="offset"
      y="86"
      width="28"
      height="4"
      rx="2"
    />
    <rect
      class="fill-[#e0e0e0]"
      y="96"
      width="144"
      height="14"
    />
    <rect
      v-for="offset in [8, 52, 92]"
      :key="offset"
      :class="offset === 8 ? 'fill-[#333333]' : 'fill-[#9e9e9e]'"
      :x="offset"
      y="101"
      width="30"
      height="4"
      rx="2"
    />
    <g
      v-for="item in items"
      :key="item.y"
    >
      <rect
        class="fill-[#4a4a4a]"
        x="8"
        :y="item.y + 6"
        :width="item.name"
        height="4"
        rx="2"
      />
      <rect
        class="fill-[#4a4a4a]"
        x="110"
        :y="item.y + 6"
        width="24"
        height="4"
        rx="2"
      />
      <line
        class="stroke-[#e6e6e6]"
        x1="0"
        :y1="item.y + 18"
        x2="144"
        :y2="item.y + 18"
      />
    </g>
    <g
      v-for="course in courses"
      :key="course.y"
    >
      <rect
        :class="courseFill[course.state]"
        x="144"
        :y="course.y"
        width="36"
        height="30"
      />
      <line
        class="stroke-white"
        x1="144"
        :y1="course.y"
        x2="180"
        :y2="course.y"
      />
      <rect
        :class="course.state === 'idle' ? 'fill-[#1c3a10]' : 'fill-white'"
        x="159"
        :y="course.y + 12"
        width="6"
        height="6"
        rx="1.5"
      />
    </g>
    <line
      class="stroke-[#d6d6d6]"
      x1="144"
      y1="80"
      x2="144"
      y2="322"
    />
    <circle
      class="fill-[#9bce35]"
      cx="124"
      cy="302"
      r="12"
    />
    <path
      class="fill-none stroke-white stroke-[1.6]"
      d="M117 304c4-1 7-4 9-8m-9 8c4 1 8 0 11-3m-2-5 6-2"
    />
    <rect
      class="fill-[#b1ee5a]"
      y="330"
      width="180"
      height="30"
    />
    <g
      v-for="offset in bottomButtons"
      :key="offset"
    >
      <line
        v-if="offset > 0"
        class="stroke-white"
        :x1="offset"
        y1="330"
        :x2="offset"
        y2="360"
      />
      <rect
        class="fill-[#1c3a10]/80"
        :x="offset + 12"
        y="343"
        width="21"
        height="4"
        rx="2"
      />
    </g>
  </svg>
</template>
