import Vue from 'vue'
import Router from 'vue-router'
import start from '../components/start'
import intro from '../components/intro'
import choose from '../components/choose'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: start
    }, {
      path: '/intro',
      name: 'intro',
      component: intro
    },{
      path: '/choose',
      name: 'choose',
      component: choose
    }
  ]
})
