<template>
    <div class="cont">
        <transition-group name="fade" mode="out-in" duration="1000">
        <router-link v-for="item in blog.arr" :key="item.id" :to="item.p">
            <div class="elem">
                <h1>{{item.t}}</h1>
                <h4>{{item.d}}</h4>
                <h6>{{item.date}}</h6>
            </div>
        </router-link>
        </transition-group>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'Container',
    props: {
        blog: Object,
    }
})
export default class Container extends Vue{}
</script>
