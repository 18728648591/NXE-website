/** @typedef {{ id: string; slug: string; industry: string; titleKey: string; summaryKey: string; image: string; modelsKey: string; highlightsKeys: string[] }} Solution */

/** @type {Solution[]} */
export const solutions = [
    {
        id: "s1",
        slug: "agriculture-uav",
        industry: "agriculture",
        titleKey: "solutions.items.s1.title",
        summaryKey: "solutions.items.s1.summary",
        image: "/assets/images/product.jpg",
        modelsKey: "solutions.items.s1.models",
        highlightsKeys: [
            "solutions.items.s1.h1",
            "solutions.items.s1.h2",
            "solutions.items.s1.h3",
        ],
    },
    {
        id: "s2",
        slug: "survey-mapping",
        industry: "survey",
        titleKey: "solutions.items.s2.title",
        summaryKey: "solutions.items.s2.summary",
        image: "/assets/images/product.jpg",
        modelsKey: "solutions.items.s2.models",
        highlightsKeys: ["solutions.items.s2.h1", "solutions.items.s2.h2"],
    },
    {
        id: "s3",
        slug: "logistics-delivery",
        industry: "logistics",
        titleKey: "solutions.items.s3.title",
        summaryKey: "solutions.items.s3.summary",
        image: "/assets/images/product.jpg",
        modelsKey: "solutions.items.s3.models",
        highlightsKeys: ["solutions.items.s3.h1", "solutions.items.s3.h2"],
    },
    {
        id: "s4",
        slug: "inspection-power",
        industry: "inspection",
        titleKey: "solutions.items.s4.title",
        summaryKey: "solutions.items.s4.summary",
        image: "/assets/images/product.jpg",
        modelsKey: "solutions.items.s4.models",
        highlightsKeys: ["solutions.items.s4.h1", "solutions.items.s4.h2"],
    },
];

export const solutionIndustries = [
    { id: "all", labelKey: "solutions.filter.all" },
    { id: "agriculture", labelKey: "solutions.filter.agriculture" },
    { id: "survey", labelKey: "solutions.filter.survey" },
    { id: "logistics", labelKey: "solutions.filter.logistics" },
    { id: "inspection", labelKey: "solutions.filter.inspection" },
];

export function getSolutionBySlug(slug) {
    return solutions.find((s) => s.slug === slug) ?? null;
}
