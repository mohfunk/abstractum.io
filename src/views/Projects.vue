<template>
    <div class="projects">
        <Container :rts="[
        {
        id: '0',
        t: 'Wild Thieves',
        d: 'Robbery Action Game',
        p: '',
        date: 'Spring 2019'
        },
        {
        id: '1', 
        t: 'The Mohra Programming Language', 
        d: 'An Arabic Programming Langage',
        p:'',
        date: 'Early in Development'
        },
        {
        id: '2',
        t: 'Solitude',
        d: 'A narrative-driven Game based on a classic Arabic Novel',
        p: '',
        date: '2021'
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
    name: 'Projects',
    components: {
        Container
    },
})
export default class Projects extends Vue {}
</script>
