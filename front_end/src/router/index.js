import Vue from 'vue'
import Router from 'vue-router'
import MyHeader from '@/components/common/MyHeader'
import Home from '@/components/Home'
import TechnicalImplementation from '@/components/TechnicalImplementation'
import Industry from '@/components/Industry'
import DigitalMarketing from '@/components/DigitalMarketing'
import ConsultationService from '@/components/ConsultationService'
import OperationalService from '@/components/OperationalService'
import CareerOpportunit from '@/components/CareerOpportunit'
import AboutUs from '@/components/AboutUs'

Vue.use(Router)

Vue.component('MyHeader',MyHeader)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MyHeader
    },{
          path: '/home/industry',
          name: 'Industry',
          component: Industry
      }, {
          path: '/home/technical',
          name: 'TechnicalImplementation',
          component: TechnicalImplementation
      },{
          path: '/home/marketing',
          name: 'DigitalMarketing',
          component: DigitalMarketing
      },{
          path: '/home/consultation',
          name: 'ConsultationService',
          component: ConsultationService
      },{
          path: '/home/operational',
          name: 'OperationalService',
          component: OperationalService
      },{
          path: '/home/opportunity',
          name: 'CareerOpportunit',
          component: CareerOpportunit
      },{
          path: '/home/us',
          name: 'AboutUs',
          component: AboutUs
      }
  ]
})
