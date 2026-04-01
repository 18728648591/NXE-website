// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {
        enabled: true,
    },
    devServer: {
        host: "0.0.0.0", // 监听所有网络接口
        port: 8888,
    },
    css: ["~/assets/css/main.css"],
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    i18n: {
        /** Resolve locale files from project root `locales/` (not `i18n/locales/`) */
        restructureDir: ".",
        locales: [
            { code: "zh", language: "zh-CN", file: "zh.json", name: "中文" },
            { code: "en", language: "en-US", file: "en.json", name: "English" },
        ],
        langDir: "locales",
        defaultLocale: "zh",
        strategy: "prefix_except_default",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "i18n_redirected",
            redirectOn: "root",
        },
    },
    app: {
        head: {
            titleTemplate: "%s | NEX Power",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
            ],
            link: [
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
            ],
        },
    },
});
