<script setup>
import { getNewsBySlug, getRelatedNews } from '~/data/news.js'
import { onImgError } from '~/composables/useImgFallback.js'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const slug = String(route.params.slug)
const article = getNewsBySlug(slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Not found' })
}

const related = getRelatedNews(slug, 3)

useSeoMeta({
  title: () => t(article.titleKey),
  description: () => t(article.excerptKey),
})
</script>

<template>
  <article class="bg-white pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <NuxtLink :to="localePath('/news')" class="text-sm font-medium text-primary hover:text-primary-hover">
        ← {{ t('common.back') }}
      </NuxtLink>
      <header class="mt-8">
        <span class="text-sm font-medium text-primary">{{
          t(`news.category.${article.category}`)
          }}</span>
        <time class="mt-2 block text-sm text-gray-500">{{ article.date }}</time>
        <h1 class="mt-4 text-3xl font-bold text-gray-900">
          {{ t(article.titleKey) }}
        </h1>
      </header>
      <div class="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-card">
        <img :src="article.image" :alt="t(article.titleKey)" class="aspect-[16/9] w-full object-cover"
          @error="onImgError" />
      </div>
      <div class="prose prose-gray mt-10 max-w-none text-base leading-relaxed text-gray-700">
        <p>{{ t(article.contentKey) }}</p>
      </div>

      <section v-if="related.length" class="mt-16 border-t border-gray-200 pt-12">
        <h2 class="text-xl font-bold text-gray-900">
          {{ t('common.related') }}
        </h2>
        <ul class="mt-6 space-y-4">
          <li v-for="r in related" :key="r.id">
            <NuxtLink :to="localePath(`/news/${r.slug}`)"
              class="block rounded-lg border border-gray-100 bg-gray-50 p-4 transition hover:border-primary/30 hover:bg-white">
              <time class="text-xs text-gray-500">{{ r.date }}</time>
              <p class="mt-1 font-medium text-gray-900 hover:text-primary">
                {{ t(r.titleKey) }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>
