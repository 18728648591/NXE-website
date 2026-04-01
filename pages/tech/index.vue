<script setup>
import { computed, ref, watch } from 'vue'
import { techArticles, techTags } from '~/data/techArticles.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('tech.title'),
  description: () => t('tech.metaDesc'),
})

const tag = ref('all')
const page = ref(1)
const pageSize = 6

const filtered = computed(() => {
  if (tag.value === 'all') return techArticles
  return techArticles.filter((a) => a.tags.includes(tag.value))
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filtered.value.length / pageSize)),
)

const paginated = computed(() => {
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

watch(tag, () => {
  page.value = 1
})

function setTag(id) {
  tag.value = id
}

function goPage(p) {
  page.value = Math.min(Math.max(1, p), totalPages.value)
}
</script>

<template>
  <div class="bg-gray-50 pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ t('tech.title') }}
      </h1>
      <p class="mt-2 text-gray-600">
        {{ t('tech.metaDesc') }}
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="tg in techTags"
          :key="tg.id"
          type="button"
          class="min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition"
          :class="
            tag === tg.id
              ? 'border-primary bg-primary text-white'
              : 'border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary'
          "
          @click="setTag(tg.id)"
        >
          {{ t(tg.labelKey) }}
        </button>
      </div>

      <div
        class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="item in paginated"
          :key="item.id"
          :to="localePath(`/tech/${item.slug}`)"
          class="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition hover:shadow-card-hover"
        >
          <div class="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              :src="item.image"
              :alt="t(item.titleKey)"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              @error="onImgError"
            />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <time class="text-xs text-gray-500">{{ item.date }}</time>
            <h2 class="mt-2 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-primary">
              {{ t(item.titleKey) }}
            </h2>
            <p class="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">
              {{ t(item.excerptKey) }}
            </p>
            <div class="mt-4 flex flex-wrap gap-1">
              <span
                v-for="tagId in item.tags"
                :key="tagId"
                class="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
              >
                {{ t(`tech.tags.${tagId}`) }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <AppPagination
        :page="page"
        :total-pages="totalPages"
        @update:page="goPage"
      />
    </div>
  </div>
</template>
