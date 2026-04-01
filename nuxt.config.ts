// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {
        enabled: true, // 开发环境启用
    },
    devServer: {
        host: "0.0.0.0", // 监听所有网络接口
        port: 8888,
    },
    css: ["~/assets/css/main.css"],
    // modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxtjs/sitemap", "@nuxtjs/robots", "@vercel/speed-insights"], // 移除 PWA 模块
    // 性能优化
    nitro: {
        compressPublicAssets: true,
        minify: true,
        prerender: {
            crawlLinks: true,
            routes: ["/robots.txt", "/sitemap.xml"],
        },
        headers: {
            "Cache-Control": "public, max-age=3600, s-maxage=3600",
        },
    },
    routeRules: {
        // 仅在生产环境生效
        "/assets/**": { cache: { maxAge: 60 * 60 * 24 * 365 } },
        "/favicon.ico": { cache: { maxAge: 60 * 60 * 24 * 365 } },
    },
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
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
        loadingIndicator: '~/components/Loading.vue',
        head: {
            titleTemplate: "%s | NEX Power",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                // SEO
                {
                    name: "description",
                    content:
                        "NEX Power - 专业无人机电池解决方案提供商，高倍率聚合物锂电池制造商",
                },
                {
                    name: "keywords",
                    content: "无人机电池,锂电池,高倍率电池,聚合物锂电池",
                },
                { name: "author", content: "NEX Power" },
                { name: "theme-color", content: "#02AD53" },
                // Performance & Security
                { httpEquiv: "X-UA-Compatible", content: "IE=edge" },
                { name: "apple-mobile-web-app-capable", content: "yes" },
                {
                    name: "apple-mobile-web-app-status-bar-style",
                    content: "black-translucent",
                },
                // Open Graph
                {
                    property: "og:title",
                    content: "NEX Power | 无人机电池解决方案",
                },
                {
                    property: "og:description",
                    content:
                        "专业无人机电池解决方案提供商，高倍率聚合物锂电池制造商",
                },
                { property: "og:type", content: "website" },
                { property: "og:locale", content: "zh_CN" },
                // Twitter
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "NEX Power" },
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                { rel: "shortcut icon", href: "/favicon.ico" },
                { rel: "apple-touch-icon", href: "/favicon.ico" },
                // Preconnect to improve performance
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "dns-prefetch", href: "https://cdn.bootcdn.net" },
            ],
        },
    },
    // Sitemap 配置
    sitemap: {
        hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-domain.com', // 请替换为你的实际域名
        gzip: true,
        routes: [
            // 动态新闻页面
            ...require('./data/news.js').newsItems.map(item => `/news/${item.slug}`),
            // 动态产品页面
            ...require('./data/products.js').products.map(item => `/products/${item.slug}`),
            // 动态解决方案页面
            ...require('./data/solutions.js').solutions.map(item => `/solutions/${item.slug}`),
            // 动态技术文章页面
            ...require('./data/techArticles.js').techArticles.map(item => `/tech/${item.slug}`),
        ],
    },
    // Robots 配置
    robots: {
        UserAgent: '*',
        Disallow: ['/admin'], // 如果有需要屏蔽的路径
        Allow: '/',
        Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`,
    },
    // Sitemap 配置
    sitemap: {
        hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://your-domain.com',
        gzip: true,
    },
});
