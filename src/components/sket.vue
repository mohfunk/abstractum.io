<template>
    <div class="skt">
        <vue-p5 
         @setup="setup"
         @draw="draw"
         >
        </vue-p5>
    </div>
</template>

<script>
import VueP5 from 'vue-p5';
export default{
    name: 'skt',
    props: {
        s: Object,
        code: String,
    },
    components: {
        VueP5,
    },
    methods: {
        setup(sketch) {
           this.s.setup(sketch);
        },
        draw(sketch) {
           this.s.draw(sketch);
        },
    }
}
</script>
<style lang="sass">
.skt
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
</style>
