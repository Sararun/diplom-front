import {ROUTE_NAMES} from "@/constants/routeNames.js";
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
       /* {
            path: '/',
            name: 'Layout',
            component: () => import('@/layouts/MainLayout.vue'),

        },*/
        {
            path: '/',
            name: 'GuestLayout',
            component: () => import('@/layouts/GuestLayout.vue'),
            children: [
                {
                    path: '/sign-in',
                    name: ROUTE_NAMES.LoginPage,
                    component: () => import('@/pages/LoginPage.vue'),
                },
                {
                    path: '/sign-up',
                    name: ROUTE_NAMES.RegistrationPage,
                    component: () => import('@/pages/RegistrationPage.vue'),
                },
            ],
        },

    ]
})
export default router