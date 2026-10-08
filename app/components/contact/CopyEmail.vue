<script setup lang="ts">
type CopyState = 'idle' | 'copied' | 'failed'

const props = defineProps<{ email: string }>()

const state = shallowRef<CopyState>('idle')
let resetTimer: ReturnType<typeof setTimeout> | undefined

const labels: Record<CopyState, string> = {
  idle: 'Copy email',
  copied: 'Copied',
  failed: 'Copy failed',
}

const announcement = computed(() => {
  if (state.value === 'copied') return `${props.email} copied to the clipboard.`
  if (state.value === 'failed') return 'Copy failed. Select the address and copy it by hand.'
  return ''
})

async function copy() {
  try {
    await navigator.clipboard.writeText(props.email)
    state.value = 'copied'
  }
  catch {
    state.value = 'failed'
  }
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    state.value = 'idle'
  }, 2400)
}

onBeforeUnmount(() => clearTimeout(resetTimer))
</script>

<template>
  <div class="copy-email">
    <button
      type="button"
      class="btn"
      @click="copy"
    >
      {{ labels[state] }}
    </button>
    <span
      class="sr-only"
      aria-live="polite"
    >{{ announcement }}</span>
  </div>
</template>
