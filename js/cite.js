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
    logo.id('lg');
    logo.class('logo');
    logo.position(width/2, 0.05*height);
    logo.center('horizontal');
    var ani_logo = anime({
            targets: 'a#lg.logo', 
            translateY: {
                value: [-100, 0],
                easing: 'easeOutExpo',
                duration: 2500
            }

        });
    logo.mouseOver(function() {
        anime({
            targets: 'a#lg.logo', 
            scale: 1.3,
            duration: 500

        });
    });
    logo.mouseOut(function() {
        anime({
            targets: 'a#lg.logo', 
            scale: 1,
            delay: 500,
            duration: 500
        });
    });


}
function setPages() {
    bar_y = 0.05*height + 5;
    bar_p = width/8;
    abstraction = createA('https://abstractum.io/abstraction', 'abstraction');
    abstraction.id('abst');
    abstraction.class('pg');
    abstraction.position(width/2 - bar_p*2 - abstraction.width/2 , bar_y);
    var ani_abs = anime({
            targets: 'a#abst', 
            translateX: {
                value: [-100, 0],
                easing: 'easeOutExpo',
                duration: 2000
            }

        });
    abstraction.mouseOver(function() {
        anime({
            targets: 'a#abst.pg', 
            scale: 1.3,
            duration: 500

        });
    });
    abstraction.mouseOut(function() {
        anime({
            targets: 'a#abst.pg', 
            scale: 1,
            delay: 500,
            duration: 500
        });
    });

    mohra = createA('https://abstractum.io/mohra', 'Mohra');
    mohra.id('mohra');
    mohra.class('pg');
    mohra.position(width/2 - bar_p - mohra.width/2 , bar_y);
    var ani_moh = anime({
            targets: 'a#mohra.pg', 
            translateX: {
                value: [-100, 0],
                easing: 'easeOutExpo',
                duration: 2000
            }

        });
    mohra.mouseOver(function() {
        anime({
            targets: 'a#mohra.pg', 
            scale: 1.3,
            duration: 500

        });
    });
    mohra.mouseOut(function() {
        anime({
            targets: 'a#mohra.pg', 
            scale: 1,
            delay: 500,
            duration: 500
        });
    });

    blog = createA('https://abstractum.io/blog', 'Blog');
    blog.id('blog');
    blog.class('pg');
    blog.position(width/2 + bar_p - blog.width/2 , bar_y);
    var ani_blog = anime({
            targets: 'a#blog.pg', 
            translateX: {
                value: [100, 0],
                easing: 'easeOutExpo',
                duration: 2000
            }

        });
    blog.mouseOver(function() {
        anime({
            targets: 'a#blog.pg', 
            scale: 1.3,
            duration: 500

        });
    });
    blog.mouseOut(function() {
        anime({
            targets: 'a#blog.pg', 
            scale: 1,
            delay: 500,
            duration: 500
        });
    });
    
    about = createA('https://abstractum.io/about', 'About');
    about.id('about');
    about.class('pg');
    about.position(width/2 + bar_p*2 - about.width/2 , bar_y);
    var ani_about = anime({
            targets: 'a#about.pg', 
            translateX: {
                value: [100, 0],
                easing: 'easeOutExpo',
                duration: 2000
            }

        });
    about.mouseOver(function() {
        anime({
            targets: 'a#about.pg', 
            scale: 1.3,
            duration: 500

        });
    });
    about.mouseOut(function() {
        anime({
            targets: 'a#about.pg', 
            scale: 1,
            delay: 500,
            duration: 500
        });
    });

}

function setCopyright() {
    copyright = createP('© 2018 Mohammed Fahad. All rights reserved. <br> Waterloo, Ontario CA. </br>');
    copyright.id('copyr');
    copyright.class('cp');
    copyright.position(width/2, 0.90*height);
    copyright.center('horizontal');
    var ani_cp = anime({
            targets: 'p#copyr.cp', 
            translateY: {
                value: [100, 0],
                easing: 'easeOutExpo',
                duration: 2500
            }

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
