<template>
    <div class="skt">
        <vue-p5 
         @setup="setup"
         @draw="draw">
        </vue-p5>
    </div>
</template>


<script>
import Galaxy from '../skt/galaxy.js';
import VueP5 from 'vue-p5';
var g = new Galaxy();
export default {
    name: "Gala",
    components: {
        "vue-p5": VueP5
    },
    data: () => ({

    }),
    methods: {
        setup(sketch) { 
            sketch.createCanvas(sketch.windowWidth, sketch.windowHeight,
                sketch.WEBGL);
            sketch.frameRate(24);
            g.init(sketch);
        },
        draw(sketch) {
            sketch.background(20, 20, 20);
            g.draw(sketch);
        },
    }
};
</script>
<style lang="sass">
.skt
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    position: fixed
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: -10
</style>
