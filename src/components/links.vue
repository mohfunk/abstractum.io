<template>
    <div class="rt">
        <router-link class="ti" to="/" id="ti" params="{ p: ''}">Abstractum</router-link>
        <router-link v-for="item in rt.rts" :key="item.id"
                     :to="item.params.p"
                     >{{item.params.p}}</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'Links',
    props: {
        rt: Object,
    },
})
export default class Links extends Vue{}
</script>
