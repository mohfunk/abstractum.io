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
            sketch.createCanvas(250, 250, sketch.WEBGL);
            sketch.position(0,0);
            sketch.style('z-index', '-1');
            sketch.background(0);
            sound.play();
        },
        draw(sketch) {
            sketch.noStroke();
            sketch.normalMaterial();
            sketch.push();
            sketch.background(10,0);
            sketch.rotateZ(sketch.frameCount * 0.001);
            sketch.rotateX(sketch.frameCount * 0.01);
            sketch.rotateY(sketch.frameCount * 0.01);
            sketch.box(30,50);
            sketch.pop();
        },
    }
};
</script>
<style lang="sass">
.skt
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
</style>
