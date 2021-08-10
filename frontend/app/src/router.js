import {createRouter, createWebHistory} from 'vue-router'

import IndexPage from './pages/IndexPage.vue'
import TheAuth from './pages/TheAuth'
import TheBeers from './pages/TheBeers'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'rootRoute', component: IndexPage},
        {path: '/beers', name: 'beers', component: TheBeers, meta: {requireAuth: true}},
        {path: '/auth', name: 'auth', component: TheAuth, meta: {requireUnAuth: true}},
        {path: '/:notFound(.*)', name: 'NotFoundRoute', redirect: '/'}
    ],
    scrollBehavior(){
        return {top: 0}
    }
})

router.beforeEach(async(to, from, next) => {
    
    // const token = localStorage.getItem('token')
    const token = "g";
    const routerAuthCheck = !!token

    if(to.matched.some(record => record.meta.requireAuth)){
        if(routerAuthCheck) {
            next();
        }else next('/auth')
    }
    else if(to.matched.some(record => record.meta.requireUnAuth)){
        if(routerAuthCheck) next('/beers')
        else next()
    }
    else next()
})

export default router

