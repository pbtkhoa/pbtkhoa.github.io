import tailwindcss from '@tailwindcss/vite'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'

const themeBootstrap = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){t=null}if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t})()`

export default defineNuxtConfig({
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxt/eslint'],
  ssr: true,
  devtools: { enabled: true },
  app: {
    baseURL,
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Full-stack software engineer in Vietnam building Shopware stores, Laravel and Symfony apps and Vue front ends for teams around the world.' },
        { name: 'author', content: 'Phạm Bá Tuấn Khoa' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Khoa Phạm' },
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
  runtimeConfig: {
    public: {
      formEndpoint: '',
    },
  },
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
      subsets: ['latin', 'latin-ext', 'vietnamese'],
    },
    families: [
      {
        name: 'Fraunces',
        provider: 'google',
        weights: [400, 600, 700],
        global: true,
        providerOptions: { google: { experimental: { variableAxis: { opsz: [['9', '144']] } } } },
      },
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [400, 500, 600, 700], global: true },
    ],
  },
  image: {
    quality: 82,
  },
})
