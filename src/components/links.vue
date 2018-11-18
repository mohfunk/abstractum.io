<template>
    <div class="rt">
        <router-link class="ti" to="/" id="ti">Abstractum</router-link>
        <router-link v-for="item in rt.rts" :key="item.id"
                     :to="item.to"
                     >{{item.p}}</router-link>
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
export default class Links extends Vue{

}
</script>
