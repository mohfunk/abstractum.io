<template>
    <div class="header">
        <Links :rt="rts" />
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Links from '@/components/links.vue'
@Component({
    name: 'Header',
    props: {
        rts: Object,
    },
    components: {
        Links,
    }
})
export default class Header extends Vue{}
</script>


