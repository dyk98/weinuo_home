import Vue from 'vue'
import Router from 'vue-router'
import CompanyInFo from '@/components/common/CompanyInFo'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use('company_info',CompanyInFo)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CompanyInFo
    }, {
      path: '/common',
      name: 'CompanyInFo',
      component: CompanyInFo
    }
  ]
})
