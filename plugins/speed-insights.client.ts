import { inject } from '@vercel/speed-insights'

export default defineNuxtPlugin(() => {
  // 在客户端注入 Speed Insights，监测 Vercel Analytics
  inject()
})
