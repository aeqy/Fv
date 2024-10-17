<script setup lang="ts">
import { useAuthStore } from '@/stores';

const authStore = useAuthStore(); // 确保你初始化了 store
console.log('User info:', authStore.user); // 检查 user 是否存在
</script>

<template>
  <div>
    早安, {{ authStore.user?.realName || '用户' }} <!-- 使用可选链防止 null 错误 -->
  </div>
</template>
