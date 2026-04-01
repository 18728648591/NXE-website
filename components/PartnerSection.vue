<script setup>
import { partners } from '~/data/partners.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          {{ t('sections.partners') }}
        </h2>
        <p class="mt-2 text-gray-600">
          {{ t('sections.partnersDesc') }}
        </p>
      </div>
      <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div v-for="p in partners" :key="p.id"
          class="flex items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-card">
          <img :src="p.logo" :alt="p.name" class="max-h-12 w-auto object-contain transition" @error="onImgError" />
        </div>
      </div>
    </div>
  </section>
</template>
