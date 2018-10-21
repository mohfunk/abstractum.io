<template>
    <div id="app">
        <Header title="Abstractum" tpath="/" 
                                :rts="[
                                { id: '1', t: 'Projects', p:
                                '/projects' },
                                { id: '2', t: 'blog', p: '/blog' },
                                { id: '3', t: 'about', p: '/about' }
                                ]"/>
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </div>
</template>
<script>
import bg from "./components/bg.vue";
import Header from "./components/header.vue";
export default {
    name: 'home',
    components: {
        bg,
        Header
    }
}


</script>
<style lang="sass">
@import 'assets/sass/main.sass'
@import 'assets/sass/header.sass'
</style>
