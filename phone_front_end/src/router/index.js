import Vue from 'vue'
import Router from 'vue-router'

// 手机
import WeinuoHome from '@/components/phone/WeinuoHome'
import Service from '@/components/phone//service'
import Programme from '@/components/phone/programme'

import Industry from '@/components/phone/industry'
import Agriculture from '@/components/phone/industry/Agriculture'
import Medical from '@/components/phone/industry/Medical'
import Government from '@/components/phone/industry/Government'
import Culture from '@/components/phone/industry/Culture'
import Cosmetology from '@/components/phone/industry/Cosmetology'
import RealEstate from '@/components/phone/industry/RealEstate'
import Environment from '@/components/phone/industry/Environment'
import Furniture from '@/components/phone/industry/Furniture'
import Tourism from '@/components/phone/industry/Tourism'

import Case from '@/components/phone/case'
import CaseFirst from '@/components/phone/case/CaseFirst'
import About from '@/components/phone/about'

import Advantage from '@/components/phone/about/Advantage'
import Introduction from '@/components/phone/about/Introduction'
import Idea from '@/components/phone/about/Idea'
import ManagementModel from '@/components/phone/about/ManagementModel'
import Prize from '@/components/phone/about/Prize'
import Business from '@/components/phone/about/Business'


// pc

import PcHome from '@/components/pc/WeinuoHome'
import PcService from '@/components/pc/Service'
import PcProgram from '@/components/pc/Program'
import PcIndustry from '@/components/pc/Industry'
import PcCase from '@/components/pc/Case'
import PcAbout from '@/components/pc/About'

Vue.use(Router);

Vue.component('PcService', PcService);
Vue.component('PcProgram', PcProgram);
Vue.component('PcIndustry', PcIndustry);
Vue.component('PcCase', PcCase);
Vue.component('PcAbout', PcAbout);


export default new Router({
    routes: [
        // pc
        {
            path: '/pc',
            name: 'PcHome',
            component: PcHome,
        },

        // phone
        {
            path: '/phone',
            name: 'WeinuoHome',
            component: WeinuoHome,
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
        }, {
            path: '/about/Advantage',
            name: 'Advantage',
            component: Advantage
        }, {
            path: '/about/Introduction',
            name: 'Introduction',
            component: Introduction
        }, {
            path: '/about/Idea',
            name: 'Idea',
            component: Idea
        }, {
            path: '/about/ManagementModel',
            name: 'ManagementModel',
            component: ManagementModel
        }, {
            path: '/about/Prize',
            name: 'Prize',
            component: Prize
        }, {
            path: '/about/Business',
            name: 'Business',
            component: Business
        }
    ]
})
