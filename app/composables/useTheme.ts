export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'
const REVEAL_MS = 650

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'light')
  let systemQuery: MediaQueryList | undefined

  function followSystem(event: MediaQueryListEvent) {
    if (readStorage(STORAGE_KEY)) return
    theme.value = event.matches ? 'dark' : 'light'
    applyTheme(theme.value)
  }

  onMounted(() => {
    theme.value = currentTheme()
    systemQuery = matchMedia('(prefers-color-scheme: dark)')
    systemQuery.addEventListener('change', followSystem)
  })

  onBeforeUnmount(() => {
    systemQuery?.removeEventListener('change', followSystem)
  })

  function commit(next: Theme) {
    theme.value = next
    applyTheme(next)
    writeStorage(STORAGE_KEY, next)
  }

  function toggle(event?: MouseEvent) {
    const next: Theme = theme.value === 'light' ? 'dark' : 'light'
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduce) {
      commit(next)
      return
    }
    const x = event?.clientX || innerWidth - 40
    const y = event?.clientY || 34
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    const transition = document.startViewTransition(() => commit(next))
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: REVEAL_MS, easing: 'cubic-bezier(.6,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
      )
    }).catch(() => {})
  }

  return { theme: readonly(theme), toggle }
}
