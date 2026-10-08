<script setup lang="ts">
interface Ticket {
  y: number
  title: number
  done: boolean
  priority: 'medium' | 'high' | 'low'
}

const sidebar = [
  { y: 32, width: 26 },
  { label: true, y: 41, width: 16 },
  { y: 48, width: 22 },
  { y: 55, width: 18 },
  { y: 62, width: 26 },
  { label: true, y: 71, width: 18 },
  { y: 78, width: 20 },
  { y: 85, width: 26 },
  { y: 92, width: 28 },
  { y: 99, width: 30 },
  { label: true, y: 108, width: 16 },
  { y: 115, width: 24 },
  { y: 122, width: 18 },
  { y: 129, width: 30 },
  { label: true, y: 138, width: 18 },
  { y: 145, width: 14 },
  { y: 152, width: 22 },
  { y: 159, width: 20 },
  { y: 166, width: 18 },
]

const columns: { x: number, title: string, titleWidth: number, tickets: Ticket[] }[] = [
  {
    x: 80,
    title: 'fill-[#212529]',
    titleWidth: 14,
    tickets: [
      { y: 54, title: 22, done: true, priority: 'medium' },
      { y: 82, title: 36, done: false, priority: 'high' },
    ],
  },
  {
    x: 158,
    title: 'fill-[#1a56db]',
    titleWidth: 26,
    tickets: [
      { y: 54, title: 40, done: false, priority: 'high' },
      { y: 82, title: 30, done: false, priority: 'medium' },
      { y: 110, title: 34, done: false, priority: 'low' },
    ],
  },
  {
    x: 236,
    title: 'fill-[#28a745]',
    titleWidth: 12,
    tickets: [
      { y: 54, title: 28, done: true, priority: 'low' },
      { y: 82, title: 38, done: true, priority: 'medium' },
      { y: 110, title: 24, done: true, priority: 'medium' },
      { y: 138, title: 32, done: true, priority: 'high' },
    ],
  },
]

const priorityStroke: Record<Ticket['priority'], string> = {
  high: 'stroke-[#dc3545]',
  medium: 'stroke-[#f97316]',
  low: 'stroke-[#28a745]',
}
</script>

<template>
  <svg
    viewBox="0 0 320 180"
    preserveAspectRatio="xMidYMid meet"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect
      class="fill-[#f3f6fb]"
      width="320"
      height="180"
    />
    <rect
      class="fill-[#f8f9fa]"
      width="62"
      height="180"
    />
    <line
      class="stroke-[#e9ecef]"
      x1="62"
      y1="0"
      x2="62"
      y2="180"
    />
    <circle
      class="fill-none stroke-[#4caf50] stroke-[1.6]"
      cx="10"
      cy="9"
      r="4.5"
    />
    <path
      class="fill-none stroke-[#8bc34a] stroke-[1.4]"
      d="M10 6.5V9l1.8 1.2M2.5 7h1.5M2.5 10h1.5"
    />
    <rect
      class="fill-[#212529]"
      x="18"
      y="6.5"
      width="36"
      height="5"
      rx="1.5"
    />
    <rect
      class="fill-[#212529]"
      x="5"
      y="19.5"
      width="30"
      height="3"
      rx="1.5"
    />
    <path
      class="fill-[#212529]"
      d="M52 19.5h5l-2.5 3z"
    />
    <g
      v-for="item in sidebar"
      :key="item.y"
    >
      <rect
        v-if="item.label"
        class="fill-[#6c757d]"
        x="3"
        :y="item.y - 1"
        :width="item.width"
        height="2"
        rx="1"
      />
      <template v-else>
        <rect
          class="fill-[#495057]"
          x="8"
          :y="item.y - 2"
          width="4"
          height="4"
          rx="1"
        />
        <rect
          class="fill-[#212529]"
          x="16"
          :y="item.y - 1.25"
          :width="item.width"
          height="2.5"
          rx="1.25"
        />
      </template>
    </g>
    <rect
      class="fill-white"
      x="63"
      width="257"
      height="14"
    />
    <line
      class="stroke-[#e9ecef]"
      x1="63"
      y1="14"
      x2="320"
      y2="14"
    />
    <path
      class="fill-none stroke-[#6c757d] stroke-[0.9]"
      d="M68 5h5M68 7h4M68 9h5"
    />
    <circle
      class="fill-[#495057]"
      cx="81"
      cy="7"
      r="3"
    />
    <rect
      class="fill-[#212529]"
      x="86"
      y="5.75"
      width="20"
      height="2.5"
      rx="1.25"
    />
    <path
      class="fill-[#6c757d]"
      d="M300 4.5l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z"
    />
    <path
      class="fill-[#28a745]"
      d="M312 4.5a2.6 2.6 0 0 1 2.6 2.6v2l1 1.4h-7.2l1-1.4v-2a2.6 2.6 0 0 1 2.6-2.6zm-1 7h2a1 1 0 0 1-2 0z"
    />
    <rect
      class="fill-white stroke-[#e5e7eb] stroke-[0.6]"
      x="80"
      y="20"
      width="226"
      height="14"
      rx="1.5"
    />
    <rect
      class="fill-[#111111]"
      x="84"
      y="24.5"
      width="18"
      height="5"
      rx="1.5"
    />
    <rect
      class="fill-[#212529]"
      x="108"
      y="24.5"
      width="44"
      height="5"
      rx="1.5"
    />
    <rect
      class="fill-[#e9ecef]"
      x="236"
      y="23"
      width="7"
      height="8"
      rx="1"
    />
    <circle
      class="fill-none stroke-[#495057] stroke-[0.7]"
      cx="239.3"
      cy="26.6"
      r="1.4"
    />
    <rect
      class="fill-white stroke-[#ced4da] stroke-[0.6]"
      x="243"
      y="23"
      width="38"
      height="8"
      rx="1"
    />
    <rect
      class="fill-[#495057]"
      x="246"
      y="25.75"
      width="12"
      height="2.5"
      rx="1.25"
    />
    <rect
      class="fill-[#343a40]"
      x="284"
      y="23"
      width="9"
      height="8"
      rx="1.5"
    />
    <path
      class="fill-white"
      d="M285.8 25h5.4l-2.1 2.4v1.8l-1.2.6v-2.4z"
    />
    <rect
      class="fill-[#e9ecef]"
      x="295"
      y="23"
      width="9"
      height="8"
      rx="1.5"
    />
    <path
      class="fill-none stroke-[#212529] stroke-[1]"
      d="M299.5 25v4M297.5 27h4"
    />
    <g
      v-for="column in columns"
      :key="column.x"
    >
      <rect
        class="fill-white stroke-[#e5e7eb] stroke-[0.6]"
        :x="column.x"
        y="40"
        width="70"
        height="136"
        rx="1.5"
      />
      <rect
        :class="column.title"
        :x="column.x + 5"
        y="45"
        :width="column.titleWidth"
        height="3"
        rx="1.25"
      />
      <rect
        class="fill-none stroke-[#6c757d] stroke-[0.6]"
        :x="column.x + 56"
        y="45"
        width="5"
        height="3.2"
        rx="0.6"
      />
      <rect
        class="fill-[#6c757d]"
        :x="column.x + 63"
        y="45"
        width="2.5"
        height="3.2"
        rx="0.8"
      />
      <g
        v-for="ticket in column.tickets"
        :key="ticket.y"
      >
        <rect
          class="fill-white stroke-[#dee2e6] stroke-[0.6]"
          :x="column.x + 5"
          :y="ticket.y"
          width="60"
          height="24"
          rx="1.5"
        />
        <rect
          class="fill-[#6c757d]"
          :x="column.x + 9"
          :y="ticket.y + 4"
          width="11"
          height="2"
          rx="1"
        />
        <path
          class="fill-none stroke-[#adb5bd] stroke-[0.6]"
          :d="`M${column.x + 54} ${ticket.y + 3.5}l.8 1.6 1.7.2-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.2z`"
        />
        <circle
          v-for="dot in [0, 1.6, 3.2]"
          :key="dot"
          class="fill-[#adb5bd]"
          :cx="column.x + 59 + dot"
          :cy="ticket.y + 5"
          r="0.5"
        />
        <rect
          class="fill-[#212529]"
          :x="column.x + 9"
          :y="ticket.y + 10"
          :width="ticket.title"
          height="2.5"
          rx="1.25"
        />
        <rect
          :class="ticket.done ? 'fill-[#2563eb]' : 'fill-white stroke-[#adb5bd] stroke-[0.6]'"
          :x="column.x + 9"
          :y="ticket.y + 16"
          width="5"
          height="5"
          rx="1"
        />
        <path
          v-if="ticket.done"
          class="fill-none stroke-white stroke-[0.9]"
          :d="`M${column.x + 10.2} ${ticket.y + 18.6}l1.2 1.2 2-2.3`"
        />
        <path
          class="fill-none stroke-[1]"
          :class="priorityStroke[ticket.priority]"
          :d="`M${column.x + 17} ${ticket.y + 18.5}h4.5m-1.8-1.8 1.8 1.8-1.8 1.8`"
        />
      </g>
    </g>
  </svg>
</template>
