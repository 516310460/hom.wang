import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hom Wang',
      meta: [
        { name: 'referrer', content: 'no-referrer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    "@nuxtjs/i18n"
  ],
  pwa: {
    meta: {
      // Generate splash screens for iOS
      mobileAppIOS: true,
      name: 'HomWang',
      author: '516310460@qq.com',
      description: 'HomWang',
      lang: 'en',
    },
    workbox: {
      enabled: true
    }
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  i18n: {
    langDir: 'assets/locales/',
    lazy: true,
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      },
      {
        code: 'zhCN',
        iso: 'zh-CN',
        file: 'zh-CN.json',
        name: '中文简体'
      }
    ],
    // pages: {
    //   about: {
    //     en: '/about-en',
    //     zhCN: '/about-zhCN',
    //   }
    // },
    detectBrowserLanguage: false,
    onBeforeLanguageSwitch: (oldLocale, newLocale, initial, context) => {
      console.log('onBeforeLanguageSwitch', oldLocale, newLocale, initial, context)
    },
    onLanguageSwitched: (oldLocale, newLocale) => {
      console.log('onLanguageSwitched', oldLocale, newLocale)
    },
    vueI18n: {
      // fallbackLocale: "en",
      legacy: false,
      locale: "en",
      // messages: {
      //   en: {
      //     welcome: "Welcome",
      //     home: "Home",
      //     layouts: {
      //       title: 'website'
      //     }
      //   },
      //   zhCN: {
      //     welcome: "欢迎",
      //     home: "首页",
      //     layouts: {
      //       title: '网站'
      //     }
      //   },
      // },
    },
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
})