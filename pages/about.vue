<script setup>
const { t } = useI18n()

useSeoMeta({
  title: () => t('about.title'),
  description: () => t('about.metaDesc'),
})
</script>

<template>
  <div>
    <HeroSection image="/assets/images/about-hero.jpg" />
    <CompanyIntro />
    <Timeline />
    <CertificateGrid />
    <Gallery />
    <HonorList />
  </div>
</template>
