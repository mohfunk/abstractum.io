/*
 * resize.js
 * Copyright (C) 2018 Mohammed Fahad <moh@monupon.studio>
 *
 * Distributed under terms of the MIT license.
 */
  
function windowResized() {
    logo.remove();
    foot.remove();
    proj.remove();
    about.remove();
    resizeCanvas(windowWidth, windowHeight);
    setLogo();
    setPages();
    setFoot();
}
    
