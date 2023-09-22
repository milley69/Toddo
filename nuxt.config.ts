// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vueuse/nuxt'],
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    injectPosition: 'first',
    viewer: false,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    dataValue: 'theme',
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Toddo',
      link: [
        { href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css', rel: 'stylesheet' },
        /* PWA */
        { rel: 'icon', sizes: '180x180', href: '/pwa/ios/180.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/pwa/ios/32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/pwa/ios/16.png' },
        { rel: 'manifest', href: '/pwa/site.webmanifest' },
        { rel: 'mask-icon', href: '/pwa/safari-pinned-tab.svg', color: '#5bbad5' },
        { rel: 'shortcut icon', href: '/pwa/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: 'Toddo - to-do list categorized by groups.' },
        /* PWA */
        { name: 'apple-mobile-web-app-title', content: 'Toddo' },
        { name: 'application-name', content: 'Toddo' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/pwa/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
  },
  imports: {
    dirs: ['stores'],
  },
  vite: {
    build: {
      rollupOptions: {
        external: 'NonExistingPath',
      },
    },
  },
})
