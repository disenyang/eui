
if(ENV === 'local' || ENV === 'rd'){

    require('business/index.html');
}

import routerMap from './router';
import interponents from '../services/interponents.js';
import filters from '../filters/index.js';

import Components from '../components/index.js';

import '../styles/index.css';

import stores from 'stores';

// 引入vuex store
import vuexMap from '../../business/vuex/vuex.js'


Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(interponents);
Vue.use(filters);
Vue.use(Components);

var router = new VueRouter({
  mode: 'history',
  routes: routerMap(Vue)
}); 

//接口前缀
window.__interface = "/tongxiang";
var store = new Vuex.Store(vuexMap(Vue));

var App = new Vue({
  router, 
  store,
  data() {
    return {
      crumbs: []
    };
  }
});

router.beforeEach((to, from, next) => {
  // console.log("-----------------beforeEach------------------");
  next();
});

router.afterEach((to, from) => {
  // console.log("-----------------afterEach------------------");
  App.$data.crumbs = to.matched;
  App.$store.commit("setRouterName",to.name || ''); 

  stores.info.routerName = to.name || '';
  stores.info.routerMeta.title = getMetaTitle(to.meta && to.meta.title || '');
  stores.info.routerMeta.infoLink = to.meta && to.meta.infoLink;

  document.title = stores.info.routerMeta.title || '大前端统一开发平台';
  
  App 
    && App.$children 
    && App.$children[0] 
    && App.$children[0].$children 
    && App.$children[0].$children[1] 
    && App.$children[0].$children[1].scrollTo
    && App.$children[0].$children[1].scrollTo({x: 0, y: 0});
});

function getMetaTitle(title){
  
  if(title){
    
  }else if(!App.$data.crumbs || App.$data.crumbs.length < 1){
    title = "";

  }else{
    App.$data.crumbs.forEach(crumb => {
      if(crumb.meta.title){
        title = crumb.meta.title;
      }
    });
  }

  return title;
}


App.$mount('#app');