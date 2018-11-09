<template>
    <Skt :s="sk"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skt from '@/components/sketch.vue';
import Spin from '@/assets/ts/spin.ts';
@Component({
    name: 'Cube',
    components: {
        Skt
    },
})
export default class SpinCube extends Vue {
    sk = new Spin();
}
</script>
