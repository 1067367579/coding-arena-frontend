import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)

app.use(router)

//国际化设置
app.use(ElementPlus, {
    locale: zhCn
})

app.mount('#app')
