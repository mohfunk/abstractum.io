<template>
    <div class="cont">
        <router-link v-for="item in cont" :key="item.id" :to="item.p">
            <div class="elem">
                <h1>{{item.t}}</h1>
                <h4>{{item.d}}</h4>
                <h6>{{item.date}}</h6>
            </div>
        </router-link>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'Container',
    props: {
        cont: Object,
    }
})
export default class Container extends Vue{}
</script>
