import {createRouter, createWebHistory} from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ForgotPassView from "../views/ForgotPassView.vue";
import NewPassView from "../views/NewPassView.vue";
// import NotFoundView from "../views/NotFoundView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/forgot-pass',
            name: 'forgotPass',
            component: ForgotPassView
        },
        {
            path: '/password-reset/:token',
            name: 'newPass',
            component: NewPassView
        },
        {
            path: '/404',
            name: 'not-found',
            component: NotFoundView
        },
        {
            path: '/:catchAll(.*)',
            redirect: '/404',
        },
    ]
})

export default router