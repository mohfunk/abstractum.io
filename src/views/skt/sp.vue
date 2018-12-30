<template>
    <div>
        <a href="https://github.com/mohfunk/sketchings/tree/master/sp">
            <i class="fab fa-github"/>
        </a>
        <Skt :s="sk"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skt from '@/components/sket.vue';
import sp from '@/assets/ts/sp.ts';
@Component({
    name: 'sp',
    components: {
        Skt
    },
})
export default class spView extends Vue {
    sk = new sp();
}
</script>

<style lang="sass">
a
    text-decoration: none
    color: #000
    left: 50%
</style>
