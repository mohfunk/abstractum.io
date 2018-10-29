var scale = 1;
var pixel = 10;
var cellHei = 9;
var cellWid = 6;
var margin = 2;
var skinTr = [163, 112, 189, 203, 92, 173, 168, 185, 221, 240, 165, 186, 198, 206, 219, 231, 229, 229, 255, 229, 225, 238, 240, 255];
var skinTg = [134, 65, 114, 132, 56, 100, 117, 134, 168, 200, 114, 108, 120, 150, 144, 158, 160, 184, 220, 194, 184, 206, 213, 223];
var skinTb = [106, 57, 60, 66, 54, 82, 108, 109, 160, 201, 87, 73, 86, 124, 101, 109, 115, 143, 178, 152, 153, 179, 190, 196];
export default class Head {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.wid = 0;
        this.hei = 0;
        this.eyedistance = 0;
        this.neckWid = 0;
        this.neckHei = 0;
        this.eary = 0;
        this.eyey = 0;
        this.reyex = 0;
        this.leyex = 0;
        this.nosey = 0;
        this.mouthy = 0;
    }
    reset(sketch) {
        var c = Math.floor(sketch.random(0, 23));
        this.r = skinTr[c];
        this.g = skinTg[c];
        this.b = skinTb[c];
        var wei_seed = sketch.random(1);
        if (wei_seed < 0.6) {
            this.wid = 4;
            this.eyedistance = 2;
            this.neckWid = 2;
        }
        if (wei_seed >= 0.6 && wei_seed < 0.9) {
            this.wid = 5;
            this.eyedistance = 3;
            this.neckWid = Math.floor(sketch.random(2, 3));
        }
        if (wei_seed >= 0.9 && wei_seed < 1.0) {
            this.wid = 6;
            this.eyedistance = 3;
            this.neckWid = Math.floor(sketch.random(3, 4));
        }
        var hei_seed = sketch.random(1);
        if (hei_seed < 0.6) {
            this.hei = 7;
        }
        if (hei_seed >= 0.6 && hei_seed < 0.9) {
            this.hei = 8;
        }
        if (hei_seed >= 0.9 && hei_seed < 1.0) {
            this.hei = 9;
        }
        this.neckHei = Math.floor(sketch.random(1, 5));
        this.eary = Math.floor(sketch.random((this.hei / 2) - 1, (this.hei / 2) + 1));
        this.eyey = Math.floor(sketch.map(this.hei, 6, 9, 2, 4));
        this.reyex = 0;
        this.leyex = this.eyedistance;
        this.nosey = this.eyey + Math.floor(sketch.random(1.5, 2.5));
        this.mouthy = this.nosey + Math.floor(sketch.random(1.5, 2.5));
    }
    localDraw(sketch, xx, yy, sx, sy) {
        sketch.rect(pixel * scale + cellWid * pixel * scale * xx * margin + sx * pixel * scale, pixel * scale + cellHei * pixel * scale * yy * margin + sy * pixel * scale, pixel * scale, pixel * scale);
    }
    headdraw(sketch, xx, yy) {
        this.x = xx;
        this.y = yy;
        sketch.noStroke();
        for (var i = 0; i < this.wid; ++i) {
            for (var j = 0; j < this.hei; ++j) {
                sketch.fill(this.r, this.g, this.b);
                this.localDraw(sketch, this.x, this.y, i, j);
            }
        }
        sketch.fill(this.r - 10, this.g - 10, this.b - 10);
        this.localDraw(sketch, this.x, this.y, this.wid, this.eary);
        sketch.fill(0, 0, 0);
        this.localDraw(sketch, this.x, this.y, this.reyex, this.eyey);
        this.localDraw(sketch, this.x, this.y, this.leyex, this.eyey);
        sketch.fill(this.r - 10, this.g - 10, this.b - 10);
        for (var i = 0; i < this.wid - 1; ++i) {
            this.localDraw(sketch, this.x, this.y, this.reyex + 1 + i, this.eyey - 1);
        }
        sketch.fill(this.r - 20, this.g - 20, this.b - 20);
        this.localDraw(sketch, this.x, this.y, this.reyex, this.eyey - 1);
        this.localDraw(sketch, this.x, this.y, this.leyex, this.eyey - 1);
        sketch.fill(this.r - 10, this.g - 10, this.b - 10);
        for (var i = 0; i < this.neckWid; ++i) {
            for (var j = 0; j < this.neckHei; ++j) {
                this.localDraw(sketch, this.x, this.y, (this.wid / 2) + i, this.hei + j);
            }
        }
        sketch.fill(this.r - 20, this.g - 20, this.b - 20);
        this.localDraw(sketch, this.x, this.y, this.reyex + 1, this.nosey);
    }
}
