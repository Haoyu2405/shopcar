import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

// 目标：请求数据---打印
// 1.下载axios库，main.js全局绑定属性(确保任意.vue文件都能访问到这个axios方法)
import axios from 'axios'
// 2.基础地址
axios.defaults.baseURL = 'https://www.escook.cn'
// 3.axios方法添加到vue原型上
Vue.prototype.$axios = axios

new Vue({
  el:'#app',
  render:(h)=>h(App),
}).$mount();