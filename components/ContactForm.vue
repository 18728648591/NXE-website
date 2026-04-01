<script setup>
const { t } = useI18n()

const form = reactive({
  name: '',
  phone: '',
  email: '',
  company: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-card sm:p-8">
    <form
      class="space-y-4"
      @submit.prevent="handleSubmit"
    >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label class="block">
          <span class="text-sm font-medium text-gray-700">{{ t('contact.form.name') }}</span>
          <input
            v-model="form.name"
            type="text"
            required
            autocomplete="name"
            class="mt-1 w-full min-h-[48px] rounded-lg border border-gray-200 px-3 py-2 text-base outline-none ring-primary/20 focus:border-primary focus:ring-2"
          />
        </label>
        <label class="block">
          <span class="text-sm font-medium text-gray-700">{{ t('contact.form.phone') }}</span>
          <input
            v-model="form.phone"
            type="tel"
            required
            autocomplete="tel"
            class="mt-1 w-full min-h-[48px] rounded-lg border border-gray-200 px-3 py-2 text-base outline-none ring-primary/20 focus:border-primary focus:ring-2"
          />
        </label>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label class="block">
          <span class="text-sm font-medium text-gray-700">{{ t('contact.form.email') }}</span>
          <input
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            class="mt-1 w-full min-h-[48px] rounded-lg border border-gray-200 px-3 py-2 text-base outline-none ring-primary/20 focus:border-primary focus:ring-2"
          />
        </label>
        <label class="block">
          <span class="text-sm font-medium text-gray-700">{{ t('contact.form.company') }}</span>
          <input
            v-model="form.company"
            type="text"
            autocomplete="organization"
            class="mt-1 w-full min-h-[48px] rounded-lg border border-gray-200 px-3 py-2 text-base outline-none ring-primary/20 focus:border-primary focus:ring-2"
          />
        </label>
      </div>
      <label class="block">
        <span class="text-sm font-medium text-gray-700">{{ t('contact.form.message') }}</span>
        <textarea
          v-model="form.message"
          rows="4"
          required
          class="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-base outline-none ring-primary/20 focus:border-primary focus:ring-2"
        />
      </label>
      <button
        type="submit"
        class="w-full min-h-[48px] rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-primary-hover sm:w-auto"
      >
        {{ t('common.submit') }}
      </button>
    </form>
    <div
      v-if="submitted"
      class="mt-4 rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary"
      role="status"
    >
      {{ t('contact.form.success') }}
    </div>
  </div>
</template>
