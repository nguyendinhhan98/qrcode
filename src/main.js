import Vue from "vue";
import App from "./App.vue";
import VueQrcodeReader from "vue-qrcode-reader";

Vue.config.productionTip = false;
Vue.use(VueQrcodeReader);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
