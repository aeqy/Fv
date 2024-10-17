<!-- Login.vue -->
<script setup lang="ts">
import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

function login() {
  authStore.login({ username: 'Eq' }); // 调用登录方法
  console.log('User logged in:', authStore.isAuthenticated); // 调试：确保登录状态被设置
  router.push('/dashboard'); // 登录后跳转到 dashboard 页面
}
</script>

<template>
  <main>
    <h1>weconnect demo 登录</h1>
    <button @click="login">Login</button> <!-- 点击按钮触发 login -->
  </main>
</template>
