<template>
    <div class="home">
        <div class="cnts">
            <Container :cont="proj"/>
            <Container :cont="blog"/>
            <skt/>
            <div class="icns">
            <a href="https://github.com/mohfunk/abstractum.io.git"><i class="q fas
                    fa-code-branch"/></a>
            <router-link class="ti" to="/about" id="ti"><i class="q fas fa-question"/></router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
import skt from '@/components/skt.vue';
@Component({
    name: 'home',
    components: {
        Container,
        skt
    },
})
export default class Home extends Vue {
    data() {
        return {
            blog: require("@/assets/json/blog.json"),
            proj: require("@/assets/json/proj.json"),
        }
    }
}
</script>
