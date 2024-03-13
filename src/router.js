// Qui dentro ci scriviamo la configurazione di vue router
// che servirà per far sì che l'utente possa 'navigare' tra le nostre pagine

import { createRouter, createWebHistory } from "vue-router"; 

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ProductPage from './pages/ProductPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contatti',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/prodotti/:id/vedi',
            name: 'prodotti',
            component: ProductPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        },

    ]
});

export { router };