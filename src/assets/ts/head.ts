let scale: number = 5;
let pixel: number = 5;
let cellHei: number = 9;
let cellWid: number = 6;
let margin: number = 2;

let skinTr: number[] = [ 163, 112, 189, 203, 92, 173, 168, 185, 221, 240, 165, 186, 198, 206, 219, 231, 229, 229, 255, 229, 225, 238, 240, 255 ];
let skinTg: number[] = [ 134, 65, 114, 132, 56, 100, 117, 134, 168, 200, 114, 108, 120, 150, 144, 158, 160, 184, 220, 194, 184, 206, 213, 223 ];
let skinTb: number[] = [ 106, 57, 60, 66, 54, 82, 108, 109, 160, 201, 87, 73, 86, 124, 101, 109, 115, 143, 178, 152, 153, 179, 190, 196 ];
export default class Head {
    x: number;
    y: number;
    wid: number;
    hei: number;
    eary: number;
    r: number;
    g: number;
    b: number;
    eyey: number;
    reyex: number;
    leyex: number;
    eyedistance: number;
    neckWid: number;
    neckHei: number;
    nosey: number;
    mouthy: number;
    setup(p: p5) {
        this.x = 0;
        this.y = 0;
        this.reset(p);

    }
    reset(p: p5) {
        let c: number = Math.floor(p.random(0,23));
        this.r = skinTr[c];
        this.g = skinTg[c];
        this.b = skinTb[c];
        let wei_seed: number = p.random(1);
        if (wei_seed < 0.6) { this.wid = 4; this.eyedistance = 2; this.neckWid = 2;}
        if (wei_seed >= 0.6 && wei_seed < 0.9) { this.wid = 5; this.eyedistance = 3; this.neckWid = Math.floor(p.random(2,3));}
        if (wei_seed >= 0.9 && wei_seed < 1.0) { this.wid = 6; this.eyedistance = 3; this.neckWid = Math.floor(p.random(3,4));}
        let hei_seed: number = p.random(1);
        if (hei_seed < 0.6) { this.hei = 7; }
        if (hei_seed >= 0.6 && hei_seed < 0.9) { this.hei = 8; }
        if (hei_seed >= 0.9 && hei_seed < 1.0) { this.hei = 9; }
        this.neckHei = Math.floor(p.random(1,5));
        this.eary = Math.floor(p.random((this.hei/2)-1,(this.hei/2)+1));
        this.eyey = Math.floor(p.map(this.hei, 6, 9, 2,4));
        this.reyex = 0;
        this.leyex = this.eyedistance;
        this.nosey = this.eyey + Math.floor(p.random(1.5,2.5));
        this.mouthy = this.nosey + Math.floor(p.random(1.5,2.5));

    } 
    localDraw(p: p5, xx: number, yy: number, sx: number, sy: number) {
        p.rect(pixel*scale + cellWid*pixel*scale*xx*margin  + sx*pixel*scale, pixel*scale + cellHei*pixel*scale*yy*margin + sy*pixel*scale, pixel*scale, pixel*scale);
    }
    headdraw(p: p5, xx:number, yy: number) {
        this.x = xx;
        this.y = yy;
        p.noStroke();
        // FACE MASK
        for(var i = 0; i < this.wid; ++i) {
            for(var j = 0; j < this.hei; ++j) {
                p.fill(this.r,this.g,this.b);
                this.localDraw(p, this.x,this.y,i,j);
            }
        }
        // EAR
        p.fill(this.r-10,this.g-10,this.b-10);
        this.localDraw(p, this.x, this.y, this.wid, this.eary);

        // EYES

        p.fill(0, 0, 0);
        this.localDraw(p, this.x,this.y,this.reyex, this.eyey);
        this.localDraw(p, this.x,this.y,this.leyex, this.eyey);

        p.fill(this.r-10, this.g-10, this.b-10);
        for(var i = 0; i < this.wid-1; ++i) {
            this.localDraw(p, this.x, this.y, this.reyex+1+i, this.eyey-1 );
        }
        p.fill(this.r-20, this.g-20, this.b-20);
        this.localDraw(p, this.x, this.y, this.reyex, this.eyey-1 );
        this.localDraw(p, this.x, this.y, this.leyex, this.eyey-1 );

        // NECK
        p.fill(this.r-10,this.g-10,this.b-10);
        for(var i = 0; i < this.neckWid; ++i) {
            for(var j = 0; j < this.neckHei; ++j) {
                this.localDraw(p, this.x, this.y, (this.wid/2)+i, this.hei + j);
            }
        }

        // Nose
        p.fill(this.r-20, this.g-20, this.b-20);
        this.localDraw(p, this.x, this.y, this.reyex+1,this.nosey);
    }
}
