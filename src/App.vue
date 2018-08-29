<template>
    <div id="app">
        <bg></bg>
        <router-link class="g" to="/projects">Projects</router-link>
        <router-link class="r" to="/">Abstractum</router-link>
        <router-link class="b" to="/about">About</router-link> 
        <CopyRight date="2018" cp="Mohammed Fahad" loc="Waterloo, On" />
        <router-view/>
    </div>
</template>
<script>
import CopyRight from "./components/cpr.vue";
import bg from "./components/bg.vue";
export default {
    name: 'home',
    components: {
        bg,
        CopyRight
    }
}


</script>
<style>

#app {

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

a {
    font-family: "Futura";
    font-size: 22px;
    color: #EB3C3C;
    display: inline-block;
    color: #ffffff;
    position: absolute;
    text-decoration: none;
    top: 10%;

}
a.r {
    font-family: Anteb;
    font-size: 32px;
    text-align: center;
    left: 50%;
    margin-left: -80px;
    margin-top: -6px;
    animation: bout 1000ms linear both;


}
a.b{
    margin-left: 20%;
    right: 30%;
    margin-right: -25px
}
a.g{
    margin-right: 20%;
    left: 30%;
    margin-left: -25px;
}
a:hover {
    animation: bin 1000ms linear both;
    cursor: pointer;
}

a.g.router-link-exact-active {
    color: #60ee34
}
a.b.router-link-exact-active {
    color: #437ED2;

}
a.r.router-link-exact-active {
    color: #EB3C3C;

}
@media only screen and (max-width: 600px) {
    a {
        font-size: 18px;
    }
    a.r {
        top: 10%;
        font-size: 26px;
        left: 53%
    }
    a.g, a.b {
        left: 50%;
        right: 50%;
        margin-left: 0px;
        margin-right: 0px;
    }
    a.g {
        top: 18%;
        margin-left: -40%;

    }
    a.b {
        top: 18%;
        margin-right: -40%;
    }


}


</style>
