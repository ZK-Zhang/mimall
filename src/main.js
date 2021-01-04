import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index'
import App from './App.vue'
import env from './env'

const app = createApp(App);
app.use(router,axios,VueAxios)

// 接口跨域
axios.defaults.baseURL = '/api'
// 请求超时时间
axios.defaults.timeout = 8000
// 接口环境变量设置(JSONP、CORS跨域)
axios.defaults.baseURL = env.baseURL

// 接口状态码拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    window.location.href = '/#/login'
  }else{
    console.log('登陆失败')
  }
})

app.mount('#app')