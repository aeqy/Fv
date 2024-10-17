import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null,  // user 存储用户信息，可能为 null 初始值
  }),
  actions: {
    login(user: any) {
      this.isAuthenticated = true;
      this.user = user; // 登录时设置用户信息
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('isAuthenticated');
    },
    checkLoginStatus() {
      const isLoggedIn = localStorage.getItem('isAuthenticated');
      this.isAuthenticated = isLoggedIn === 'true'; // 只有 'true' 时才标记为已登录
      console.log('Checking login status, isAuthenticated:', this.isAuthenticated);
    }
  },
});
