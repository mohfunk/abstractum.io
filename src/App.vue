<template>
    <div id="app">
        <div class="header">
            <router-link class="ti" to="/" id="ti"><h1>Mohammed Alhaythm</h1></router-link>
            <div class="moh">
                <p><i>hunc abstractum possidet</i></p>
            </div>
        </div>
            <div class="icns">
            <router-link class="ti" to="/" id="ti"><i class="q fas fa-book"/></router-link>
            <router-link class="ti" to="/projects" id="ti"><i class="q fas
                    fa-project-diagram"/></router-link>
            <router-link class="ti" to="/games" id="ti"><i class="q fas
                    fa-gamepad"/></router-link>
            <router-link class="ti" to="/sketch" id="ti"><i class="q far fa-sticky-note"/></router-link>
            <router-link class="ti" to="/about" id="ti"><i class="q fas
                    fa-portrait"/></router-link>
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
</style>
