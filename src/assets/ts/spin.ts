export default class Spin {
    setup(p: p5){
        p.pixelDensity(10);
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.background(0);
    }
    draw(p: p5){
        p.background(0, 0);
        p.push();
        p.noStroke();
        p.normalMaterial();
        p.rotateZ(p.frameCount * 0.001);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(80, 30 + p.abs((10 * p.sin(p.frameCount * 0.02))));
        p.pop();
    }
}
