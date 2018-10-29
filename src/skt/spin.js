unction setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function draw() {
  background(0);

  noStroke();
  fill(190);
      normalMaterial();
      push();
      rotateZ(frameCount * 0.001);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      stroke(5)
      box(30+ abs((10 * sin(frameCount *0.02))),80);
      pop();
}
