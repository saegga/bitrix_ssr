export default defineNuxtConfig({
    ssr: true, // Включаем SSR
    runtimeConfig: {
      public: {
        apiBase: process.env.API_BASE || '/backend/api', // API путь
      },
    },
    app: {
      head: {
        title: 'Мой сайт на Nuxt',
        meta: [
          { name: 'description', content: 'Сайт на Nuxt 3 с SSR и Bitrix API' },
        ],
        link: [
          { rel: 'stylesheet', href: '/assets/css/main.css' },
        ],
      },
    },
    css: [
      '@/assets/css/main.css', // Подключение стилей
    ],
    build: {
      transpile: ['@vueuse/core'],
    },
    vite: {
      server: {
        proxy: {
          '/backend': {
            target: 'http://nginx', // API Bitrix через Nginx
            changeOrigin: true,
          },
        },
      },
    },
    nitro: {
      preset: 'node-server', // Поддержка SSR
    },
});