import p5 from 'p5';


const sketch = (p: p5) => {
    p.setup = () => {
        p.pixelDensity(5)
        p.frameRate(30)
        p.createCanvas(150, 150, p.WEBGL);
        p.background(0);
    }
    p.draw = () => {
        p.background(0, 0, 0, 0);
        p.push();
        p.noStroke();
        p.normalMaterial();
        p.rotateZ(p.frameCount * 0.01);
        p.rotateX(p.frameCount * 0.02);
        p.rotateY(p.frameCount * 0.05);
        p.box(20, 20);
        p.pop();
    }
}
export default sketch;