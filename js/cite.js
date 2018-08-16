// HTML Elements
var logo;
var copyright;
var abstraction;
var mohra;
var about;
var blog;
// Variables
var bar_y;
var bar_p;


function windowResized() {
    logo.remove();
    copyright.remove();
    abstraction.remove();
    mohra.remove();
    blog.remove();
    about.remove();
    resizeCanvas(windowWidth, windowHeight);
    setLogo();
    setPages();
    setCopyright();
}

function setLogo() {
    logo = createA('http://abstractum.io/', 'Abstractum');
    logo.style('text-decoration', 'none');
    logo.style('border-style', 'none');
    logo.style('font-size', '20px');
    logo.style('font-family', 'Futura');
    logo.style('align', 'centre');
    logo.style('color', '#FFFFFF');
    logo.position(width/2, 0.05*height);
    logo.center('horizontal');

}
function setPages() {
    bar_y = 0.05*height + 5;
    bar_p = width/8;
    abstraction = createA('https://monupon.studio', 'Abstraction');
    abstraction.style('text-decoration', 'none');
    abstraction.style('border-style', 'none');
    abstraction.style('font-size', '14px');
    abstraction.style('font-family', 'Futura');
    abstraction.style('color', '#FFFFFF');
    abstraction.position(width/2 - bar_p*2 - abstraction.width/2 , bar_y);

    mohra = createA('https://monupon.studio', 'Mohra');
    mohra.style('text-decoration', 'none');
    mohra.style('border-style', 'none');
    mohra.style('font-size', '14px');
    mohra.style('font-family', 'Futura');
    mohra.style('color', '#FFFFFF');
    mohra.position(width/2 - bar_p - mohra.width/2 , bar_y);

    blog = createA('https://monupon.studio', 'Blog');
    blog.style('text-decoration', 'none');
    blog.style('border-style', 'none');
    blog.style('font-size', '14px');
    blog.style('font-family', 'Futura');
    blog.style('color', '#FFFFFF');
    blog.position(width/2 + bar_p - blog.width/2 , bar_y);

    about = createA('https://monupon.studio', 'About');
    about.style('text-decoration', 'none');
    about.style('border-style', 'none');
    about.style('font-size', '14px');
    about.style('font-family', 'Futura');
    about.style('color', '#FFFFFF');
    about.position(width/2 + bar_p*2 - about.width/2 , bar_y);

}

function setCopyright() {
    copyright = createP('© 2018 Mohammed Fahad. All rights reserved. <br> Waterloo, Ontario CA. </br>');
    copyright.position(width/2, 0.90*height);
    copyright.style('text-decoration', 'none');
    copyright.style('border-style', 'none');
    copyright.style('font-size', '12px');
    copyright.style('font-family', 'Futura');
    copyright.style('text-align', 'centre');
    copyright.style('color', '#333333');
    copyright.center('horizontal');
}


function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    setLogo();
    setPages();
    setCopyright();
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
    box(100+ abs((4 * sin(frameCount *0.04))),50 + abs((10 * cos(frameCount *0.01))));
    pop();
}
