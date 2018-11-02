import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import bpost from './views/blog.vue'
import post from './views/play.vue'
import ppost from './views/ref.vue'
import poster from './views/re.vue'
import ppost2 from './views/r.vue'
import Spin from './components/spin.vue'
import Proc from './components/proc.vue'
import Gala from './components/gala.vue'
Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: bpost
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/projects',
            name: 'projects',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "projects" */ './views/Projects.vue')
        },
        {
            path: '/sketch',
            name: 'skt',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "projects" */ './views/sketch.vue'),
        },
                
        { 
            path: '/spin', 
            name: 'spin', 
            component: Spin
        },
        { 
            path: '/procgen', 
            name: 'proc', 
            component: Proc
        },

        { 
            path: '/galaxy', 
            name: 'gala', 
            component: Gala
        },
        {
            path: '/aa',
            name: 'poster',
            component: poster,
        },
        {
            path: '/b',
            name: 'post',
            component: post,
        },
        {
            path: '/blog/r',
            name: 'ppost',
            component: ppost
        },
        {
            path: '/blog/ds',
            name: 'ppost2',
            component: ppost2
        }
    ]
})
