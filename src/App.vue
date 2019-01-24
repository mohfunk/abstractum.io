<template>
    <div id="app">
        <div class="header">
            <router-link class="ti" to="/" id="ti"><h1>Mohammed Alhaythm</h1></router-link>
        </div>
        <div class="content">
            <transition name="fade" mode="out-in">
            <router-view/>
            </transition>
        </div>

        <div class="foot">
            <p>MIT Copyright © 2019 Mohammed alhaythm</p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class App extends Vue{
    data() {
        return {
        }
    }
}
</script>

<style lang="sass">
@import './assets/sass/proj.sass'
@import './assets/sass/post.sass'
</style>
