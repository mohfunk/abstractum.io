/*
 * bg.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */

var canv;
var overlay;
function setup() {
    canv = createCanvas(windowWidth, windowHeight, WEBGL);
    canv.position(0,0);
    canv.style('z-index', '-1');
    background(0);
}

function draw() {
    background(0);
    noStroke();
    fill(190);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.001);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.009);
    box(50+ abs((10 * sin(frameCount *0.02))),40 + abs((10 * cos(frameCount *0.01))));
    pop();
    fill(0,0,0,100);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
} 
