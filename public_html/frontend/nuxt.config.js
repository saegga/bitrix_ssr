export default defineNuxtConfig({
    ssr: true, // Включаем SSR
    runtimeConfig: {
      public: {
        apiBase: '/backend/api/', // API путь
        domain: 'http://dev-test.ru:3000'
      },
    },
    app: {
      head: {
        title: 'Мой сайт на Nuxt',
        meta: [
          { name: 'description', content: 'Сайт на Nuxt 3 с SSR и Bitrix API' },
        ],
 /*       link: [
          { rel: 'stylesheet', href: '/assets/css/main.css' },
        ],*/
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
        host: '0.0.0.0',
        port: '3000',
        proxy: {
          '/backend/api/': {
            target: 'http://nginx', // API Bitrix через Nginx
            changeOrigin: true,
            secure: false,
            header: {
              host: 'localhost'
            }
          },
/*          '/bitrix': {
            target: 'http://nginx',
            changeOrigin: true,
            secure: false,
            header: {
              host: 'local            }
          },
          '/index.php': {
            target: 'http://nginx',
            changeOrigin: true,
            secure: false,
            header: {
              host: 'localhost'
            }
          }*/
        },
      },
    },
    nitro: {
      preset: 'node-server', // Поддержка SSR
    },
});