<script setup>
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()

defineProps({
  image: {
    type: String,
    default: '/assets/images/about-hero.jpg',
  },
})
</script>

<template>
  <section class="relative overflow-hidden bg-gray-900">
    <div class="absolute inset-0">
      <img
        :src="image"
        alt=""
        class="h-full w-full object-cover opacity-35"
        @error="onImgError"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95" />
    </div>
    <div
      class="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8"
    >
      <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {{ t('about.hero.title') }}
      </h1>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
        {{ t('about.hero.subtitle') }}
      </p>
    </div>
  </section>
</template>
