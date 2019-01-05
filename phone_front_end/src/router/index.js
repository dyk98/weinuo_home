import Vue from 'vue'
import Router from 'vue-router'
import WeinuoHome from '@/components/WeinuoHome'
import Case from '@/components/case'
import CaseFirst from '@/components/case/CaseFirst'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'WeinuoHome',
            component: WeinuoHome
        }, {
            path: '/case',
            name: 'case',
            component: Case
        }, {
            path: '/case/CaseFirst',
            name: 'CaseFirst',
            component: CaseFirst
        },

    ]
})
