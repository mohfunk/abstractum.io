<template>
    <div class="home">
        <Container :cont="blog"/>
        <div class="icns">
            <a href="https://twitter.com/mohfunk"><i class="t fab fa-twitter"/></a>
            <a href="https://github.com/mohfunk"><i class="g fab fa-github"/></a>
            <router-link class="ti" to="/about" id="ti"><i class="q fas fa-question"/></router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
@Component({
    name: 'home',
    components: {
        Container
    },
})
export default class Home extends Vue {
    data() {
        return {
            blog: require("@/assets/json/blog.json"),
        }
    }
}
</script>
