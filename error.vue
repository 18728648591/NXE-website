<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const { t } = useI18n()
const localePath = useLocalePath()

function handleError() {
  clearError({ redirect: localePath('/') })
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
    <h1 class="text-6xl font-bold text-primary">
      {{ error?.statusCode || 500 }}
    </h1>
    <p class="mt-4 text-center text-gray-600">
      {{ error?.statusMessage || 'Error' }}
    </p>
    <button
      type="button"
      class="mt-8 rounded-lg bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-hover"
      @click="handleError"
    >
      {{ t('nav.home') }}
    </button>
  </div>
</template>
