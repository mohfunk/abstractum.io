<template>
    <div id="app">
        <Header title="Abstractum" tpath="/" 
                                :rts="[
                                { id: '1', t: 'projects', p:
                                '/projects' },
                                { id: '2', t: 'blog', p: '/blog' },
                                { id: '4', t: 'sketchings', p: '/sketch' },
                                { id: '3', t: 'about', p: '/about' }
                                ]"/>
        <div class="content">
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Header from "./components/header.vue";
import Footer from "./components/Footer.vue";
export default {
    name: 'home',
    components: {
        Header,
        Footer
    }
}


</script>
<style lang="sass">
@import 'assets/sass/main.sass'
@import 'assets/sass/header.sass'
@import 'assets/sass/footer.sass'
@import 'assets/sass/cont.sass'
@import 'assets/sass/post.sass'
@import 'assets/sass/about.sass'
</style>
