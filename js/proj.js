/*
 * proj.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */
  
    
function setprojp() {
    projp = createDiv('projp');
    var projp1 = createP('Under Construction');
    projp1.parent(projp);
    projp.id('projp');
    projp1.class('par');
    if(width >= 880) {
        projp.style('font-size', '14px');
    } else {
        projp.style('font-size', '12px');
    }
    projp1.position(width/2, 0.6*height);
    projp1.center('horizontal');
}
 
function projButtonEnt() {
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        scale: 1.3,
        duration: 1000,
        elasticity: 700
    });
}
function projButtonExt() {
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        scale: 1,
        duration: 1000,
        elasticity: 600
    });
}
function projButtonCli() {
    curr_p = 1;
    logoButtonUnc();
    abtButtonUnc();
    rml();
    setprojp();
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        color: 'rgb(88, 235, 81)',
        duration: 1000,
        elasticity: 200,
    });
}
function projButtonUnc() {
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        color: 'rgb(255, 255, 255)',
        duration: 1000,
        elasticity: 600,
    });
}
    

