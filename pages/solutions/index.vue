<script setup>
import { computed, ref, watch } from 'vue'
import { solutions, solutionIndustries } from '~/data/solutions.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('solutions.title'),
  description: () => t('solutions.metaDesc'),
})

const industry = ref('all')
const page = ref(1)
const pageSize = 6

const filtered = computed(() => {
  if (industry.value === 'all') return solutions
  return solutions.filter((s) => s.industry === industry.value)
})

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filtered.value.length / pageSize)),
)

const paginated = computed(() => {
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

watch(industry, () => {
  page.value = 1
})

function setIndustry(id) {
  industry.value = id
}

function goPage(p) {
  page.value = Math.min(Math.max(1, p), totalPages.value)
}
</script>

<template>
  <div class="bg-gray-50 pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ t('solutions.title') }}
      </h1>
      <p class="mt-2 text-gray-600">
        {{ t('solutions.metaDesc') }}
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="c in solutionIndustries"
          :key="c.id"
          type="button"
          class="min-h-[44px] rounded-full border px-4 py-2 text-sm font-medium transition"
          :class="
            industry === c.id
              ? 'border-primary bg-primary text-white'
              : 'border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary'
          "
          @click="setIndustry(c.id)"
        >
          {{ t(c.labelKey) }}
        </button>
      </div>

      <div
        class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="s in paginated"
          :key="s.id"
          :to="localePath(`/solutions/${s.slug}`)"
          class="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition hover:shadow-card-hover"
        >
          <div class="aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              :src="s.image"
              :alt="t(s.titleKey)"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              @error="onImgError"
            />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <h2 class="text-lg font-semibold text-gray-900 group-hover:text-primary">
              {{ t(s.titleKey) }}
            </h2>
            <p class="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">
              {{ t(s.summaryKey) }}
            </p>
            <span class="mt-4 text-sm font-semibold text-primary">
              {{ t('common.learnMore') }} →
            </span>
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
