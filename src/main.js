import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon } from 'vant';
import { Image as VanImage } from 'vant'
import { NavBar } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Dialog } from 'vant';
import { Button } from 'vant';
import { PullRefresh } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(Icon);
Vue.use(VanImage);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Dialog);
Vue.use(Button);
Vue.use(PullRefresh);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
