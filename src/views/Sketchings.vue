<template>
    <div>
        <Container class="square" :rts="[
                            {
                                id: '2',
                                t: 'Spining Cube',
                                d: 'The cube on the Homepage',
                                p: '/sketchings/spin',
                            },
                            {
                             
                                id: '1', 
                                t: 'Genesis', 
                                d: 'Galaxy Simulator',
                                p:'/sketchings/galaxy',
                            },
                            {
                                id: '0',
                                t: 'Faces',
                                d: 'Pixel Art Character Generation',
                                p: '/sketchings/procgen',
                            
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
    name: 'Sketchings',
    components: {
        Container
    },
})
export default class Sketchings extends Vue {}
</script>
