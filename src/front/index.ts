import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('nav-bar', () => import('./components/navbar.vue'))

const start = async () => {
  const router = new VueRouter({
    routes: [
      { path: '/', name: 'home', component: () => import('./views/carousel/index.vue') },
      { path: '/carousel/list', name: 'carouselList', component: () => import('./views/manage/carousel/list.vue') },
      { path: '/carousel/create', name: 'carouselCreate', component: () => import('./views/manage/carousel/create.vue') },
      { path: '/files/upload', name: 'filesUpload', component: () => import('./views/files/upload.vue') },
      { path: '/files/list', name: 'filesList', alias: '/files', component: () => import('./views/files/list.vue') }
    ]
  })

  new Vue({
    router,
    template: `
    <div>
      <nav-bar />
      <div class="container mt-3"><router-view></router-view></div>
    </div>`
  }).$mount('#app')
}

start()