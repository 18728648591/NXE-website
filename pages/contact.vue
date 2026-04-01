<script setup>
import { contactInfo } from '~/data/contact.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()

useSeoMeta({
  title: () => t('contact.title'),
  description: () => t('contact.metaDesc'),
})
</script>

<template>
  <div class="bg-gray-50 pb-20 pt-8 sm:pt-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        {{ t('contact.title') }}
      </h1>
      <p class="mt-2 text-gray-600">
        {{ t('contact.metaDesc') }}
      </p>

      <div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div class="space-y-6">
          <div class="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
            <h2 class="text-lg font-semibold text-gray-900">
              {{ t('contact.infoTitle') }}
            </h2>
            <dl class="mt-4 space-y-4 text-sm text-gray-700">
              <div>
                <dt class="font-medium text-gray-900">
                  {{ t('contact.label.address') }}
                </dt>
                <dd class="mt-1">
                  {{ t('contact.info.address') }}
                </dd>
              </div>
              <div>
                <dt class="font-medium text-gray-900">
                  {{ t('contact.label.phone') }}
                </dt>
                <dd class="mt-1">
                  <a
                    :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`"
                    class="text-primary hover:text-primary-hover"
                  >{{ contactInfo.phone }}</a>
                </dd>
              </div>
              <div>
                <dt class="font-medium text-gray-900">
                  {{ t('contact.label.email') }}
                </dt>
                <dd class="mt-1">
                  <a
                    :href="`mailto:${contactInfo.email}`"
                    class="text-primary hover:text-primary-hover"
                  >{{ contactInfo.email }}</a>
                </dd>
              </div>
              <div>
                <dt class="font-medium text-gray-900">
                  {{ t('contact.info.workTime') }}
                </dt>
              </div>
            </dl>
          </div>
          <div class="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-card">
            <p class="text-sm font-medium text-gray-700">
              {{ t('contact.label.wechat') }}
            </p>
            <img
              :src="contactInfo.wechatQr"
              alt="WeChat QR"
              class="mx-auto mt-4 max-h-40 w-auto object-contain"
              @error="onImgError"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </div>
</template>
