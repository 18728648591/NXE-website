<script setup>
import { getProductBySlug } from '~/data/products.js'
import { onImgError } from '~/composables/useImgFallback.js'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const product = getProductBySlug(String(route.params.slug))

if (!product) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

useSeoMeta({
  title: () => t(product.nameKey),
  description: () => t(product.summaryKey),
  ogTitle: () => t(product.nameKey),
  ogDescription: () => t(product.summaryKey),
})
</script>

<template>
  <div class="bg-white pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <NuxtLink :to="localePath('/products')" class="text-sm font-medium text-primary hover:text-primary-hover">
        ← {{ t('common.back') }}
      </NuxtLink>
      <div class="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-card">
          <img :src="product.image" :alt="t(product.nameKey)" class="aspect-square w-full object-cover sm:aspect-[4/3]"
            @error="onImgError" />
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-900">
            {{ t(product.nameKey) }}
          </h1>
          <p class="mt-4 text-gray-600">
            {{ t(product.summaryKey) }}
          </p>
          <div class="mt-6 rounded-xl bg-gray-50 p-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-primary">
              {{ t('products.specsLabel') }}
            </h2>
            <p class="mt-2 text-gray-800">
              {{ t(product.specsKey) }}
            </p>
          </div>
          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="(fk, i) in product.featuresKeys" :key="i"
              class="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {{ t(fk) }}
            </span>
          </div>
          <NuxtLink :to="localePath('/contact')"
            class="mt-10 inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover">
            {{ t('common.consult') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
