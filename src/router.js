import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store';

Vue.use(Router);

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/list',
            name: 'list',
            component: () => import(/* webpackChunkName: "new" */ './views/List.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/translate',
            name: 'translate',
            component: () => import(/* webpackChunkName: "translate" */ './views/Translate.vue')
        },
        {
            path: '/practice',
            name: 'practice',
            component: () => import(/* webpackChunkName: "practice" */ './views/Practice.vue')
        },
        {
            path: '/error403',
            name: 'error403',
            component: () => import(/* webpackChunkName: "error403" */ './views/Error403.vue')
        },
        {
            path: '*',
            name: 'error404',
            component: () => import(/* webpackChunkName: "error404" */ './views/Error404.vue')
        }
    ]
});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
    // Check if auth is required on this route
    // (including nested routes).
    const authRequired = routeTo.matched.some(route => route.meta.authRequired);

    // If auth isn't required for the route, just continue.
    if (!authRequired || store.getters['user/isLoggedIn']) return next();

    // If auth is required and the user is NOT currently logged in,
    // redirect to login
    next({ name: 'error403' });
});

export default router;
