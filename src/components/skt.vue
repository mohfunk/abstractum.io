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
        s: Object
    },
    components: {
        VueP5,
    },
    methods: {
        setup(p) {
            p.pixelDensity(10);
            p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            p.background(0);
        },
        draw(p) {
            p.background(17,17,17, 0.2);
            p.push();
            p.noStroke();
            p.normalMaterial();
            p.rotateZ(p.frameCount * 0.001);
            p.rotateX(p.frameCount * 0.01);
            p.rotateY(p.frameCount * 0.01);
            p.box(50, 15 + p.abs((10 * p.sin(p.frameCount * 0.02))));

            p.pop();
        },
    }
}
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
