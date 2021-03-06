import Vue from 'vue'
import Router from 'vue-router'
import Nearby from '@/components/Nearby'
import Splash from '@/components/Splash'
import regispets from '@/components/Regispets'
import Signin from '@/components/Signin'
import Photo from '@/components/Photo'
import Favorite from '@/components/Favorite'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/splash', name: 'Splash', component: Splash},
    {path: '/', component: Nearby, props: true, name: 'Nearby'},
    {path: '/regispets', name: 'Resgister', props: true, component: regispets},
    {path: '/signin', component: Signin, props: true, name: 'Signin'},
    {path: '/capture', component: Photo, props: true, name: 'Photo'},
    {path: '/fav', component: Favorite, props: true, name: 'Favorite'},
    {path: '/about', component: About, props: true, name: 'About'}
  ]
})
