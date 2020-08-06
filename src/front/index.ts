import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const start = async () => {
  const router = new VueRouter({
    routes: [
      { path: '/', alias: '/manage/carousel', component: () => import('./views/manage/index.vue') }
    ]
  })

  new Vue({
    router,
    template: `
     <router-view></router-view>
    `
  }).$mount('#app')
}

start()