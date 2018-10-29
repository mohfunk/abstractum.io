<template>
    <div class="skt">
        <vue-p5 
         @setup="setup"
         @draw="draw">
        </vue-p5>
    </div>
</template>


<script>
import Head from '../skt/head.js';
import VueP5 from 'vue-p5';
var h = new Head();
var h1 = new Head();
var h2 = new Head();
var h3 = new Head();
var h4 = new Head();
var h5 = new Head();
export default {
    name: "Proc",
    components: {
        "vue-p5": VueP5
    },
    data: () => ({

    }),
    methods: {
        setup(sketch) { 
            sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
            sketch.frameRate(1);
            h.reset(sketch);
            h1.reset(sketch);
            h2.reset(sketch);
            if(sketch.width > 600) {
                h3.reset(sketch);
                h4.reset(sketch);
                h5.reset(sketch);
            }
        },
        draw(sketch) {
            sketch.background(20, 20, 20);
            h.reset(sketch);
            h1.reset(sketch);
            h2.reset(sketch);
            if(sketch.width > 600) {
                h3.reset(sketch);
                h4.reset(sketch);
                h5.reset(sketch);
            }

            if(sketch.width > 600) {
                h.headdraw(sketch, 3, 2);
                h1.headdraw(sketch, 4, 2);
                h2.headdraw(sketch, 5, 2);
                h3.headdraw(sketch, 6, 2);
                h4.headdraw(sketch, 7, 2);
                h5.headdraw(sketch, 8, 2);
            } else {
                h1.headdraw(sketch, 1, 2);
                h2.headdraw(sketch, 2, 2);

            }
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
