/*
 * foot.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */


function setFoot() {
    foot = createP('© 2018 Mohammed Fahad. All rights reserved <br> Waterloo, On. Canada.</br>');
    foot.id('copyr');
    foot.class('cp');
    if(width >= 880) {
        foot.style('font-size', '14px');
        foot.position(width/2 - 150, 0.90*height);
    } else {
        foot.style('font-size', '8px');
        foot.position(width/2 - 85.714, 0.90*height);
    }
    var ani_entry = anime({
        targets: 'p#copyr.cp',
        translateY: [100,0],
        duration: 1000,
        elasticity: 400
    });
}


