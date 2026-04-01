/** @typedef {{ id: string; to: string; labelKey: string }} NavItem */

/** @type {NavItem[]} */
export const headerNav = [
  { id: 'home', to: '/', labelKey: 'nav.home' },
  { id: 'products', to: '/products', labelKey: 'nav.products' },
  { id: 'solutions', to: '/solutions', labelKey: 'nav.solutions' },
  { id: 'news', to: '/news', labelKey: 'nav.news' },
  { id: 'tech', to: '/tech', labelKey: 'nav.tech' },
  { id: 'about', to: '/about', labelKey: 'nav.about' },
  { id: 'contact', to: '/contact', labelKey: 'nav.contact' },
]

export const brand = {
  nameZh: '鹤壁市诺信电子有限公司',
  nameEn: 'NEX Power',
  taglineKey: 'brand.tagline',
}

/** public 资源：Nuxt 下以站点根路径引用 */
export const brandLogo = {
  src: '/assets/img/logo.jpg',
  alt: '诺信电子, NEX Power, 无人机电池, 高性能电芯',
}
