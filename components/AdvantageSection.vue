<script setup>
import { advantages } from '~/data/advantages.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          {{ t('sections.advantages') }}
        </h2>
        <p class="mt-2 text-gray-600">
          {{ t('sections.advantagesDesc') }}
        </p>
      </div>
      <div
        class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="a in advantages"
          :key="a.id"
          class="rounded-xl border border-gray-100 bg-white p-6 shadow-card transition hover:border-primary/20 hover:shadow-card-hover"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <img
              :src="a.icon"
              alt=""
              class="h-7 w-7"
            />
          </div>
          <h3 class="mt-4 font-semibold text-gray-900">
            {{ t(a.titleKey) }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            {{ t(a.descKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
