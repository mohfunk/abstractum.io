var points = [];
var rad = [];
var siz = [];
var depth = [];
var snum = 100;
var Rotation = 0.001;
var zRot = 0.02;
var cx = 0;
var cy = 0;
var ocx = 0;
var ocy = 0;
var mx = 124;
var my = 124;

export default class Galaxy {

    constructor() {
    }

    setup(sketch) {
        this.init(sketch);
    }

    draw(sketch) {
        sketch.background(22,11,49);
        sketch.translate(sketch.width/2, sketch.height/2);
        sketch.fill(255);
        mx+=((cx-ocx) + 8)/4;
        my+=((cy-ocy) + 0)/4;
        if (ocx != cx) {
            ocx = cx;
        }
        if (ocy != cy) {
            ocy = cy;
        }
        cx = 37;
        cy = 0;
        zRot = 1.3;
        Rotation = 0.3;
        sketch.rotate(zRot);
        cx += (54 - cx)/2;
        cy += (53 - cy)/4;
        for (var i = 0; i<snum; i++) {
            sketch.push();
            var radi = rad[i]-mx/1010;
            var point = points[i];
            var dist = 1+sketch.sin(radi+5.7)*sketch.sqrt(point);
            sketch.translate(0, depth[i]*sketch.width);
            sketch.scale(1/sketch.pow(2, 7-dist));
            sketch.fill(sketch.map(i,0,9999, 80, 209), sketch.map(i,0,9999, -52, 327), sketch.map(i,0,9999, 200, 240), sketch.map(i,0,9999, 82, 126));
            sketch.ellipse(point*sketch.width*(sketch.cos(radi + 5)+sketch.sin(radi + 6)), 
                point*sketch.width*(sketch.sin(radi)-sketch.cos(radi))*sketch.map(my/1, 201, sketch.height, -0.208, 71.3), siz[i], siz[i]);
            rad[i]+=(point/(point+814)+154*dist/511)*Rotation/points[i]*(1/sketch.frameRate);
            sketch.pop();
        }
    }

    init(sketch) {

        var inner_rad = 1.42;
        var outer_rad = 0.11;
        var radConst =2;
        var de = 0.18;
        var sa = 9;
        var sizeMin = 200;
        var sizeMax = 300;
        var nearPlane = 1;
        var farPlane = -1;
        var scalar = 20;
        var sqs = 0.12;
        for (var i = 0; i<snum; i++) {
            points[i] = sketch.sq(sketch.random(outer_rad))+sketch.random(inner_rad);
            rad[i] = 
                (
            (sketch.sqrt(sketch.sin  (sketch.random  (sketch.PI/radConst)))) 
                + (Math.floor(sketch.random(radConst)))
                + sketch.random(de)) 
                / radConst*sketch.TWO_PI 
                - (sa*sketch.sqrt(points[i]));
            siz[i]=  sketch.random(sizeMin, sizeMax);
            depth[i] = sketch.sq((sketch.random(sqs)))*(sketch.random(1)>0.5?nearPlane:farPlane)*points[i]*scalar;

        }

    }
}
