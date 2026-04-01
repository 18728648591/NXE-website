<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.home'),
  description: () => t('hero.subtitle'),
  ogTitle: () => `${t('nav.home')} | NEX Power`,
  ogDescription: () => t('hero.subtitle'),
})
</script>

<template>
  <div>
    冉
    <HeroBanner />
    <ProductSection />
    <SolutionSection />
    <AboutSection />
    <AdvantageSection />
    <NewsSection />
    <!-- <TechArticleSection /> -->
    <PartnerSection />
    <ContactCTA />
  </div>
</template>
