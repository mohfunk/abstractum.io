<template>
    <div class="header">
        <div class="rt">
            <router-link class="ti" :to="tpath" id="ti">{{ title }}</router-link>
            <router-link v-for="item in rts" :key="item.id"
                         :to="item.p"
                         >{{item.t}}</router-link>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    props: {
        title: String,
        tpath: String,
        rts  : Array,
        icn  : Array
    }
})
export default class Header extends Vue{
}
</script>
