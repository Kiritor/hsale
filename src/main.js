import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookie from 'vue-cookie'
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
import { Divider } from 'vant';
import { NoticeBar } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Stepper } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Switch } from 'vant';
import { Uploader } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Tab, Tabs } from 'vant';
// 引入echarts
import echarts from 'echarts';
import { RadioGroup, Radio } from 'vant';

import "./assets/css/common.css";

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
Vue.use(Divider);
Vue.use(NoticeBar);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Field);
Vue.use(Form);
Vue.use(Switch);
Vue.use(Uploader);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Tab);
Vue.use(Tabs);

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$cookie = VueCookie
Vue.prototype.$echarts = echarts


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
