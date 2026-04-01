/**
 * 首页 Hero 幻灯片：每项含 image, title, subtitle, cta
 * title / subtitle / cta[].label 为 i18n 键（locales 内文案）
 *
 * @typedef {{ label: string; to: string; variant?: 'primary' | 'outline' }} HeroCta
 * @typedef {{ image: string; title: string; subtitle: string; cta: HeroCta[] }} HeroSlide
 */

/** @type {HeroSlide[]} */
export const slides = [
  {
    image: '/assets/img/banner_height_adjust.png',
    title: 'hero.title',
    subtitle: 'hero.subtitle',
    cta: [
      { label: 'hero.ctaPrimary', to: '/products', variant: 'primary' },
      { label: 'hero.ctaSecondary', to: '/contact', variant: 'outline' },
    ],
  },
  {
    image: '/assets/img/pic_train.png',
    title: 'hero.slide2.title',
    subtitle: 'hero.slide2.subtitle',
    cta: [{ label: 'hero.slide2.cta', to: '/solutions', variant: 'primary' }],
  },
  {
    image: '/assets/img/pic_109.png',
    title: 'hero.slide3.title',
    subtitle: 'hero.slide3.subtitle',
    cta: [{ label: 'hero.slide3.cta', to: '/contact', variant: 'primary' }],
  },
]
