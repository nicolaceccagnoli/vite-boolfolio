// Qui dentro ci scriviamo la configurazione di vue router
// che servirà per far sì che l'utente possa 'navigare' tra le nostre pagine

import { createRouter, createWebHistory } from "vue-router"; 

import IndexPage from './pages/IndexPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import SingleProjectPage from './pages/SingleProjectPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ContactPage from './pages/ContactPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexPage
        },
        {
            path: '/blog',
            name: 'projects.index',
            component: ProjectPage
        },
        {
            path: '/blog/:slug',
            name: 'projects.show',
            component: SingleProjectPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage
        }
    ]
});

export { router };