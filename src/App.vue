<template>
    <div id="app">
        <Header title="Abstractum" tpath="/" 
                                   :rts="[
                                            {id: '0', t: 'projects',   p: '/projects'},
                                            {id: '1', t: 'blog',       p: '/blog'},
                                            {id: '2', t: 'sketchings', p: '/sketchings'},
                                            {id: '3', t: 'about',      p: '/about'}
                                         ]"/>
            <div class="content">
                <transition name="fade" mode="out-in">
                <router-view/>
                </transition>
            </div>
            <Footer/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
@Component({
    components: {
        Header,
        Footer,
    },
})
export default class App extends Vue{}
</script>
<style lang="sass">
@import 'assets/sass/main.sass'
@import 'assets/sass/header.sass'
@import 'assets/sass/footer.sass'
@import 'assets/sass/cont.sass'
@import 'assets/sass/post.sass'
@import 'assets/sass/about.sass'
</style>
