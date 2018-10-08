import Vue from 'vue'
import Router from 'vue-router'
import Item from '@/page/item/index'
import Home from '@/page/home/index'
import Score from '@/page/score/index'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [{
      path:'/',
      name:'app',
      component:App,
      children:[{
        path: '',
        component: Home
      },{
        path:'item',
        name:'item',
        component:Item
      },{
        path:'score',
        name:'score',
        component:Score
      }]
    }]
})
