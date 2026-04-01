/** @typedef {{ titleKey: string; links: { to: string; labelKey: string }[] }} FooterColumn */

/** @type {FooterColumn[]} */
export const footerColumns = [
  {
    titleKey: 'footer.col.products',
    links: [
      { to: '/products', labelKey: 'footer.link.allProducts' },
      { to: '/solutions', labelKey: 'footer.link.solutions' },
    ],
  },
  {
    titleKey: 'footer.col.support',
    links: [
      { to: '/tech', labelKey: 'footer.link.tech' },
      { to: '/contact', labelKey: 'footer.link.contact' },
    ],
  },
  {
    titleKey: 'footer.col.company',
    links: [
      { to: '/about', labelKey: 'footer.link.about' },
      { to: '/news', labelKey: 'footer.link.news' },
    ],
  },
]

export const footerBrand = {
  nameKey: 'brand.nameZh',
  sloganKey: 'brand.tagline',
}
