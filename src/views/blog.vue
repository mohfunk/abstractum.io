<template>
    <div>
        <Container :blog="rt"/>
        </router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import Router from '../router';
import Container from '@/components/container.vue';
@Component({
    name: 'Blog',
    props: {
        p: String,
    },
    components: {
        Container
    },
})
export default class Blog extends Vue {
    data() {
        return {
            rt: this.rt = require('../assets/json/' + this.p + '.json')
        }
    }
    @Watch('p')
    onpChanged() { 
        this.rt = require('../assets/json/' + this.p + '.json');
        this.$forceUpdate();
    }
}
</script>
