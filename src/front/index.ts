import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const start = async () => {
  const router = new VueRouter({
    routes: [
      { path: '/', component: () => import('./views/carousel/index.vue') },
      { path: '/carousel/list', component: () => import('./views/manage/carousel/list.vue') },
      { path: '/carousel/create', component: () => import('./views/manage/carousel/create.vue') },
      { path: '/files/upload', component: () => import('./views/files/upload.vue') },
      { path: '/files/list', alias: '/files', component: () => import('./views/files/list.vue') }
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