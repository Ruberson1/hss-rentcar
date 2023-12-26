import {createRouter, createWebHistory} from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ForgotPassView from "../views/ForgotPassView.vue";
import NewPassView from "../views/NewPassView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import CarView from "../views/CarView.vue";
import ReservationView from "../views/ReservationView.vue";
import UserView from "../views/UserView.vue";
import UserEditView from "../views/UserEditView.vue";
import CarEditView from "../views/CarEditView.vue";
import ReservationFormView from "../views/ReservationFormView.vue";
import ReservationEditView from "../views/ReservationEditView.vue";



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
            path: '/categories',
            name: 'categories',
            component: CategoriesView
        },
        {
            path: '/cars',
            name: 'cars',
            component: CarView
        },
        {
            path: '/cars/:carId',
            name: 'carsEdit',
            component: CarEditView
        },
        {
            path: '/reservations',
            name: 'reservations',
            component: ReservationView
        },
        {
            path: '/reservation/user/:userId',
            name: 'reservationForm',
            component:  ReservationFormView
        },
        {
            path: '/reservation/:reservationId',
            name: 'reservationEdit',
            component:  ReservationEditView
        },
        {
            path: '/users',
            name: 'users',
            component: UserView
        },
        {
            path: '/users/:userId?',
            name: 'usersForm',
            component: UserEditView
        },
    ]
})

export default router