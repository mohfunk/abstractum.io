const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.background(0);
    };
    p.draw = () => {
        p.background(0, 0);
        p.normalMaterial();
        p.push();

        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.01);
        p.rotateY(p.frameCount * 0.01);
        p.box(60, 30);
        p.pop();
    };
};
module.exports = sketch;