import Vue from 'vue'
import Router from 'vue-router'
import WeinuoHome from '@/components/WeinuoHome'
import Service from '@/components//service'
import Programme from '@/components/programme'

import Industry from '@/components/industry'
import Agriculture from '@/components/industry/Agriculture'
import Medical from '@/components/industry/Medical'
import Government from '@/components/industry/Government'
import Culture from '@/components/industry/Culture'
import Cosmetology from '@/components/industry/Cosmetology'
import RealEstate from '@/components/industry/RealEstate'
import Environment from '@/components/industry/Environment'
import Furniture from '@/components/industry/Furniture'
import Tourism from '@/components/industry/Tourism'

import Case from '@/components/case'
import CaseFirst from '@/components/case/CaseFirst'
import About from '@/components/about'



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'WeinuoHome',
            component: WeinuoHome
        }, {
            path: '/service',
            name: 'Service',
            component: Service
        }, {
            path: '/programme',
            name: 'Programme',
            component: Programme
        }, {
            path: '/industry',
            name: 'Industry',
            component: Industry
        }, {
            path: '/case',
            name: 'Case',
            component: Case
        }, {
            path: '/about',
            name: 'about',
            component: About
        }, {
            path: '/case/CaseFirst',
            name: 'CaseFirst',
            component: CaseFirst
        }, {
            path: '/industry/Agriculture',
            name: 'Agriculture',
            component: Agriculture
        }, {
            path: '/industry/Medical',
            name: 'Medical',
            component: Medical
        }, {
            path: '/industry/Government',
            name: 'Government',
            component: Government
        }, {
            path: '/industry/Culture',
            name: 'Culture',
            component: Culture
        }, {
            path: '/industry/Cosmetology',
            name: 'Cosmetology',
            component: Cosmetology
        }, {
            path: '/industry/RealEstate',
            name: 'RealEstate',
            component: RealEstate
        }, {
            path: '/industry/Environment',
            name: 'Environment',
            component: Environment
        }, {
            path: '/industry/Furniture',
            name: 'Furniture',
            component: Furniture
        }, {
            path: '/industry/Tourism',
            name: 'Tourism',
            component: Tourism
        },
    ]
})
