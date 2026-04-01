<script setup>
const props = defineProps({
  page: { type: Number, required: true },
  totalPages: { type: Number, required: true },
})

const emit = defineEmits(['update:page'])

const { t } = useI18n()

function go(p) {
  emit('update:page', p)
}
</script>

<template>
  <nav
    v-if="totalPages > 1"
    class="flex flex-wrap items-center justify-center gap-2 pt-8"
    aria-label="Pagination"
  >
    <button
      type="button"
      class="min-h-[44px] min-w-[44px] rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      :disabled="page <= 1"
      @click="go(page - 1)"
    >
      {{ t('common.prev') }}
    </button>
    <span class="px-2 text-sm text-gray-600">
      {{ t('common.page', { n: page }) }} / {{ totalPages }}
    </span>
    <button
      type="button"
      class="min-h-[44px] min-w-[44px] rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-700 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      :disabled="page >= totalPages"
      @click="go(page + 1)"
    >
      {{ t('common.next') }}
    </button>
  </nav>
</template>
