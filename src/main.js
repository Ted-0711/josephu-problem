import Vue from 'vue'
import App from './App.vue'
import { Button, Row, Col, InputNumber, Slider, Radio, Cascader } from 'element-ui';
import store from './store'

Vue.config.productionTip = false
// 将echarts挂载到Vue原型对象上
Vue.prototype.$echarts = window.echarts
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(InputNumber)
Vue.use(Slider)
Vue.use(Radio)
Vue.use(Cascader)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
}).$mount('#app')
