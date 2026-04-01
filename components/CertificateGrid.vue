<script setup>
import { certificates } from '~/data/certificates.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        {{ t('about.certTitle') }}
      </h2>
      <div
        class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <figure
          v-for="c in certificates"
          :key="c.id"
          class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card"
        >
          <img
            :src="c.image"
            :alt="t(c.titleKey)"
            class="aspect-[3/4] w-full object-cover"
            @error="onImgError"
          />
          <figcaption class="p-3 text-center text-sm font-medium text-gray-800">
            {{ t(c.titleKey) }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
