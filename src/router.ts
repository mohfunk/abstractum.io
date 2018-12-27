import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Skt from './views/Skt.vue';
import proj from './views/Proj.vue';
import games from './views/Game.vue';
//games.imp
import sol from "./views/games/sol.vue";
import Wt from './views/games/wt.vue';
//projs.imp
import Mohra from './views/proj/mohra.vue';
import Vis from './views/proj/vis.vue';
//posts.imp
import rustown from "./views/posts/rustown.vue";
import hask from "./views/posts/hask.vue";
import fvsimp from "./views/posts/fvsimp.vue";
import Ref from './views/posts/Ref.vue';
import Play from './views/posts/Play.vue';

Vue.use(Router);

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        { path: '/',           name: 'home',            component: Home  },
        { path: '/about',      name: 'about',           component: About },
        { path: '/sketch',        name: 'sketchings',      component: Skt },
        { path: '/games',        name: 'sketchings',      component: games },
        { path: '/projects',        name: 'sketchings',      component: proj },
//posts.path
{ path: "/rustown",  name: "rustown", component: rustown },
{ path: "/hask",  name: "hask", component: hask },
{ path: "/fvsimp",  name: "fvsimp", component: fvsimp },
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
