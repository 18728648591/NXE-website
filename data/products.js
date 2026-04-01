/** @typedef {{ id: string; slug: string; nameKey: string; category: string; image: string; summaryKey: string; specsKey: string; featuresKeys: string[] }} Product */

/** @type {Product[]} */
export const products = [
    {
        id: "p1",
        slug: "high-rate-lipo-6s",
        nameKey: "products.items.p1.name",
        category: "high_rate",
        image: "/assets/images/product.jpg",
        summaryKey: "products.items.p1.summary",
        specsKey: "products.items.p1.specs",
        featuresKeys: [
            "products.items.p1.f1",
            "products.items.p1.f2",
            "products.items.p1.f3",
        ],
    },
    {
        id: "p2",
        slug: "smart-bms-pack",
        nameKey: "products.items.p2.name",
        category: "smart",
        image: "/assets/images/product.jpg",
        summaryKey: "products.items.p2.summary",
        specsKey: "products.items.p2.specs",
        featuresKeys: [
            "products.items.p2.f1",
            "products.items.p2.f2",
            "products.items.p2.f3",
        ],
    },
    {
        id: "p3",
        slug: "agri-drone-battery",
        nameKey: "products.items.p3.name",
        category: "agri",
        image: "/assets/images/product.jpg",
        summaryKey: "products.items.p3.summary",
        specsKey: "products.items.p3.specs",
        featuresKeys: ["products.items.p3.f1", "products.items.p3.f2"],
    },
    {
        id: "p4",
        slug: "survey-uav-pack",
        nameKey: "products.items.p4.name",
        category: "survey",
        image: "/assets/images/product.jpg",
        summaryKey: "products.items.p4.summary",
        specsKey: "products.items.p4.specs",
        featuresKeys: ["products.items.p4.f1", "products.items.p4.f2"],
    },
    {
        id: "p5",
        slug: "fpv-racing-pack",
        nameKey: "products.items.p5.name",
        category: "fpv",
        image: "/assets/images/product.jpg",
        summaryKey: "products.items.p5.summary",
        specsKey: "products.items.p5.specs",
        featuresKeys: ["products.items.p5.f1", "products.items.p5.f2"],
    },
    {
        id: "p6",
        slug: "custom-oem-pack",
        nameKey: "products.items.p6.name",
        category: "oem",
        image: "/assets/images/product.jpg",
        summaryKey: "products.items.p6.summary",
        specsKey: "products.items.p6.specs",
        featuresKeys: ["products.items.p6.f1", "products.items.p6.f2"],
    },
];

export const productCategories = [
    { id: "all", labelKey: "products.filter.all" },
    { id: "high_rate", labelKey: "products.filter.high_rate" },
    { id: "smart", labelKey: "products.filter.smart" },
    { id: "agri", labelKey: "products.filter.agri" },
    { id: "survey", labelKey: "products.filter.survey" },
    { id: "fpv", labelKey: "products.filter.fpv" },
    { id: "oem", labelKey: "products.filter.oem" },
];

export function getProductBySlug(slug) {
    return products.find((p) => p.slug === slug) ?? null;
}
