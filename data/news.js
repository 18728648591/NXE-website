/** @typedef {{ id: string; slug: string; category: string; titleKey: string; date: string; excerptKey: string; image: string; contentKey: string }} NewsItem */

/** @type {NewsItem[]} */
export const newsItems = [
    {
        id: "n1",
        slug: "company-new-production-line",
        category: "company",
        titleKey: "news.items.n1.title",
        date: "2026-03-15",
        excerptKey: "news.items.n1.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "news.items.n1.content",
    },
    {
        id: "n2",
        slug: "industry-battery-standard-update",
        category: "industry",
        titleKey: "news.items.n2.title",
        date: "2026-03-02",
        excerptKey: "news.items.n2.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "news.items.n2.content",
    },
    {
        id: "n3",
        slug: "expo-2026-shenzhen",
        category: "expo",
        titleKey: "news.items.n3.title",
        date: "2026-02-20",
        excerptKey: "news.items.n3.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "news.items.n3.content",
    },
    {
        id: "n4",
        slug: "company-quality-award",
        category: "company",
        titleKey: "news.items.n4.title",
        date: "2026-01-10",
        excerptKey: "news.items.n4.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "news.items.n4.content",
    },
    {
        id: "n5",
        slug: "industry-drone-market-2026",
        category: "industry",
        titleKey: "news.items.n5.title",
        date: "2025-12-28",
        excerptKey: "news.items.n5.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "news.items.n5.content",
    },
];

export const newsCategories = [
    { id: "company", labelKey: "news.category.company" },
    { id: "industry", labelKey: "news.category.industry" },
    { id: "expo", labelKey: "news.category.expo" },
];

export function getNewsBySlug(slug) {
    return newsItems.find((n) => n.slug === slug) ?? null;
}

export function getRelatedNews(slug, limit = 3) {
    const current = getNewsBySlug(slug);
    if (!current) return newsItems.slice(0, limit);
    return newsItems.filter((n) => n.slug !== slug).slice(0, limit);
}
