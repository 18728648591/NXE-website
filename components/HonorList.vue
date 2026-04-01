<script setup>
import { honors } from '~/data/honors.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        {{ t('about.honorsTitle') }}
      </h2>
      <ul class="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-100 bg-white shadow-card">
        <li
          v-for="h in honors"
          :key="h.id"
          class="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <span class="font-medium text-gray-900">{{ t(h.titleKey) }}</span>
          <span class="text-sm text-primary">{{ h.year }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
