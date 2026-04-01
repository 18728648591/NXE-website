<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <div class="flex flex-col items-center space-y-4">
      <!-- 加载动画 -->
      <div class="relative">
        <div class="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-primary"></div>
        <div class="absolute inset-0 h-12 w-12 animate-ping rounded-full border-4 border-primary opacity-20"></div>
      </div>
      <!-- 加载文本 -->
      <p class="text-sm text-gray-600">加载中...</p>
    </div>
  </div>
</template>

<script setup>
// 可以添加一些逻辑来自定义加载状态
</script>