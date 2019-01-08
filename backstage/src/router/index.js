import Vue from 'vue'
import Router from 'vue-router'
import WeinuoAdmin from '@/components/WeinuoAdmin'

import Address from '@/components/Address'
import Connection from '@/components/Connection'

import Case from '@/components/Case'
import Move from '@/components/Move'

import Industry from '@/components/Industry'
import Program from '@/components/Program'
import Service from '@/components/Service'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WeinuoAdmin',
      component: WeinuoAdmin
    }, {
          path: '/Address',
          name: 'Address',
          component: Address
      }, {
          path: '/Connection',
          name: 'Connection',
          component: Connection
      }, {
          path: '/Case',
          name: 'Case',
          component: Case
      }, {
          path: '/Move',
          name: 'Move',
          component: Move
      }, {
          path: '/Industry',
          name: 'Industry',
          component: Industry
      }, {
          path: '/Program',
          name: 'Program',
          component: Program
      }, {
          path: '/Service',
          name: 'Service',
          component: Service
      }
  ]
})
