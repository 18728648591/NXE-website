<script setup>
import { aboutSectionCards, aboutSectionContent } from '~/data/aboutSection.js'

const { t } = useI18n()
</script>

<template>
    <section
        class="relative overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-emerald-100 py-16 sm:py-20 lg:py-24">
        <!-- Decorative background elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Large gradient orbs -->
            <div class="absolute -right-1/3 -top-1/3 h-96 w-96 rounded-full opacity-8 blur-3xl"
                style="background: radial-gradient(circle, #02AD53, transparent)" />
            <div class="absolute -left-1/3 -bottom-1/3 h-96 w-96 rounded-full opacity-6 blur-3xl"
                style="background: radial-gradient(circle, #059669, transparent)" />
            <div class="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full opacity-5 blur-2xl"
                style="background: radial-gradient(circle, #10B981, transparent)" />

            <!-- Geometric pattern overlay -->
            <div class="absolute inset-0 opacity-4" style="
          background-image:
            radial-gradient(circle at 25% 25%, rgba(2, 173, 83, 0.15) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(2, 173, 83, 0.1) 1px, transparent 1px);
          background-size: 60px 60px, 40px 40px;
        " />

            <!-- Subtle grid pattern -->
            <div class="absolute inset-0 opacity-3" style="
          background-image:
            linear-gradient(rgba(2, 173, 83, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(2, 173, 83, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        " />
        </div>

        <!-- Content -->
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                <!-- Left column: Text and buttons -->
                <div class="flex flex-col justify-center">
                    <!-- Tag -->
                    <div class="mb-6 inline-flex w-fit">
                        <span class="rounded-full px-4 py-1.5 text-sm font-medium border text-primary"
                            style="background: rgba(2, 173, 83, 0.08); border-color: rgba(2, 173, 83, 0.3)">
                            {{ t(aboutSectionContent.tagKey) }}
                        </span>
                    </div>

                    <!-- Subtitle -->
                    <p class="mb-3 text-lg text-primary font-semibold tracking-wide">
                        {{ t(aboutSectionContent.subtitleKey) }}
                    </p>

                    <!-- Title with gradient -->
                    <h2 class="mb-5 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-4xl leading-tight">
                        {{ t(aboutSectionContent.titleKey) }}
                    </h2>

                    <!-- Description -->
                    <p class="mb-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                        {{ t(aboutSectionContent.descKey) }}
                    </p>

                    <!-- Professional Highlights -->
                    <div class="mb-6 space-y-2">
                        <div
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                            <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span class="text-sm text-gray-700 font-medium">{{ t('aboutSection.highlights.tech')
                            }}</span>
                        </div>
                        <div
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                            <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span class="text-sm text-gray-700 font-medium">{{ t('aboutSection.highlights.quality')
                            }}</span>
                        </div>
                        <div
                            class="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                            <div class="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span class="text-sm text-gray-700 font-medium">{{
                                t('aboutSection.highlights.certification') }}</span>
                        </div>
                    </div>

                    <!-- Key Stats -->
                    <div class="mb-6 grid grid-cols-2 gap-4">
                        <div
                            class="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                            <div class="text-2xl font-bold text-primary mb-1">10+</div>
                            <div class="text-xs text-gray-600 font-medium">{{ t('aboutSection.stats.years') }}</div>
                        </div>
                        <div
                            class="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20 hover:shadow-md transition-all duration-300 hover:scale-105">
                            <div class="text-2xl font-bold text-primary mb-1">50+</div>
                            <div class="text-xs text-gray-600 font-medium">{{ t('aboutSection.stats.patents') }}</div>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="flex gap-4 sm:gap-6 flex-wrap">
                        <NuxtLink to="/about"
                            class="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 font-semibold overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:scale-105 bg-primary text-white hover:bg-primary-hover">
                            <span class="relative z-10 flex items-center gap-2">
                                {{ t('nav.about') }}
                                <span class="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </NuxtLink>

                        <NuxtLink to="/contact"
                            class="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 font-semibold overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:scale-105 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white">
                            <span class="relative z-10 flex items-center gap-2">
                                {{ t('nav.contact') }}
                                <span class="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </span>
                        </NuxtLink>
                    </div>
                </div>

                <!-- Right column: Cards grid -->
                <div class="space-y-6">
                    <!-- First row: Team & Capacity -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div v-for="card in aboutSectionCards.slice(0, 2)" :key="card.id"
                            class="group relative h-full overflow-hidden rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50/50 cursor-default hover:border-primary hover:shadow-lg">
                            <!-- Icon in top right corner -->
                            <div
                                class="absolute top-4 right-4 text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                {{ card.icon }}
                            </div>

                            <!-- Content -->
                            <div class="relative z-10 flex flex-col h-full pr-12">

                                <!-- Value and Unit -->
                                <div class="mb-3">
                                    <div class="text-3xl sm:text-4xl font-bold text-primary mb-1 drop-shadow-sm">
                                        {{ card.value }}
                                    </div>
                                    <div class="text-sm text-gray-600 font-medium">
                                        {{ card.unit }}
                                    </div>
                                    <div class="text-xs text-primary font-semibold mt-1 opacity-80">
                                        {{ card.highlight }}
                                    </div>
                                </div>

                                <!-- Title -->
                                <h3
                                    class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                                    {{ t(card.titleKey) }}
                                </h3>

                                <!-- Description -->
                                <p class="text-sm text-gray-600 leading-relaxed flex-grow">
                                    {{ t(card.descKey) }}
                                </p>

                                <!-- Bottom accent line -->
                                <div class="mt-4 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-12" />
                            </div>
                        </div>
                    </div>

                    <!-- Second row: Applications & Quality -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div v-for="card in aboutSectionCards.slice(2, 4)" :key="card.id"
                            class="group relative h-full overflow-hidden rounded-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] border-2 border-gray-100 bg-gradient-to-br from-white to-gray-50/50 cursor-default hover:border-primary hover:shadow-lg">
                            <!-- Icon in top right corner -->
                            <div
                                class="absolute top-4 right-4 text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                {{ card.icon }}
                            </div>

                            <!-- Content -->
                            <div class="relative z-10 flex flex-col h-full pr-12">

                                <!-- Value and Unit -->
                                <div class="mb-3">
                                    <div class="text-3xl sm:text-4xl font-bold text-primary mb-1 drop-shadow-sm">
                                        {{ card.value }}
                                    </div>
                                    <div class="text-sm text-gray-600 font-medium">
                                        {{ card.unit }}
                                    </div>
                                    <div class="text-xs text-primary font-semibold mt-1 opacity-80">
                                        {{ card.highlight }}
                                    </div>
                                </div>

                                <!-- Title -->
                                <h3
                                    class="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                                    {{ t(card.titleKey) }}
                                </h3>

                                <!-- Description -->
                                <p class="text-sm text-gray-600 leading-relaxed flex-grow">
                                    {{ t(card.descKey) }}
                                </p>

                                <!-- Bottom accent line -->
                                <div class="mt-4 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
