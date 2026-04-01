<script setup>
import { newsItems } from '~/data/news.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
const localePath = useLocalePath()

const list = computed(() => newsItems.slice(0, 3))
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ t('sections.news') }}
          </h2>
          <p class="mt-2 text-gray-600">
            {{ t('sections.newsDesc') }}
          </p>
        </div>
        <NuxtLink :to="localePath('/news')"
          class="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-hover sm:mt-0">
          {{ t('common.viewAll') }} →
        </NuxtLink>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="n in list" :key="n.id" :to="localePath(`/news/${n.slug}`)"
          class="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition hover:shadow-card-hover">
          <div class="aspect-[16/10] overflow-hidden bg-gray-100">
            <img :src="n.image" :alt="t(n.titleKey)"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105" @error="onImgError" />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <time class="text-xs text-gray-500">{{ n.date }}</time>
            <h3 class="mt-2 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-primary">
              {{ t(n.titleKey) }}
            </h3>
            <p class="mt-2 line-clamp-2 flex-1 text-sm text-gray-600">
              {{ t(n.excerptKey) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
