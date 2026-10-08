<script setup lang="ts">
import { site } from '~/data/site'
import type { ContactField } from '~/composables/useContactForm'

const { fields, errors, status, submit } = useContactForm({ recipient: site.email })

const emailInput = useTemplateRef<HTMLInputElement>('emailInput')
const messageInput = useTemplateRef<HTMLTextAreaElement>('messageInput')

const sending = computed(() => status.value === 'sending')

const notice = computed(() => {
  switch (status.value) {
    case 'sent':
      return { tone: 'ok', text: `Message sent. I'll reply within one working day.` }
    case 'drafted':
      return { tone: 'info', text: `Your email app should open with the message ready to send. If it doesn't, write to ${site.email}.` }
    case 'failed':
      return { tone: 'error', text: `The message didn't go through. Please write to ${site.email} instead.` }
    default:
      return undefined
  }
})

function describedBy(field: ContactField): string | undefined {
  return errors.value[field] ? `contact-${field}-error` : undefined
}

async function onSubmit() {
  const invalid = await submit()
  if (invalid === 'email') emailInput.value?.focus()
  if (invalid === 'message') messageInput.value?.focus()
}
</script>

<template>
  <form
    class="card contact-form"
    novalidate
    @submit.prevent="onSubmit"
  >
    <div class="field-row">
      <FormField
        id="contact-name"
        label="Your name"
      >
        <input
          id="contact-name"
          v-model="fields.name"
          class="field-control"
          name="name"
          autocomplete="name"
        >
      </FormField>
      <FormField
        id="contact-email"
        label="Work email"
        :error="errors.email"
      >
        <input
          id="contact-email"
          ref="emailInput"
          v-model="fields.email"
          class="field-control"
          type="email"
          name="email"
          autocomplete="email"
          required
          :aria-invalid="errors.email ? 'true' : undefined"
          :aria-describedby="describedBy('email')"
        >
      </FormField>
    </div>

    <FormField
      id="contact-message"
      label="Message"
      :error="errors.message"
    >
      <textarea
        id="contact-message"
        ref="messageInput"
        v-model="fields.message"
        class="field-control"
        name="message"
        rows="5"
        required
        :aria-invalid="errors.message ? 'true' : undefined"
        :aria-describedby="describedBy('message')"
      />
    </FormField>

    <button
      class="btn btn-amber submit"
      type="submit"
      :disabled="sending"
    >
      {{ sending ? 'Sending…' : 'Send message' }}
    </button>

    <div
      class="notice-region"
      role="status"
      aria-live="polite"
    >
      <p
        v-if="notice"
        class="notice"
        :class="`notice-${notice.tone}`"
      >
        {{ notice.text }}
      </p>
    </div>
  </form>
</template>

<style scoped>
.contact-form {
  gap: 16px;
}

.field-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;
}

.submit {
  align-self: flex-start;
}

.submit:disabled {
  opacity: 0.7;
  cursor: progress;
  transform: none;
}

.notice-region:empty {
  display: none;
}

.notice {
  margin: 0;
  padding: 18px;
  border-radius: var(--radius-tile);
  border: 1px solid;
}

.notice-ok {
  background: color-mix(in srgb, var(--color-ok) 18%, var(--color-card));
  border-color: color-mix(in srgb, var(--color-ok) 40%, transparent);
}

.notice-info {
  background: color-mix(in srgb, var(--color-amber) 14%, var(--color-card));
  border-color: color-mix(in srgb, var(--color-amber) 40%, transparent);
}

.notice-error {
  background: color-mix(in srgb, var(--color-error) 14%, var(--color-card));
  border-color: color-mix(in srgb, var(--color-error) 50%, transparent);
}

@media (min-width: 900px) {
  .field-row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
</style>
