import tailwindcss from '@tailwindcss/vite'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

const themeBootstrap = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){t=null}if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t})()`

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/eslint'],
  ssr: true,
  devtools: { enabled: true },
  app: {
    baseURL,
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      enterActiveClass: 'motion-safe:transition-opacity motion-safe:duration-350',
      enterFromClass: 'opacity-40',
    },
    head: {
      htmlAttrs: { lang: 'en', class: 'scroll-pt-21 scheme-light dark:scheme-dark motion-safe:scroll-smooth [&::view-transition-new(root)]:animate-none [&::view-transition-new(root)]:mix-blend-normal [&::view-transition-old(root)]:animate-none [&::view-transition-old(root)]:mix-blend-normal' },
      bodyAttrs: { class: 'm-0 overflow-x-clip bg-bg font-sans text-[clamp(1rem,0.94rem+0.22vw,1.125rem)]/[1.65] text-fg antialiased selection:bg-accent/30' },
      meta: [
        { name: 'description', content: 'Full-stack software engineer in Vietnam building Shopware stores, PHP and Node.js back ends and JavaScript front ends for teams around the world.' },
        { name: 'author', content: 'Pham Ba Tuan Khoa' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Khoa Pham' },
      ],
      link: [
        { rel: 'icon', href: `${baseURL}favicon.ico`, sizes: '48x48' },
        { rel: 'apple-touch-icon', href: `${baseURL}apple-touch-icon.png` },
      ],
      script: [
        { innerHTML: themeBootstrap, tagPosition: 'head', tagPriority: 'critical' },
      ],
    },
  },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/services', '/work', '/about', '/contact', '/privacy'],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    defaults: {
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
    families: [
      {
        name: 'Bricolage Grotesque',
        weights: ['400 800'],
        fallbacks: ['Arial'],
        providerOptions: { google: { experimental: { variableAxis: { opsz: [['12', '96']] } } } },
      },
      { name: 'Geist', weights: ['400 700'], fallbacks: ['Arial'] },
    ],
  },
  image: {
    quality: 82,
  },
})
