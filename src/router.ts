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
import Money from "./views/proj/Money.vue";
import sinkingmen from "./views/proj/sinkingmen.vue";
import Mohra from './views/proj/mohra.vue';
import Vis from './views/proj/vis.vue';
//posts.imp
import csdegree from "./views/posts/csdegree.vue";
import fvsimp from "./views/posts/fvsimp.vue";
import Ref from './views/posts/Ref.vue';
import Play from './views/posts/Play.vue';
//skt.imp
import JProgramme from "./views/skt/JProgramme.vue";
import sp from "./views/skt/sp.vue";
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
        { path: "/blog/csdegree",  name: "csdegree", component: csdegree },
        { path: "/blog/fvsimp",  name: "fvsimp", component: fvsimp },
        { path: '/blog/play',       name: 'play',     component: Play  },
        { path: '/blog/reformers',  name: 'reform',   component: Ref   },
        //games.path
        { path: "/games/sol",  name: "sol", component: sol },
        { path: '/games/wt',         name: 'wt',       component: Wt    },
        //projs.path
        { path: "/projects/Money",  name: "Money", component: Money },
        { path: "/projects/sinkingmen",  name: "sinkingmen", component: sinkingmen },
        { path: '/projects/mohra',      name: 'mohra',    component: Mohra },
        { path: '/projects/vis',        name: 'vis',      component: Vis   },
        //skt.path
        { path: "/sketch/JProgramme",  name: "JProgramme", component: JProgramme },
        { path: "/sketch/sp",  name: "sp", component: sp },
    ]
});
