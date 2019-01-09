import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import MyHeader from '@/components/common/MyHeader'
import CompanyInFo from '@/components/common/CompanyInFo'
import IndustrySection from '@/components/common/IndustrySection'
import Service from '@/components/common/Service'
import Program from '@/components/common/Program'
import About from '@/components/common/About'
import Case from '@/components/common/Case'

import TechnicalImplementation from '@/components/TechnicalImplementation'
import Industry from '@/components/Industry'
import DigitalMarketing from '@/components/DigitalMarketing'
import ConsultationService from '@/components/ConsultationService'
import OperationalService from '@/components/OperationalService'
import CareerOpportunit from '@/components/CareerOpportunit'
import AboutUs from '@/components/AboutUs'

Vue.use(Router);
Vue.component('CompanyInFo',CompanyInFo);
Vue.component('MyHeader',MyHeader);
Vue.component('IndustrySection',IndustrySection);
Vue.component('Service',Service);
Vue.component('Program',Program);
Vue.component('Case',Case);
Vue.component('About',About);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
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
