import { computed, ref, watch } from 'vue'

/**
 * Client-side pagination for arrays.
 * @template T
 * @param {import('vue').Ref<T[]>} items
 * @param {number} pageSize
 */
export function usePagination(items, pageSize) {
  const page = ref(1)
  const totalPages = computed(() =>
    Math.max(1, Math.ceil(items.value.length / pageSize)),
  )
  const paginated = computed(() => {
    const start = (page.value - 1) * pageSize
    return items.value.slice(start, start + pageSize)
  })

  watch(items, () => {
    page.value = 1
  })

  function go(p) {
    const next = Math.min(Math.max(1, p), totalPages.value)
    page.value = next
  }

  return { page, totalPages, paginated, go }
}
