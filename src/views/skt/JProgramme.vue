<template>
    <div>
        <a href="https://github.com/mohfunk/sketchings/tree/master/Jerusalem_Programme">
            <i class="fab fa-github"/>
        </a>
        <Skt :s="sk"/> 
        </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skt from '@/components/sket.vue';
import JProgramme from '@/assets/ts/JProgramme.ts';
@Component({
    name: 'JProgramme',
    components: {
        Skt
    },
})
export default class JProgrammeView extends Vue {
    sk = new JProgramme();
}
</script>

<style lang="sass" scoped>
.skt
    display: contents
</style>
