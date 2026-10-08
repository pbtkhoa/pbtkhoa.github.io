export interface ContactFields {
  name: string
  email: string
  message: string
}

export type ContactField = keyof ContactFields

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

  const fields = reactive<ContactFields>({
    name: '',
    email: '',
    message: '',
  })
  const attempted = shallowRef(false)
  const drafted = shallowRef(false)

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

  function submit(): ContactField | undefined {
    attempted.value = true
    if (firstInvalid.value) {
      drafted.value = false
      return firstInvalid.value
    }
    window.location.href = mailtoLink()
    drafted.value = true
    return undefined
  }

  return {
    fields,
    errors,
    drafted: readonly(drafted),
    submit,
  }
}
