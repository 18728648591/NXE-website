<script setup>
import { timelineEvents } from '~/data/timeline.js'

const { t } = useI18n()
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        {{ t('about.timelineTitle') }}
      </h2>
      <div class="relative mx-auto mt-12 max-w-3xl">
        <div
          class="absolute left-[7px] top-0 h-full w-0.5 bg-primary/30 sm:left-1/2 sm:-ml-px"
          aria-hidden="true"
        />
        <ul class="space-y-10">
          <li
            v-for="(ev, index) in timelineEvents"
            :key="ev.id"
            class="relative flex flex-col sm:flex-row sm:items-start"
            :class="index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'"
          >
            <div
              class="flex flex-1 sm:w-1/2"
              :class="index % 2 === 0 ? 'sm:justify-end sm:pr-10' : 'sm:justify-start sm:pl-10'"
            >
              <div
                class="rounded-xl border border-gray-100 bg-white p-5 shadow-card sm:max-w-md"
              >
                <span class="text-sm font-bold text-primary">{{ ev.year }}</span>
                <h3 class="mt-1 font-semibold text-gray-900">
                  {{ t(ev.titleKey) }}
                </h3>
                <p class="mt-2 text-sm text-gray-600">
                  {{ t(ev.descKey) }}
                </p>
              </div>
            </div>
            <div
              class="absolute left-0 top-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white sm:left-1/2 sm:-ml-2"
            >
              <span class="h-2 w-2 rounded-full bg-primary" />
            </div>
            <div class="hidden flex-1 sm:block sm:w-1/2" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
