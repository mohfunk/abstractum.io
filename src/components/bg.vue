<template>
    <div>
        <vue-p5 
            @setup="setup"
            @draw="draw">
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
            sketch.createCanvas(sketch.windowWidth, sketch.windowHeight, sketch.WEBGL);
            sketch.position(0,0);
            sketch.style('z-index', '-1');
            sketch.background(0);
        },
        draw(sketch) {
            sketch.background(10);
            sketch.noStroke();
            sketch.fill(190);
            sketch.normalMaterial();
            sketch.push();
            sketch.rotateZ(sketch.frameCount * 0.001);
            sketch.rotateX(sketch.frameCount * 0.02);
            sketch.rotateY(sketch.frameCount * 0.009);
            sketch.box(50+ sketch.abs((10 * sketch.sin(sketch.frameCount
                *0.02))),40 + sketch.abs((10 * sketch.cos(sketch.frameCount *0.01))));
            sketch.pop();
        }
    }
};
</script>

