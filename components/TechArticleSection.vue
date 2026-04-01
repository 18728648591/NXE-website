<script setup>
import { techArticles } from '~/data/techArticles.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
const localePath = useLocalePath()

const list = computed(() => techArticles.slice(0, 3))
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ t('sections.tech') }}
          </h2>
          <p class="mt-2 text-gray-600">
            {{ t('sections.techDesc') }}
          </p>
        </div>
        <NuxtLink :to="localePath('/tech')"
          class="mt-4 inline-flex text-sm font-semibold text-primary hover:text-primary-hover sm:mt-0">
          {{ t('common.viewAll') }} →
        </NuxtLink>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="item in list" :key="item.id" :to="localePath(`/tech/${item.slug}`)"
          class="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition hover:shadow-card-hover">
          <div class="aspect-[16/10] overflow-hidden bg-gray-100">
            <img :src="item.image" :alt="t(item.titleKey)"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105" @error="onImgError" />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <time class="text-xs text-gray-500">{{ item.date }}</time>
            <h3 class="mt-2 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-primary">
              {{ t(item.titleKey) }}
            </h3>
            <p class="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">
              {{ t(item.excerptKey) }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
