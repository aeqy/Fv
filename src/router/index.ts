// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Login from '@/views/_core/authentication/login.vue';
import Dashboard from '@/views/dashboard/workspace/index.vue';
import { useAuthStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        requiresAuth: true, // 首页也需要登录才能访问
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true, // 需要登录才能访问
      },
    },
  ],
});

// 全局路由守卫，确保未登录时跳转到登录页面
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // 每次路由切换时，重新检查登录状态
  authStore.checkLoginStatus();
  console.log('authStore.isAuthenticated:', authStore.isAuthenticated);
  // 如果路由需要登录验证，并且用户未登录
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'Login' }); // 重定向到登录页面
  } else {
    next(); // 继续导航
  }
});

export default router;
