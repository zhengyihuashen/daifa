import Vue from 'vue'
import App from './App'

 




import share from './components/niceui/share.js'  
Vue.mixin(share)


	import config from './utils/config.js';

Vue.config.productionTip = false

App.mpType = 'app'
 
 
const app = new Vue({

    ...App
})

//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式

app.$mount();