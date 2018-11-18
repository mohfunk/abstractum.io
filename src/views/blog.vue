<template>
    <div>
        <Container :cont="[
                            {
                                id: '1',
                                t: 'We Are But Reformers',
                                d: 'My thoughts on the current Situation in Saudi Arabia',
                                p: '/blog/reformers',
                                date: 'Nov 2018'
                            },
                            {
                                id: '0', 
                                t: 'Play', 
                                d: 'On the Importance of Play',
                                p:'/blog/play',
                                date: 'July 2017'
                            }
                         ]"/>

        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
@Component({
    name: 'Blog',
    components: {
        Container
    },
})
export default class Blog extends Vue {}
</script>
