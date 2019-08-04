import p5 from 'p5';

const sketch = (p: p5) => {
    p.setup = () => {
        p.createCanvas(p.windowWidth * 0.7, 500, p.WEBGL);
        p.frameRate(24);
        p.background(0);
       
    };
    p.windowResized = () =>
        p.resizeCanvas(p.windowWidth * 0.7, 500)
    
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
export default sketch