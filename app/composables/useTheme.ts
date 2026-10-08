export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')
  let systemQuery: MediaQueryList | undefined

  function followSystem(event: MediaQueryListEvent) {
    if (readStorage(STORAGE_KEY)) return
    theme.value = event.matches ? 'light' : 'dark'
    applyTheme(theme.value)
  }

  onMounted(() => {
    theme.value = currentTheme()
    systemQuery = matchMedia('(prefers-color-scheme: light)')
    systemQuery.addEventListener('change', followSystem)
  })

  onBeforeUnmount(() => {
    systemQuery?.removeEventListener('change', followSystem)
  })

  function toggle() {
    const next: Theme = theme.value === 'light' ? 'dark' : 'light'
    theme.value = next
    applyTheme(next)
    writeStorage(STORAGE_KEY, next)
  }

  return { theme: readonly(theme), toggle }
}
