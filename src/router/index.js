import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/Login.vue'

//异步
 const Goods = ()=>import('../views/Goods/Goods.vue')
// const GoodsList = ()=>import('../views/Goods/GoodsList/Goods.vue')
// const GoodsVerify = ()=>import('../views/Goods/GoodsVerify/index.vue')
 const Params = ()=>import('../views/Params/Params.vue')
// const Specifications =()=>import('../views/Params/ParamsInfo/Specifications.vue')
 const Advert = ()=>import('../views/Advert/Advert.vue')
 const Order = ()=>import('../views/Order/index.vue')
 const OrderList = ()=>import('../views/Order/OrderList/index.vue')
 const OrderBack = ()=>import('../views/Order/OrderBack/index.vue')
// const ChangeGoods =()=>import('../views/Order/ChangeGoods/index.vue')
// const SendGoods =()=>import('../views/Order/SendGoods/index.vue')
// const User =() =>import('../views/User/index.vue')
// //子级路由
// const AddGoods = ()=>import('../views/Goods/GoodsList/AddGoods.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Layout,
    children:[
      {
        path:'/',
        name:Home,
        component:Home
      },
      {
        path:'/goods',
        name:'Goods',
        component:Goods
      },
      {
        path:'/params',
        name:'Params',
        component:Params
      },
      {
        path:'/advert',
        name:'Advert',
        component:Advert
      },
      {
        path:'/order',
        name:'Order',
        component:Order,
        redirect:'/Order/order-list',
        children:[
          {
            path:'order-list',
            component:OrderList
          },
          {
            path:'order-back',
            component:OrderBack
          }
        ]
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
