<template>
    <div class="sketch">
            <Container :cont="sket" />
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
            sket: require("@/assets/json/sket.json"),
        }
    }
}
</script>
