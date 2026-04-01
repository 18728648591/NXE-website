<script setup>
import { companyIntro } from '~/data/company.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="order-2 lg:order-1">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            {{ t(companyIntro.titleKey) }}
          </h2>
          <p class="mt-4 text-base leading-loose text-gray-600">
            {{ t(companyIntro.bodyKey) }}
          </p>
        </div>
        <div class="order-1 overflow-hidden rounded-2xl border border-gray-100 shadow-card lg:order-2">
          <img :src="companyIntro.image" alt="诺信电子, NEX Power, 无人机电池, 高性能电芯" class="aspect-[4/3] w-full object-cover"
            @error="onImgError" />
        </div>
      </div>
    </div>
  </section>
</template>
