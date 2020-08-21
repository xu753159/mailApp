import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const Home =()=>import('views/home/home.vue')
const Cart =()=>import('views/cart/cart.vue')
const Profile=()=>import('views/profile/profile.vue')
const Category =()=>import('views/category/category.vue')
const Detail =()=>import('views/detail/Detail.vue')

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)


const routes = [
    {
      path: '',
      redirect:'/home',
      name: 'App',
  
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/detail/:iid',
      component:Detail
    }
  
  ]


const router = new VueRouter({
    routes,
    mode: 'history',

})

export default router
