<script setup lang="ts">
import { site } from '~/data/site'
import type { ContactField } from '~/composables/useContactForm'

const { fields, errors, drafted, submit } = useContactForm({ recipient: site.email })

const emailInput = useTemplateRef<HTMLInputElement>('emailInput')
const messageInput = useTemplateRef<HTMLTextAreaElement>('messageInput')


function controlClass(field: ContactField): string[] {
  return [fieldControlClass, errors.value[field] ? 'border-error' : 'border-line']
}

function describedBy(field: ContactField): string | undefined {
  return errors.value[field] ? `contact-${field}-error` : undefined
}

function onSubmit() {
  const invalid = submit()
  if (invalid === 'email') emailInput.value?.focus()
  if (invalid === 'message') messageInput.value?.focus()
}
</script>

<template>
  <form
    class="flex flex-col gap-4 rounded-card border border-line bg-card p-6.5 text-fg"
    novalidate
    @submit.prevent="onSubmit"
  >
    <div class="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
      <FormField
        id="contact-name"
        label="Your name"
      >
        <input
          id="contact-name"
          v-model="fields.name"
          :class="controlClass('name')"
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
          :class="controlClass('email')"
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
        class="min-h-35 resize-y"
        :class="controlClass('message')"
        name="message"
        rows="5"
        required
        :aria-invalid="errors.message ? 'true' : undefined"
        :aria-describedby="describedBy('message')"
      />
    </FormField>

    <div class="flex flex-wrap items-center gap-x-4 gap-y-2.5">
      <AppButton
        variant="amber"
        type="submit"
        aria-describedby="contact-submit-hint"
      >
        Open in email app
      </AppButton>
      <p
        id="contact-submit-hint"
        class="m-0 flex-[1_1_220px] text-[0.88rem] text-muted"
      >
        Your email app opens with this message filled in, ready to send.
      </p>
    </div>

    <div
      class="empty:hidden"
      role="status"
      aria-live="polite"
    >
      <p
        v-if="drafted"
        class="m-0 rounded-tile border border-amber/40 bg-[color-mix(in_srgb,var(--color-amber)_14%,var(--color-card))] p-4.5"
      >
        If your email app didn't open, write to <strong class="select-all [overflow-wrap:anywhere]">{{ site.email }}</strong>. {{ site.replyPromise }}
      </p>
    </div>
  </form>
</template>
