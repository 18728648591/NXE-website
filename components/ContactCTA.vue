<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-slate-100 via-gray-50 to-emerald-100 py-20 sm:py-24 lg:py-28">
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
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <!-- Left: Text content -->
        <div class="flex flex-col justify-center">
          <!-- Subtitle -->
          <p class="mb-3 text-sm font-semibold uppercase tracking-widest" style="color: #02AD53">
            {{ t('contact.cta.subtitle') }}
          </p>

          <!-- Title -->
          <h2 class="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-4xl">
            {{ t('contact.cta.title') }}
          </h2>

          <!-- Description -->
          <p class="mb-8 text-lg text-gray-600 leading-relaxed max-w-lg">
            无论您处于项目哪个阶段，我们都准备好提供专业的电池解决方案支持。联系我们的专家团队，了解如何为您的应用优化性能与可靠性。
          </p>

          <!-- Button -->
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <NuxtLink :to="localePath('/contact')"
              class="group relative inline-flex items-center justify-center min-h-[48px] min-w-[200px] rounded-lg px-8 py-3 text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:scale-105 bg-primary text-white hover:bg-primary-hover">
              <span class="relative z-10 flex items-center gap-2">
                {{ t('contact.cta.button') }}
                <span class="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </NuxtLink>

            <!-- Accent -->
            <div class="flex items-center gap-2 text-gray-600 text-sm">
              <div class="h-1 w-8 rounded-full bg-primary/40" />
              <span>工作日尽快回复</span>
            </div>
          </div>
        </div>

        <!-- Right: Visual element -->
        <div class="relative h-80 sm:h-96 lg:h-full">
          <!-- Main card -->
          <div
            class="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-card transition-all duration-300 hover:border-primary/60 hover:shadow-card-hover"
            style="background: linear-gradient(135deg, rgba(2, 173, 83, 0.05) 0%, rgba(2, 173, 83, 0.02) 100%)">
            <!-- Content grid -->
            <div class="relative h-full w-full p-8 flex flex-col justify-between">
              <!-- Top content -->
              <div>
                <div class="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-6"
                  style="background: rgba(2, 173, 83, 0.1)">
                  <span class="text-2xl">⚡</span>
                  <span class="text-sm font-semibold" style="color: #02AD53">快速响应</span>
                </div>
              </div>

              <!-- Stats -->
              <div class="space-y-6">
                <div class="flex items-end gap-4">
                  <div class="flex-1">
                    <div class="text-3xl font-bold text-gray-900 mb-2">24h</div>
                    <div class="text-sm text-gray-600">平均回应时间</div>
                  </div>
                  <div class="h-12 w-1 rounded-full"
                    style="background: linear-gradient(to top, #02AD53, rgba(2, 173, 83, 0.3))" />
                </div>

                <div class="flex items-end gap-4">
                  <div class="flex-1">
                    <div class="text-3xl font-bold text-gray-900 mb-2">500+</div>
                    <div class="text-sm text-gray-600">已服务客户</div>
                  </div>
                  <div class="h-12 w-1 rounded-full"
                    style="background: linear-gradient(to top, #02AD53, rgba(2, 173, 83, 0.3))" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth animations */
@media (prefers-reduced-motion: no-preference) {
  .group:hover {
    animation: subtle-pulse 0.4s ease-out;
  }
}

@keyframes subtle-pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  100% {
    transform: scale(1.05);
  }
}
</style>
