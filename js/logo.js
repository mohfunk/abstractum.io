/*
 * logo.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */

function setLogo() {
    logo = createButton('Abstractum');
    logo.id('lg');
    logo.class('logo');
    if(curr_p == 0) {
        logo.style('color', 'rgb(235, 88,81');
    }
    // logo.attribute('onclick', 'location.href=\'/index.html\'');

    if(width >= 880 ) {
        logo.style('font-size', '32px');
        logo.position(width/2 - logo.width/2, bar_y + 30 + 16);
    } else {
        logo.style('font-size', '24px');
        logo.position(width/2 - logo.width/2, height/2 + 100);
    }
    logo.center('horizontal');
    var ani_entry = anime({
        targets: 'button#lg.logo',
        translateY: [-250,0],
        duration: 1500,
        elasticity: 600
    });
    logo.mouseOver(logoButtonEnt);
    logo.mouseOut(logoButtonExt);
    logo.mousePressed(logoButtonCli);

}



function logoButtonEnt() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        scale: 1.3,
        duration: 1000,
        elasticity: 700
    });
}
function logoButtonExt() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        scale: 1,
        duration: 1000,
        elasticity: 600
    });
}

function logoButtonCli() {
    curr_p = 0;
    projButtonUnc();
    abtButtonUnc();
    rml();
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        color: 'rgb(235, 88, 81)',
        duration: 1000,
        elasticity: 200
    });
}
function logoButtonUnc() {
    anime.remove('button#lg.logo');
    anime({
        targets: 'button#lg.logo',
        color: 'rgb(255, 255, 255)',
        duration: 1000,
        elasticity: 600,
    });
}
