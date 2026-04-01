<script setup>
const route = useRoute()

/** 默认语言无前缀时为 `/`，英文为 `/en` */
const isHome = computed(() => {
  const p = route.path.replace(/\/$/, '') || '/'
  return p === '/' || p === '/en'
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-gray-900">
    <Header />
    <main
      class="flex-1"
      :class="isHome ? '' : 'pt-16 md:pt-[4.5rem]'"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>
