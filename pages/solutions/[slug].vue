<script setup>
import { getSolutionBySlug, solutionIndustries } from '~/data/solutions.js'
import { onImgError } from '~/composables/useImgFallback.js'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const solution = getSolutionBySlug(String(route.params.slug))

if (!solution) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

const industryLabel = computed(() => {
  const row = solutionIndustries.find((i) => i.id === solution.industry)
  return row ? t(row.labelKey) : ''
})

useSeoMeta({
  title: () => t(solution.titleKey),
  description: () => t(solution.summaryKey),
})
</script>

<template>
  <div class="bg-white pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <NuxtLink :to="localePath('/solutions')" class="text-sm font-medium text-primary hover:text-primary-hover">
        ← {{ t('common.back') }}
      </NuxtLink>
      <p class="mt-4 text-sm font-medium text-primary">
        {{ industryLabel }}
      </p>
      <h1 class="mt-2 text-3xl font-bold text-gray-900">
        {{ t(solution.titleKey) }}
      </h1>
      <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="overflow-hidden rounded-2xl border border-gray-100 shadow-card">
          <img :src="solution.image" :alt="t(solution.titleKey)" class="aspect-[4/3] w-full object-cover"
            @error="onImgError" />
        </div>
        <div class="space-y-6">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {{ t('solutions.detailTitle') }}
            </h2>
            <p class="mt-2 text-gray-700">
              {{ t(solution.summaryKey) }}
            </p>
          </div>
          <div class="rounded-xl bg-gray-50 p-4">
            <h3 class="text-sm font-semibold text-primary">
              {{ t('solutions.modelsLabel') }}
            </h3>
            <p class="mt-2 text-gray-800">
              {{ t(solution.modelsKey) }}
            </p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900">
              {{ t('solutions.highlightsLabel') }}
            </h3>
            <ul class="mt-3 list-inside list-disc space-y-2 text-gray-700">
              <li v-for="(hk, i) in solution.highlightsKeys" :key="i">
                {{ t(hk) }}
              </li>
            </ul>
          </div>
          <NuxtLink :to="localePath('/contact')"
            class="inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary-hover">
            {{ t('common.consult') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
