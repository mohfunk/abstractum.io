import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Blog from './views/Blog.vue';
import Sketchings from './views/Sketchings.vue';
import Notes from './views/Notes.vue';
Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        // Main

        { path: '/',         name: 'home',       component: Home },
        { path: '/:p',         name: 'projects',       component: Blog, props: true},
        // Projects
        //{ path: '/projects/wild-thieves', name: 'wild-thieves', component: () => import('./views/projects/wild-thieves.vue') },
        //{ path: '/projects/mohra',        name: 'mohra',        component: () => import('./views/projects/mohra.vue') },
        //{ path: '/projects/visualizer',   name: 'visualizer',   component: () => import('./views/projects/visualizer.vue') },
        //{ path: '/projects/solitude',     name: 'solitude',     component: () => import('./views/projects/solitude.vue') },
        // Blog Posts
        { path: '/blog/reformers', name: 'reform', component: () => import('./views/blog/Reformers.vue') },
        { path: '/blog/play',      name: 'play',   component: () => import('./views/blog/Play.vue') },
        // Sketchings
        { path: '/sketchings/spin',    name: 'spin', component: () => import('./views/sketchings/Spin.vue') },
        //{ path: '/sketchings/genesis', name: 'spin', component: () => import('./views/sketchings/Genesis.vue') },
        //{ path: '/sketchings/faces',   name: 'spin', component: () => import('./views/sketchings/Faces.vue') },
        // Notes
        { path: '/notes/func-prog', name: 'functional-programming', component: () => import('./views/notes/FunctionalProgramming.vue') },
    ],
});
