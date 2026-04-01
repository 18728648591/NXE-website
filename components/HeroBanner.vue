<script setup>
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { slides } from '~/data/hero.js'
import { onImgError } from '~/composables/useImgFallback.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { t } = useI18n()
const localePath = useLocalePath()

const swiperModules = [Autoplay, Pagination, Navigation]

const firstSlide = slides[0]
</script>

<template>
  <section class="relative bg-gray-900" aria-roledescription="carousel" aria-label="Hero">
    <ClientOnly>
      <Swiper :modules="swiperModules" class="hero-swiper h-screen w-full" :loop="true" :speed="600" :grabCursor="true"
        :simulateTouch="true" :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }" :pagination="{ clickable: true }" :navigation="true">
        <SwiperSlide v-for="(slide, index) in slides" :key="index" class="hero-slide">
          <div class="relative h-screen w-full overflow-hidden">
            <img :src="slide.image" alt="" class="absolute inset-0 h-full w-full bg-cover bg-center object-cover"
              loading="eager" @error="onImgError" />
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]"
              aria-hidden="true" />
            <div class="relative z-[1] mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary drop-shadow md:text-sm">
                NEX Power
              </p>
              <h1
                class="hero-anim-title mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {{ t(slide.title) }}
              </h1>
              <p class="hero-anim-subtitle mt-4 max-w-2xl text-lg leading-relaxed text-gray-100 md:text-xl lg:text-2xl">
                {{ t(slide.subtitle) }}
              </p>
              <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <NuxtLink v-for="(btn, bi) in slide.cta" :key="bi" :to="localePath(btn.to)"
                  class="hero-cta inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-lg px-6 py-3 text-center text-base font-semibold transition duration-300 ease-out md:px-8"
                  :class="btn.variant === 'outline'
                      ? 'hero-cta-outline border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                      : 'hero-cta-primary bg-primary text-white hover:bg-primary-hover'
                    ">
                  {{ t(btn.label) }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <template #fallback>
        <div class="relative h-screen w-full overflow-hidden bg-gray-900">
          <img :src="firstSlide.image" alt="" class="absolute inset-0 h-full w-full bg-cover bg-center object-cover"
            @error="onImgError" />
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
          <div class="relative z-[1] mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary drop-shadow md:text-sm">
              NEX Power
            </p>
            <h1
              class="mt-3 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {{ t(firstSlide.title) }}
            </h1>
            <p class="mt-4 max-w-2xl text-lg leading-relaxed text-gray-100 md:text-xl lg:text-2xl">
              {{ t(firstSlide.subtitle) }}
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <NuxtLink v-for="(btn, bi) in firstSlide.cta" :key="bi" :to="localePath(btn.to)"
                class="hero-cta inline-flex min-h-[48px] min-w-[160px] items-center justify-center rounded-lg px-6 py-3 text-center text-base font-semibold transition duration-300 ease-out md:px-8"
                :class="btn.variant === 'outline'
                    ? 'hero-cta-outline border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                    : 'hero-cta-primary bg-primary text-white hover:bg-primary-hover'
                  ">
                {{ t(btn.label) }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped>
@keyframes heroTextIn {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-swiper :deep(.swiper-slide-active .hero-anim-title),
.hero-swiper :deep(.swiper-slide-active .hero-anim-subtitle) {
  animation: heroTextIn 0.75s ease-out both;
}

.hero-swiper :deep(.swiper-slide-active .hero-anim-subtitle) {
  animation-delay: 0.12s;
}

.hero-cta-primary:hover,
.hero-cta-outline:hover {
  transform: scale(1.03);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
}

.hero-swiper :deep(.swiper-pagination) {
  bottom: 1.5rem;
}

.hero-swiper :deep(.swiper-pagination-bullet) {
  width: 0.625rem;
  height: 0.625rem;
  background: rgba(255, 255, 255, 0.45);
  opacity: 1;
}

.hero-swiper :deep(.swiper-pagination-bullet-active) {
  background: #02ad53;
  box-shadow: 0 0 0 2px rgba(2, 173, 83, 0.35);
}

.hero-swiper :deep(.swiper-button-prev),
.hero-swiper :deep(.swiper-button-next) {
  width: 2.75rem;
  height: 2.75rem;
  color: #02ad53;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45));
}

.hero-swiper :deep(.swiper-button-prev::after),
.hero-swiper :deep(.swiper-button-next::after) {
  font-size: 1.25rem;
  font-weight: 700;
}

.hero-swiper :deep(.swiper-button-prev:hover),
.hero-swiper :deep(.swiper-button-next:hover) {
  color: #018a42;
}
</style>
