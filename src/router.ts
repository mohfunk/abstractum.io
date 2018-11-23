import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Ref from './views/posts/Ref.vue';
import Play from './views/posts/Play.vue';
import Mohra from './views/proj/mohra.vue';
import Vis from './views/proj/vis.vue';
import Wt from './views/proj/wt.vue';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/',           name: 'home',       component: Home },
        { path: '/about',           name: 'about',       component: About },
        // blog posts.
        { path: '/play',           name: 'play',       component: Play },
        { path: '/reformers',           name: 'reform',       component: Ref },

        // Projects.
        { path: '/wt',           name: 'wt',       component: Wt },
        { path: '/mohra',           name: 'mohra',       component: Mohra },
        { path: '/vis',           name: 'vis',       component: Vis },
    ]
});
