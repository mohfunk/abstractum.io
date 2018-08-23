/*
 * abt.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */
  
    
function setabtp() {
    abtp = createDiv('abtp');
    var abtp1 = createP('Hi, i\'m a programmer at monupon.studio <br> currently working on Wild Thieves & Mohra, an arabic programming language. </br>');
    var abtp2 = createP('Contact: moh@abstractum.io');
    abtp1.parent(abtp);
    abtp2.parent(abtp);
    abtp.id('abtp');
    abtp1.class('par');
    abtp2.class('par');
    if(width >= 880) {
        abtp1.style('font-size', '16px');
        abtp2.style('font-size', '16px');
    } else {
        abtp1.style('font-size', '12px');
        abtp2.style('font-size', '12px');
    }
    abtp1.position(width/2, 0.3*height);
    abtp2.position(width/2, 0.6*height);
    abtp1.center('horizontal');
    abtp2.center('horizontal');
}
  
function abtButtonEnt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1.3,
        duration: 1000,
        elasticity: 700
    });
}
function abtButtonExt() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        scale: 1,
        duration: 1000,
        elasticity: 600
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
        color: 'rgb(88, 88, 235)',
        duration: 1000,
        elasticity: 200,

    });
}
function abtButtonUnc() {
    anime.remove('button#about.pg');
    anime({
        targets: 'button#about.pg',
        color: 'rgb(255, 255, 255)',
        duration: 1000,
        elasticity: 600,
    });
}
    

