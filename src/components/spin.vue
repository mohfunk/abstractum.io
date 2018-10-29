<template>
    <div class="skt">
        <vue-p5 
         @setup="setup"
         @draw="draw"
         @mouseclicked="mouseClick">
        </vue-p5>
    </div>
</template>


<script>
import VueP5 from 'vue-p5';
export default {
    name: "bg",
    components: {
        "vue-p5": VueP5
    },
    data: () => ({

    }),
    methods: {
        setup(sketch) {
            sketch.pixelDensity(10);
            sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
            sketch.position(0,0);
            //sketch.style('z-index', '-100');
            sketch.background(0);
            sound.play();
        },
        draw(sketch) {
            sketch.background(0, 0);
            sketch.push();
                sketch.noStroke();
                sketch.normalMaterial();
                sketch.rotateZ(sketch.frameCount * 0.001);
                sketch.rotateX(sketch.frameCount * 0.01);
                sketch.rotateY(sketch.frameCount * 0.01);
                sketch.box(80, 30+ sketch.abs((10 * sketch.sin(sketch.frameCount * 0.02))));
            sketch.pop();
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
