import { joinURL } from 'ufo'

export function usePublicUrl(path: string): string {
  return joinURL(useRuntimeConfig().app.baseURL, path)
}
