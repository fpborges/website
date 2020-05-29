import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Animate from 'animate.css';

Vue.use(Animate);

Vue.config.productionTip = false;
export const bus = new Vue()

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
