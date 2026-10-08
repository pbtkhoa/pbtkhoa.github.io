<script setup lang="ts">
const tickets = [
  { status: 'f-ok', width: 44 },
  { status: 'f-accent', width: 36 },
  { status: 'f-violet', width: 48 },
  { status: 'f-accent', width: 30 },
  { status: 'f-down', width: 40 },
  { status: 'f-ok', width: 34 },
]
const days = [0, 1, 2, 3, 4]
const entries = [
  { row: 0, start: 0.1, span: 1.6, tone: 'f-violet' },
  { row: 0, start: 2.2, span: 1.1, tone: 'f-accent' },
  { row: 1, start: 0.6, span: 2.1, tone: 'f-accent' },
  { row: 2, start: 1.2, span: 1.4, tone: 'f-ok' },
  { row: 2, start: 3.1, span: 1.6, tone: 'f-violet' },
  { row: 3, start: 0.2, span: 1.0, tone: 'f-down' },
  { row: 3, start: 2.6, span: 1.5, tone: 'f-accent' },
  { row: 4, start: 1.6, span: 2.4, tone: 'f-violet' },
  { row: 5, start: 0.4, span: 1.3, tone: 'f-ok' },
  { row: 5, start: 3.0, span: 0.9, tone: 'f-accent' },
]
const dayWidth = 38
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
      width="106"
      height="180"
    />
    <rect
      class="f-card s-line"
      x="10"
      y="10"
      width="86"
      height="26"
      rx="7"
    />
    <circle
      class="f-accent"
      cx="25"
      cy="23"
      r="8"
    />
    <path
      class="f-on-accent"
      d="M22.5 19v8l6-4z"
    />
    <rect
      class="f-strong"
      x="38"
      y="19"
      width="14"
      height="8"
      rx="2"
    />
    <rect
      class="f-strong"
      x="56"
      y="19"
      width="14"
      height="8"
      rx="2"
    />
    <rect
      class="f-strong"
      x="74"
      y="19"
      width="14"
      height="8"
      rx="2"
    />
    <g
      v-for="(ticket, index) in tickets"
      :key="index"
    >
      <circle
        :class="ticket.status"
        cx="16"
        :cy="52 + index * 21"
        r="3"
      />
      <rect
        class="f-accent-soft"
        x="24"
        :y="49 + index * 21"
        width="16"
        height="6"
        rx="2"
      />
      <rect
        class="f-muted"
        x="44"
        :y="50 + index * 21"
        :width="ticket.width"
        height="4"
        rx="2"
      />
    </g>
    <rect
      v-for="day in days"
      :key="`label-${day}`"
      class="f-muted"
      :x="124 + day * dayWidth"
      y="12"
      width="18"
      height="4"
      rx="2"
    />
    <line
      v-for="day in [0, 1, 2, 3, 4, 5]"
      :key="`grid-${day}`"
      class="s-line"
      :x1="118 + day * dayWidth"
      y1="24"
      :x2="118 + day * dayWidth"
      y2="172"
    />
    <rect
      v-for="(entry, index) in entries"
      :key="`entry-${index}`"
      :class="entry.tone"
      :x="118 + entry.start * dayWidth"
      :y="32 + entry.row * 23"
      :width="entry.span * dayWidth"
      height="13"
      rx="4"
    />
    <line
      class="s-accent"
      x1="244"
      y1="22"
      x2="244"
      y2="172"
    />
    <circle
      class="f-accent"
      cx="244"
      cy="22"
      r="3"
    />
  </svg>
</template>
