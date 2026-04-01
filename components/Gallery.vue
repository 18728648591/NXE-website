<script setup>
import { galleryItems } from '~/data/gallery.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        {{ t('about.galleryTitle') }}
      </h2>
      <div
        class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <figure
          v-for="g in galleryItems"
          :key="g.id"
          class="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card"
        >
          <div class="aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              :src="g.image"
              :alt="t(g.titleKey)"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              @error="onImgError"
            />
          </div>
          <figcaption class="p-3 text-sm text-gray-700">
            {{ t(g.titleKey) }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
