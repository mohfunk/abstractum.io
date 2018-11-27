import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
//games.imp
import sol from "./views/games/sol.vue";
import Wt from './views/games/wt.vue';
//projs.imp
import Mohra from './views/proj/mohra.vue';
import Vis from './views/proj/vis.vue';
//posts.imp
import Ref from './views/posts/Ref.vue';
import Play from './views/posts/Play.vue';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/',           name: 'home',     component: Home  },
        { path: '/about',      name: 'about',    component: About },
//posts.path
        { path: '/play',       name: 'play',     component: Play  },
        { path: '/reformers',  name: 'reform',   component: Ref   },
//games.path
{ path: "/sol",  name: "sol", component: sol },
        { path: '/wt',         name: 'wt',       component: Wt    },
//projs.path
        { path: '/mohra',      name: 'mohra',    component: Mohra },
        { path: '/vis',        name: 'vis',      component: Vis   },
    ]
});
