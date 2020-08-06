import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const start = async () => {
  const router = new VueRouter({
    routes: [
      { path: '/', alias: '/carousel', component: () => import('./views/carousel/index.vue') },
      { path: '/files/upload', alias: '/files', component: () => import('./views/files/upload.vue') }
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