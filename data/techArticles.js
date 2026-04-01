/** @typedef {{ id: string; slug: string; titleKey: string; date: string; excerptKey: string; image: string; contentKey: string; tags: string[] }} TechArticle */

/** @type {TechArticle[]} */
export const techArticles = [
    {
        id: "t1",
        slug: "lipo-cell-balancing",
        titleKey: "tech.items.t1.title",
        date: "2026-03-18",
        excerptKey: "tech.items.t1.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "tech.items.t1.content",
        tags: ["bms", "lipo"],
    },
    {
        id: "t2",
        slug: "low-temperature-performance",
        titleKey: "tech.items.t2.title",
        date: "2026-03-05",
        excerptKey: "tech.items.t2.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "tech.items.t2.content",
        tags: ["battery", "environment"],
    },
    {
        id: "t3",
        slug: "fast-charge-safety",
        titleKey: "tech.items.t3.title",
        date: "2026-02-22",
        excerptKey: "tech.items.t3.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "tech.items.t3.content",
        tags: ["safety", "charging"],
    },
    {
        id: "t4",
        slug: "uav-power-budget",
        titleKey: "tech.items.t4.title",
        date: "2026-02-01",
        excerptKey: "tech.items.t4.excerpt",
        image: "/assets/images/product.jpg",
        contentKey: "tech.items.t4.content",
        tags: ["uav", "design"],
    },
];

export const techTags = [
    { id: "all", labelKey: "tech.tags.all" },
    { id: "bms", labelKey: "tech.tags.bms" },
    { id: "lipo", labelKey: "tech.tags.lipo" },
    { id: "battery", labelKey: "tech.tags.battery" },
    { id: "safety", labelKey: "tech.tags.safety" },
    { id: "charging", labelKey: "tech.tags.charging" },
    { id: "uav", labelKey: "tech.tags.uav" },
];

export function getTechBySlug(slug) {
    return techArticles.find((t) => t.slug === slug) ?? null;
}
