<script setup>
import { solutions } from '~/data/solutions.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
const localePath = useLocalePath()

const list = computed(() => solutions.slice(0, 3))
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ t('sections.solutions') }}
          </h2>
          <p class="mt-2 max-w-2xl text-gray-600">
            {{ t('sections.solutionsDesc') }}
          </p>
        </div>
        <NuxtLink :to="localePath('/solutions')"
          class="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-hover sm:mt-0">
          {{ t('common.viewAll') }} →
        </NuxtLink>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="s in list" :key="s.id" :to="localePath(`/solutions/${s.slug}`)"
          class="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition hover:shadow-card-hover">
          <div class="aspect-[16/10] overflow-hidden bg-gray-100">
            <img :src="s.image" :alt="t(s.titleKey)"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105" @error="onImgError" />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-primary">
              {{ t(s.titleKey) }}
            </h3>
            <p class="mt-2 flex-1 text-sm text-gray-600">
              {{ t(s.summaryKey) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
