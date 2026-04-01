<script setup>
import { footerColumns, footerBrand } from '~/data/footer.js'

const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-200 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-2">
            <span
              class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white"
              >N</span
            >
            <span class="font-semibold text-gray-900">NEX Power</span>
          </div>
          <p class="mt-3 text-sm text-gray-600">
            {{ t('brand.nameZh') }}
          </p>
          <p class="mt-1 text-sm text-primary">
            {{ t(footerBrand.sloganKey) }}
          </p>
        </div>
        <div
          v-for="col in footerColumns"
          :key="col.titleKey"
        >
          <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-900">
            {{ t(col.titleKey) }}
          </h3>
          <ul class="mt-4 space-y-2">
            <li
              v-for="link in col.links"
              :key="link.labelKey"
            >
              <NuxtLink
                :to="localePath(link.to)"
                class="text-sm text-gray-600 transition hover:text-primary"
              >
                {{ t(link.labelKey) }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-10 border-t border-gray-200 pt-8 text-center text-sm text-gray-500"
      >
        © {{ year }} {{ t('brand.nameZh') }} · {{ t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>
