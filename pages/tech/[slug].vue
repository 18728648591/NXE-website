<script setup>
import { getTechBySlug } from '~/data/techArticles.js'
import { onImgError } from '~/composables/useImgFallback.js'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const article = getTechBySlug(String(route.params.slug))

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

useSeoMeta({
  title: () => t(article.titleKey),
  description: () => t(article.excerptKey),
})
</script>

<template>
  <article class="bg-white pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <NuxtLink :to="localePath('/tech')" class="text-sm font-medium text-primary hover:text-primary-hover">
        ← {{ t('common.back') }}
      </NuxtLink>
      <header class="mt-8">
        <time class="text-sm text-gray-500">{{ article.date }}</time>
        <h1 class="mt-4 text-3xl font-bold text-gray-900">
          {{ t(article.titleKey) }}
        </h1>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tg in article.tags" :key="tg"
            class="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {{ t(`tech.tags.${tg}`) }}
          </span>
        </div>
      </header>
      <div class="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-card">
        <img :src="article.image" :alt="t(article.titleKey)" class="aspect-[16/9] w-full object-cover"
          @error="onImgError" />
      </div>
      <div class="prose prose-gray mt-10 max-w-none text-base leading-relaxed text-gray-700">
        <p>{{ t(article.contentKey) }}</p>
      </div>
    </div>
  </article>
</template>
