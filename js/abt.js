/*
 * abt.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */
  
    
function setabtp() {
    abtp = createP('Hi');
    abtp.id('abtp');
    abtp.class('par');
    if(width >= 880) {
        abtp.style('font-size', '16px');
    } else {
        abtp.style('font-size', '12px');
    }
    abtp.position(width/2, 0.3*height);
    abtp.center('horizontal');
}
  
function abtButtonEnt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1.3,
        duration: 1000,
        elasticity: 400
    });
}
function abtButtonExt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1,
        duration: 1000,
        elasticity: 400
    });
}
function abtButtonCli() {
    curr_p = 2;
    logoButtonUnc();
    projButtonUnc();
    rml();
    setabtp();
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        color: 'rgb(235, 88, 81)',
        duration: 1000,
        elasticity: 400
    });
}
function abtButtonUnc() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        color: 'rgb(255, 255, 255)',
        duration: 1000,
        elasticity: 100,
    });
}
    

