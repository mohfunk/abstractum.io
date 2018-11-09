import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Blog from './views/Blog.vue';
import Sketchings from './views/Sketchings.vue';
Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        { 
            path: '/blog/reformers', 
            name: 'reform', 
            component: () => import('./views/blog/Reformers.vue')
        },
        {
            path: '/blog/play',
            name: 'play',
            component: () => import('./views/blog/Play.vue')
        },
        {
            path: '/sketchings',
            name: 'Sketchings',
            component: Sketchings
        },
        {
            path: '/sketchings/spin',
            name: 'spin',
            component: () => import('./views/sketchings/Spin.vue')
        },
    ],
});
