<script setup>
import { brandLogo, headerNav } from '~/data/header.js'
import { onImgError } from '~/composables/useImgFallback.js'

const { t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const drawerOpen = ref(false)

const isHome = computed(() => {
  const p = route.path.replace(/\/$/, '') || '/'
  return p === '/' || p === '/en'
})

const scrolledPastHero = ref(false)

function updateHeaderState() {
  if (!import.meta.client) return
  if (!isHome.value) {
    scrolledPastHero.value = true
    return
  }
  scrolledPastHero.value = window.scrollY >= window.innerHeight - 2
}

function onScroll() {
  updateHeaderState()
}

/** 首页首屏：半透明黑底 + 白字；滚过 Hero 或非首页：白底 + 黑字 */
const isSolid = computed(() => !isHome.value || scrolledPastHero.value)

function closeDrawer() {
  drawerOpen.value = false
}

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
}

watch(drawerOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})

watch(
  () => route.fullPath,
  () => {
    closeDrawer()
    nextTick(() => updateHeaderState())
  },
)

onMounted(() => {
  updateHeaderState()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', onScroll)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <!--
    使用 fixed 叠在首屏 Hero 之上；滚过一整屏后切换为白底。
    （若仅用 absolute，整页滚动时顶栏会随文档流移出视口，无法实现「滚过 Banner 仍固定顶栏」。）
  -->
  <header class="fixed left-0 top-0 z-50 w-full transition-[background-color,box-shadow,color] duration-300" :class="isSolid
      ? 'bg-white shadow-md text-black'
      : 'bg-black/30 text-white shadow-none backdrop-blur-[2px]'
    ">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
      <NuxtLink :to="localePath('/')" class="group flex min-h-[44px] shrink-0 items-center" @click="closeDrawer">
        <img :src="brandLogo.src" :alt="brandLogo.alt"
          class="h-8 w-auto max-h-12 max-w-[9rem] object-contain object-left sm:h-10 sm:max-w-[11rem] md:h-11 lg:h-12 lg:max-w-[14rem]"
          loading="eager" decoding="async" @error="onImgError" />
      </NuxtLink>

      <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
        <NuxtLink v-for="item in headerNav" :key="item.id" :to="localePath(item.to)"
          class="rounded-lg px-3 py-2 text-sm font-medium drop-shadow-lg transition-colors duration-300" :class="isSolid
              ? 'text-gray-800 hover:bg-primary/10 hover:text-primary'
              : 'text-white hover:bg-white/10 hover:text-primary'
            " :active-class="isSolid ? 'bg-primary/10 text-primary' : 'bg-white/15 text-primary'
            ">
          {{ t(item.labelKey) }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <div
          class="flex items-center overflow-hidden rounded-lg border text-xs font-medium transition-colors duration-300"
          :class="isSolid
              ? 'border-gray-200'
              : 'border-white/40 bg-black/20 backdrop-blur-sm'
            ">
          <NuxtLink :to="switchLocalePath('zh')" class="px-2 py-1.5 drop-shadow-lg transition-colors duration-300"
            :class="$i18n.locale === 'zh'
                ? 'bg-primary text-white'
                : isSolid
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-primary'
              ">
            中文
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('en')" class="px-2 py-1.5 drop-shadow-lg transition-colors duration-300"
            :class="$i18n.locale === 'en'
                ? 'bg-primary text-white'
                : isSolid
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-primary'
              ">
            EN
          </NuxtLink>
        </div>

        <button type="button"
          class="inline-flex items-center justify-center rounded-lg p-2 drop-shadow-lg transition-colors duration-300 lg:hidden"
          :class="isSolid
              ? 'text-gray-900 hover:bg-gray-100'
              : 'text-white hover:bg-white/10'
            " :aria-expanded="drawerOpen" aria-controls="nav-drawer" @click="toggleDrawer">
          <span class="sr-only">Menu</span>
          <svg v-if="!drawerOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="drawer-fade">
        <div v-if="drawerOpen" id="nav-drawer" class="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true"
          aria-label="Navigation">
          <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px]" @click="closeDrawer" />
          <aside class="drawer-panel absolute inset-y-0 right-0 flex w-[min(100%,20rem)] flex-col bg-white shadow-2xl">
            <div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
              <span class="text-sm font-semibold text-gray-900">Menu</span>
              <button type="button" class="rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-primary"
                @click="closeDrawer">
                <span class="sr-only">Close</span>
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav class="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              <NuxtLink v-for="item in headerNav" :key="item.id" :to="localePath(item.to)"
                class="rounded-lg px-3 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-primary/10 hover:text-primary"
                active-class="bg-primary/10 text-primary" @click="closeDrawer">
                {{ t(item.labelKey) }}
              </NuxtLink>
            </nav>
          </aside>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.25s ease;
}

.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}

.drawer-fade-enter-active .drawer-panel,
.drawer-fade-leave-active .drawer-panel {
  transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
}

.drawer-fade-enter-from .drawer-panel,
.drawer-fade-leave-to .drawer-panel {
  transform: translateX(100%);
}
</style>
