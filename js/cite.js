

var logo;
var copyright;

function setLogo() {
    logo = createA('http://abstractum.io/', 'Abstractum');
    logo.position(width/2 - 50, 0.05*height);
    logo.style('text-decoration', 'none');
    logo.style('border-style', 'none');
    logo.style('font-size', '20px');
    logo.style('font-family', 'Futura');
    logo.style('align', 'centre');
    logo.style('color', '#FFFFFF');
}
function setCopyright() {
    copyright = createP('© 2018 Mohammed Fahad. All rights reserved. <br> Waterloo, Ontario CA. </br>');
    copyright.position(width/2 - 135, 0.90*height);
    copyright.style('text-decoration', 'none');
    copyright.style('border-style', 'none');
    copyright.style('font-size', '12px');
    copyright.style('font-family', 'Futura');
    copyright.style('text-align', 'centre');
    copyright.style('color', '#333333');
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    setLogo();
    setCopyright();
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
    box(30+ abs((10 * sin(frameCount *0.02))),80);
    pop();
}

