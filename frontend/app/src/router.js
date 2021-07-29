import {createRouter, createWebHistory} from 'vue-router'
// import store from './store'

import IndexPage from './pages/IndexPage.vue'
import TheAuth from './pages/TheAuth'
import TheBeers from './pages/TheBeers'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'rootRoute', component: IndexPage},
        {path: '/beers', name: 'beers', component: TheBeers, meta: {requireAuth: true}},
        {path: '/auth', name: 'auth', component: TheAuth, meta: {requireUnAuth: true}},
    ]
})

router.beforeEach(async(to, from, next) => {
    // const isLoggedIn = store.state.auth.isAuth
    const token = localStorage.getItem('token')
    const routerAuthCheck = !!token

    if(to.matched.some(record => record.meta.requireAuth)){
        // Check if user is Authenticated
        if(routerAuthCheck){
            // user is authenticated
            // TODO: commit to Store that the user is authenticated
            next();
        }
        else{
            // user in not authenticated
            next('/auth')
        }
    }
    if(to.matched.some(record => record.meta.requireUnAuth)){
        if(routerAuthCheck) next('/beers')
        else next()
    }
    next()
})

export default router

