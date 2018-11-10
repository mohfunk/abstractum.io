<template>
    <div>
        <Container class="square" :rts="[
                            { id: '0', t: 'Functional Programming', d: 'Using Racket', p: '/notes/func-prog'},
                            { id: '1', t: 'Imperative Programming', d: 'Using C', p:'/notes/impr-prog' },
                            { id: '2', t: 'Object Oriented Programming', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '3', t: 'Baby Compilers', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '4', t: 'Operating Systems', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'User Interfaces', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Data Structures', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Algorithms', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Models of Computation', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Computational Mathematics', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Numerical Linear Algebra', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Advanced Algorthims', d: 'Using C++', p: '/sketchings/oop' },
                            { id: '5', t: 'Computer Graphics', d: 'Using C++', p: '/sketchings/oop' },
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
    name: 'Notes',
    components: {
        Container
    },
})
export default class Notes extends Vue {}
</script>
