import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)


// 在应用启动时立即调用 checkLoginStatus
const authStore = useAuthStore();
authStore.checkLoginStatus(); // 确保登录状态被初始化

console.log('User is authenticated:', authStore.isAuthenticated);

app.mount('#app')
