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


// Animations
function logoButtonEnt() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function logoButtonExt() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}

function abstButtonEnt() {
    anime.remove('button#abst.pg');
    anime({
        targets: 'button#abst.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function abstButtonExt() {
    anime.remove('button#abst.pg');
    anime({
        targets: 'button#abst.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}

function mohButtonEnt() {
    anime.remove('button#mohra.pg');
    anime({
        targets: 'button#mohra.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function mohButtonExt() {
    anime.remove('button#mohra.pg');
    anime({
        targets: 'button#mohra.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}

function blgButtonEnt() {
    anime.remove('button#blog.pg');
    anime({
        targets: 'button#blog.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function blgButtonExt() {
    anime.remove('button#blog.pg');
    anime({
        targets: 'button#blog.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}
function abtButtonEnt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1.3,
        duration: 3000,
        elasticity: 400
    });
}
function abtButtonExt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1,
        duration: 3000,
        elasticity: 400
    });
}
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
    logo = createButton('Abstractum');
    logo.id('lg');
    logo.class('logo');
    logo.position(width/2, 0.05*height);
    logo.center('horizontal');
    var ani_entry = anime({
        targets: 'button#lg.logo',
        translateY: [-100,0],
        duration: 3000,
        elasticity: 400
    });
    logo.mouseOver(logoButtonEnt);
    logo.mouseOut(logoButtonExt);


}
function setPages() {
    bar_y = 0.05*height + 5;
    bar_p = width/8;
    abstraction = createButton('abstraction');
    abstraction.id('abst');
    abstraction.class('pg');
    abstraction.position(width/2 - bar_p*2 - abstraction.width/2 , bar_y);
    abstraction.mouseOver(abstButtonEnt);
    abstraction.mouseOut(abstButtonExt);
    var abst_entry = anime({
        targets: 'button#abst.pg',
        translateX: [-100,0],
        duration: 3000,
        elasticity: 400
    });




    mohra = createButton('Mohra');
    mohra.id('mohra');
    mohra.class('pg');
    mohra.position(width/2 - bar_p - mohra.width/2 , bar_y);
    mohra.mouseOver(mohButtonEnt);
    mohra.mouseOut(mohButtonExt);
    var mohra_entry = anime({
        targets: 'button#mohra.pg',
        translateX: [-100,0],
        duration: 3000,
        elasticity: 400
    });


    blog = createButton('Blog');
    blog.id('blog');
    blog.class('pg');
    blog.position(width/2 + bar_p - blog.width/2 , bar_y);
    blog.mouseOver(blgButtonEnt);
    blog.mouseOut(blgButtonExt);
    var blog_entry = anime({
        targets: 'button#blog.pg',
        translateX: [100,0],
        duration: 3000,
        elasticity: 400
    });

    about = createButton('About');
    about.id('about');
    about.class('pg');
    about.position(width/2 + bar_p*2 - about.width/2 , bar_y);
    about.mouseOver(abtButtonEnt);
    about.mouseOut(abtButtonExt);
    var abt_entry = anime({
        targets: 'button#about.pg',
        translateX: [100,0],
        duration: 3000,
        elasticity: 400
    });

}
function setCopyright() {
    copyright = createP('© 2018 Mohammed Fahad. All rights reserved. <br> Waterloo, Ontario CA. </br>');
    copyright.id('copyr');
    copyright.class('cp');
    copyright.position(width/2, 0.90*height);
    copyright.center('horizontal');
    var ani_entry = anime({
        targets: 'p#copyr.cp',
        translateY: [100,0],
        duration: 3000,
        elasticity: 400
    });

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
    box(30+ abs((10 * sin(frameCount *0.02))),70 + abs((10 * cos(frameCount *0.01))));
    pop();
}
