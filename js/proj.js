/*
 * proj.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */
  
    
function setprojp() {
    projp = createP('coming 2020');
    projp.id('projp');
    projp.class('par');
    if(width >= 880) {
        projp.style('font-size', '22px');
    } else {
        projp.style('font-size', '16px');
    }
    projp.position(width/2, 0.3*height);
    projp.center('horizontal');
}
 
function projButtonEnt() {
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        scale: 1.3,
        duration: 1000,
        elasticity: 400
    });
}
function projButtonExt() {
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        scale: 1,
        duration: 1000,
        elasticity: 400
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
        color: 'rgb(255, 88, 81)',
        duration: 1000,
        elasticity: 100,
    });
}
function projButtonUnc() {
    anime.remove('button#proj.pg');
    anime({
        targets: 'button#proj.pg',
        color: 'rgb(255, 255, 255)',
        duration: 1000,
        elasticity: 100,
    });
}
    

