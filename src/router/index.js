import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import { Circle } from 'vant'
const Home = () => import('@/views/Home')
const House = () => import('@/views/House')
const News = () => import('@/views/News')
const My = () => import('@/views/My')
const Login = () => import('@/views/Login')
const Collect = () => import('@/views/Collect')
const MyHouse = () => import('@/views/MyHouse')
const Publish = () => import('@/views/Publish')
const Map = () => import('@/views/Map')
const CityList = () => import('@/views/CityList')
const InputHouse = () => import('@/views/InputHouse')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    redirect: '/home',
    children: [
      { path: 'home', component: Home },
      { path: 'house', component: House },
      { path: 'news', component: News },
      { path: 'my', component: My }
    ]
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/collect', component: Collect
  },
  {
    path: '/myhouse', component: MyHouse
  },
  {
    path: '/publish', component: Publish
  },
  {
    path: '/map', component: Map
  },
  {
    path: '/citylist', component: CityList
  },
  {
    path: '/inputhouse', component: InputHouse
  }
]

const router = new VueRouter({
  routes
})

export default router
