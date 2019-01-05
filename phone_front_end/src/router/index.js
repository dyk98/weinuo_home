import Vue from 'vue'
import Router from 'vue-router'
import WeinuoHome from '@/components/WeinuoHome'
import Service from '@/components//service'
import Programme from '@/components/programme'
import Industry from '@/components/industry'
import Case from '@/components/case'
import About from '@/components/about'
import CaseFirst from '@/components/case/CaseFirst'

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
        },

    ]
})
