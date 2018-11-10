<template>
    <div>
        <Container class="square" :rts="[
        { id: '0',  t: 'Functional Programming',      d: '', p: '/notes/func-prog'},
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
