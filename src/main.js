import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/reset.css'; // 重置样式

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
