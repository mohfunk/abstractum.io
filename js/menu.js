/*
 * menu.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */

function setPages() {
    bar_y = 0.05*height;
    bar_p = width/6;

    proj = createButton('Projects');
    proj.id('proj');
    proj.class('pg');

    ab = createButton('About');
    ab.id('about');
    ab.class('pg');
    // ab.attribute('onclick', 'location.href=\'/about.html\'');


    if(width >= 880) {
        proj.style('font-size', '18px');
        proj.position(width/2 - bar_p - proj.width/2 , bar_y + 50);
        ab.style('font-size', '18px');
        ab.position(width/2 + bar_p - ab.width/2 , bar_y + 50);

        var proj_entry = anime({
            targets: 'button#proj.pg',
            translateX: [-150,0],
            duration: 1500,
            elasticity: 600,
        });
        var ab_entry = anime({
            targets: 'button#about.pg',
            translateX: [150,0],
            duration: 1500,
            elasticity: 600,
        });


    } else {
        proj.style('font-size', '12px');
        proj.position(width/2 - proj.width/2 , bar_y*1.2);
        proj.center('horizontal');
        ab.style('font-size', '12px');
        ab.position(width/2 - ab.width/2 , bar_y*3.5);
        ab.center('horizontal');

        var proj_entry = anime({
            targets: 'button#proj.pg',
            translateX: [-100,0],
            duration: 1500,
            elasticity: 400
        });
        var ab_entry = anime({
            targets: 'button#about.pg',
            translateX: [100,0],
            duration: 1500,
            elasticity: 400
        });



    }

    proj.mouseOver(projButtonEnt);
    ab.mouseOver(abtButtonEnt);

    proj.mouseOut(projButtonExt);
    ab.mouseOut(abtButtonExt);

    proj.mousePressed(projButtonCli);
    ab.mousePressed(abtButtonCli);


}

