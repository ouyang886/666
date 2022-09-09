//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import router from '@/router'
import ElementUI, { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store'
import http  from 'axios'
// import '@/api/mock.js'


//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$http=http;
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$message=Message





//创建vm
new Vue({
	store,
	el: '#app',
	render: h => h(App),
	router: router,
})