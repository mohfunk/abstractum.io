<template>
    <div class="sketch">
            <Container :cont="proj" />
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
@Component({
    name: 'home',
    components: {
        Container,
    },
})
export default class Home extends Vue {
    data() {
        return {
            proj: require("@/assets/json/proj.json"),
        }
    }
}
</script>
