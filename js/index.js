// HTML Elements
var logo;
var copyright;
var proj;
var ab;
// Variables
var bar_y;
var bar_p;
var box_x, box_y;
var curr_p;
var abtp;
var projp;



function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    if(width >= 880) {
        box_x = 70;
        box_y = 50;
    } else {
        box_x = 15;
        box_y = 35;
    }
    curr_p = 0;
    setPages();
    setLogo();
    setFoot();


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
    box(box_x+ abs((10 * sin(frameCount *0.02))),box_y + abs((10 * cos(frameCount *0.01))));
    pop();
}

