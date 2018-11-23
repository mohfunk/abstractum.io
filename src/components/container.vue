<template>
    <div class="cont" :id="cont.id">
        <h3>{{cont.title}}</h3>
        <div class="elem" v-for="item in cont.i" :key="item.id">
                <h3>{{item.date}}</h3>
            <router-link :to="item.to">
                <h3>{{item.t}}</h3>
            </router-link>
        </div>
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
