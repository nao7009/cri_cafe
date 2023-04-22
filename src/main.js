import Vue from 'vue'
import App from './App.vue'
import router from './router'  /* ←追加 */

import 'ress';                     /* npm経由でインストールしたress.cssをインポート */
import '@/assets/scss/main.scss'   /* コンポーネントに取り込んでいないscssファイル */

Vue.config.productionTip = false

new Vue({
  router,  /* ←追加 */
  render: h => h(App),
}).$mount('#app')
