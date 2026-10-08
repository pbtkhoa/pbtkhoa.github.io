export interface ContactFields {
  name: string
  email: string
  message: string
}

export type ContactField = keyof ContactFields

export type ContactStatus = 'idle' | 'sending' | 'sent' | 'drafted' | 'failed'

interface UseContactFormOptions {
  recipient: string
}

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
const MIN_MESSAGE_LENGTH = 10

const ERROR_TEXT: Partial<Record<ContactField, string>> = {
  email: 'Enter an email like name@company.com.',
  message: 'Write a sentence or two about the project.',
}

export function useContactForm(options: UseContactFormOptions) {
  const { recipient } = options
  const { public: { formEndpoint } } = useRuntimeConfig()

  const fields = reactive<ContactFields>({
    name: '',
    email: '',
    message: '',
  })
  const attempted = shallowRef(false)
  const status = shallowRef<ContactStatus>('idle')

  const problems = computed(() => {
    const found: Partial<Record<ContactField, string>> = {}
    if (!EMAIL_PATTERN.test(fields.email.trim())) found.email = ERROR_TEXT.email
    if (fields.message.trim().length < MIN_MESSAGE_LENGTH) found.message = ERROR_TEXT.message
    return found
  })

  const errors = computed(() => (attempted.value ? problems.value : {}))

  const firstInvalid = computed(() => Object.keys(problems.value)[0] as ContactField | undefined)

  function mailtoLink(): string {
    const sender = fields.name.trim() || 'Website visitor'
    const subject = `Project enquiry from ${sender}`
    const body = [
      fields.message.trim(),
      '',
      `Name: ${sender}`,
      `Email: ${fields.email.trim()}`,
    ].join('\n')
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  function reset() {
    fields.name = ''
    fields.email = ''
    fields.message = ''
    attempted.value = false
  }

  async function submit(): Promise<ContactField | undefined> {
    attempted.value = true
    if (firstInvalid.value) {
      status.value = 'idle'
      return firstInvalid.value
    }

    if (!formEndpoint) {
      window.location.href = mailtoLink()
      status.value = 'drafted'
      return undefined
    }

    status.value = 'sending'
    try {
      await $fetch(formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: {
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        },
      })
      status.value = 'sent'
      reset()
    }
    catch {
      status.value = 'failed'
    }
    return undefined
  }

  return {
    fields,
    errors,
    status: readonly(status),
    submit,
  }
}
