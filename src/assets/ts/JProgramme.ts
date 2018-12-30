/*
Part of the ReCode Project (http://recodeproject.com)
Based on "Untitled 4" by Jerusalem Programme
Originally published in "Computer Graphics and Art" vol2 no3, 1977
Copyright (c) 2018 Mohammed Alhaythm - OSI/MIT license (http://recodeproject/license).
 */

export default class JProgramme {
    private m: number = 10; // margin
    private bds: number = 3.5;  // draw this.block createCanvas
    private brs: number = 5; // real this.block createCanvas
    private bw: number = 9;  // width of a this.block
    private bh: number = 12; // height of a this.block
    private s!: number;
    private p!: p5;

    public setup(p: p5) {
        this.s = this.bw - 1;
        this.p = p;
        p.pixelDensity(10);
        p.createCanvas(800, 600);
        p.background(255);
        p.stroke(0, 0, 0);
        p.strokeWeight(1);
        p.noLoop();
    }
    public draw(p: p5) {

       // 1
       this.waw_hmz(1, 1);
       this.yaa_hmz_nn(2, 1);
       this.mid_alf_hmz(3, 1);
       this.beg_alf_hmz(4, 1);
       this.sep_alf_hmz_ksr(5, 1);
       this.sep_alf_hmz(6, 1);
       this.con_alf_s(7, 1);
       this.sep_alf_s(8, 1);
       this.con_alf_hmz_ksr(9, 1);
       this.con_alf_hmz(10, 1);
       this.sep_hmz(11, 1);
       // 2
       this.beg_tha(1, 2);
       this.mar_taa(2, 2);
       this.sep_taa(3, 2);
       this.con_taa(4, 2);
       this.beg_taa(5, 2);
       this.sep_baa(6, 2);
       this.con_baa(7, 2);
       this.beg_baa(8, 2);
       this.maq_alf(9, 2);
       this.con_alf(10, 2);
       this.sep_alf(11, 2);
        // 3
       this.sep_tha(10, 3);
       this.con_tha(11, 3);
       this.con_jem(9, 3);
       this.sep_jem(8, 3);
       this.end_jem(7, 3);
       this.con_haa(6, 3);
       this.sep_haa(5, 3);
       this.end_haa(4, 3);
       this.con_kha(3, 3);
       this.sep_kha(2, 3);
       this.end_kha(1, 3);
       // 4
       this.beg_shn(1, 4);
       this.sep_sen(2, 4);
       this.beg_sen(3, 4);
       this.zaa_alf(4, 4);
       this.zaa(5, 4);
       this.raa_alf(6, 4);
       this.raa(7, 4);
       this.con_dta(8, 4);
       this.sep_dta(9, 4);
       this.con_dal(10, 4);
       this.sep_dal(11, 4);
       // 5
       this.end_ain(1, 5);
       this.sep_ain(2, 5);
       this.con_ain(3, 5);
       this.beg_ain(4, 5);
       this.tda(5, 5);
       this.tta(6, 5);
       this.sep_dad(7, 5);
       this.beg_dad(8, 5);
       this.sep_sad(9, 5);
       this.beg_sad(10, 5);
       this.sep_shn(11, 5);
       // 6
       this.kaf(1, 6);
       this.sep_qaa(2, 6);
       this.con_qaa(3, 6);
       this.beg_qaa(4, 6);
       this.sep_faa(5, 6);
       this.con_faa(6, 6);
       this.beg_faa(7, 6);
       this.end_gin(8, 6);
       this.sep_gin(9, 6);
       this.con_gin(10, 6);
       this.beg_gin(11, 6);
       // 7
       this.end_hha(1, 7);
       this.mid_hha(2, 7);
       this.end_non(3, 7);
       this.mid_non(4, 7);
       this.beg_non(5, 7);
       this.end_mem(6, 7);
       this.mid_mem(7, 7);
       this.beg_mem(8, 7);
       this.end_lam(9, 7);
       this.mid_lam(10, 7);
       this.beg_lam(11, 7);
       // 8
       this.con_gin_nnn(1, 8);
       this.beg_gin_nnn(2, 8);
       this.sep_baa_nnn(3, 8);
       this.con_baa_nnn(4, 8);
       this.beg_baa_nnn(5, 8);
       this.yaa(6, 8);
       this.con_yaa(7, 8);
       this.beg_yaa(8, 8);
       this.lam_alf(9, 8);
       this.waw_alf(10, 8);
       this.waw(11, 8);
       // 9
       this.qus(1, 9);
       this.acs(2, 9);
       this.vod(3, 9);
       this.cln(4, 9);
       this.cma(5, 9);
       this.per(6, 9);
       this.sep_qaa_nnn(7, 9);
       this.con_qaa_nnn(8, 9);
       this.beg_qaa_nnn(9, 9);
       this.end_gin_nnn(10, 9);
       this.sep_gin_nnn(11, 9);







        // 10
       this.fbl(1, 10);
       this.zro(2, 10);
       this.nin(3, 10);
       this.egt(4, 10);
       this.svn(5, 10);
       this.six(6, 10);
       this.fiv(7, 10);
       this.fur(8, 10);
       this.thr(9, 10);
       this.two(10, 10);
       this.one(11, 10);
    }
    private block(x: number, y: number, sx: number, sy: number) {
        this.p.noFill();
        this.p.stroke(0, 0, 0);
        this.p.strokeWeight(1);
        this.p.rect(this.m + (this.brs * (this.s - 1)) - (this.brs * (sx - 1)) + ((this.brs * this.bw) * (x - 1)),
            this.m + this.brs +  (this.brs * (sy - 1)) + ((this.brs * this.bh) * (y - 1)),
            this.bds,
            this.bds);

    }



    private  horLine(x: number, y: number, sx: number, sy: number, len: number) {
        for (let i = 0; i < len; ++i) {
            this.block(x, y, sx + i, sy);
        }

    }



    private verLine(x: number, y: number, sx: number, sy: number, len: number) {
        for (let i = 0; i < len; ++i) {
            this.block(x, y, sx, sy + i);
        }

    }



    private diaLine(x: number, y: number, sx: number, sy: number, len: number, ori: number) {
        for (let i = 0; i < len; ++i) {
            this.block(x, y, sx + i, sy + i * ori);
        }
    }



    private zHorLine(x: number, y: number, sx: number, sy: number, ori: number) {
        this.block(x, y, sx, sy);
        this.block(x, y, sx + 1, sy + (1 * ori));
        this.block(x, y, sx + 2, sy);
    }



    private zVerLine(x: number, y: number, sx: number, sy: number, ori: number) {
        this.block(x, y, sx, sy);
        this.block(x, y, sx + (1 * ori), sy + 1);
        this.block(x, y, sx, sy + 2);
    }
    // HAMZA
    private hmz(x: number, y: number, sx: number, sy: number) {
        this.block(x, y, sx + 0, sy + 0);
        this.block(x, y, sx + 1, sy + 0);
        this.block(x, y, sx + 1, sy + 1);
        this.block(x, y, sx + 2, sy + 2);
        this.block(x, y, sx + 1, sy + 2);
        this.block(x, y, sx + 0, sy + 2);
    }

    private sep_hmz(x: number, y: number) {
        this.hmz(x, y, 3, 5);
    }

    // ALEF
    private sep_alf(x: number, y: number) {
        this.verLine(x, y, 4, 1, 7);

    }


    private sep_alf_hmz(x: number, y: number) {
        this.hmz(6, 1, 4, 1);
        this.verLine(6, 1, 4, 4, 4);
    }

    private sep_alf_hmz_ksr(x: number, y: number) {
        this.verLine(x, y, 4, 1, 7);
        this.hmz(x, y, 4, 8);
    }

    private sep_alf_s(x: number, y: number) {
        this.verLine(x, y, 4, 3, 5);
        this.horLine(x, y, 2, 1, 5);

    }


    private beg_alf_hmz(x: number, y: number) {
        this.hmz(x, y, 4, 1);
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 1, 5, 2);
    }

    private mid_alf_hmz(x: number, y: number) {
        this.hmz(3, 1, 4, 1);
        this.horLine(3, 1, 1, 7, 7);
        this.verLine(3, 1, 4, 5, 2);
    }

    private con_alf(x: number, y: number) {
        this.verLine(x, y, 4, 1, 6);
        this.horLine(x, y, 1, 7, 4);
    }

    private con_alf_hmz(x: number, y: number) {
        this.verLine(x, y, 4, 4, 3);
        this.horLine(x, y, 1, 7, 4);
        this.hmz(x, y, 4, 1);
    }


    private con_alf_hmz_ksr(x: number, y: number) {
        this.horLine(x, y, 1, 7, 3);
        this.hmz(x, y, 4, 8);
        this.verLine(x, y, 4, 1, 6);
    }


    private con_alf_s(x: number, y: number) {
        this.horLine(x, y, 2, 1, 6);
        this.verLine(x, y, 4, 3, 5);
        this.horLine(x, y, 1, 7, 3);

    }

    private maq_alf(x: number, y: number) {
        this.yaa(x, y);
    }


    // BA'
    private sep_abs_baa(x: number, y: number) {
        this.beg_abs_baa(x, y);
        this.verLine(x, y, 7, 5, 2);
    }

    private sep_baa(x: number, y: number) {
        this.sep_abs_baa(x, y);
        this.block(x, y, 4, 9);
    }

    private sep_baa_nnn(x: number, y: number) {
        this.sep_abs_baa(x, y);
        this.block(x, y, 3, 9);
        this.block(x, y, 4, 10);
        this.block(x, y, 5, 9);
    }


    private beg_abs_baa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 1, 5, 2);
    }

    private beg_baa(x: number, y: number) {
        this.beg_abs_baa(x, y);
        this.block(x, y, 4, 9);

    }

    private beg_baa_nnn(x: number, y: number) {
        this.beg_abs_baa(x, y);
        this.block(x, y, 3, 9);
        this.block(x, y, 4, 10);
        this.block(x, y, 5, 9);
    }

    private con_abs_baa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 4, 5, 2);
    }

    private con_baa(x: number, y: number) {
        this.con_abs_baa(x, y);
        this.block(x, y, 4, 9);

    }

    private con_baa_nnn(x: number, y: number) {
        this.con_abs_baa(x, y);
        this.block(x, y, 3, 9);
        this.block(x, y, 4, 10);
        this.block(x, y, 5, 9);
    }


    private abs_taa(x: number, y: number) {
        this.block(x, y, 3, 3);
        this.block(x, y, 5, 3);
    }
    private sep_taa(x: number, y: number) {
        this.sep_abs_baa(x, y);
        this.abs_taa(x, y);
    }

    private beg_taa(x: number, y: number) {
        this.beg_abs_baa(x, y);
        this.abs_taa(x, y);
    }

    private con_taa(x: number, y: number) {
        this.con_abs_baa(x, y);
        this.abs_taa(x, y);
    }

    private mar_taa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.block(x, y, 5, 1);
        this.block(x, y, 7, 1);
        this.verLine(x, y, 2, 1, 6);
        this.diaLine(x, y, 3, 2, 5, 1);
    }

    private sep_tha(x: number, y: number) {
        this.sep_abs_baa(x, y);
        this.zHorLine(x, y, 3, 3, -1);
    }

    private beg_tha(x: number, y: number) {
        this.beg_abs_baa(x, y);
        this.zHorLine(x, y, 3, 3, -1);
    }

    private con_tha(x: number, y: number) {
        this.con_abs_baa(x, y);
        this.zHorLine(x, y, 3, 3, -1);
    }

    private sep_haa(x: number, y: number) {
        this.horLine(x, y, 3, 3, 5);
        this.block(x, y, 4, 4);
        this.diaLine(x, y, 5, 4, 3, 1);
        this.block(x, y, 7, 7);
        this.diaLine(x, y, 5, 10, 3, -1);
        this.block(x, y, 4, 10);
        this.diaLine(x, y, 1, 8, 3, 1);
    }

    private end_haa(x: number, y: number) {
        this.horLine(x, y, 3, 3, 5);
        this.block(x, y, 4, 4);
        this.diaLine(x, y, 5, 4, 3, 1);
        this.block(x, y, 7, 7);
        this.diaLine(x, y, 5, 10, 3, -1);
        this.block(x, y, 4, 10);
        this.diaLine(x, y, 1, 7, 3, -1);
        this.diaLine(x, y, 2, 9, 2, 1);
    }

    private con_haa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.horLine(x, y, 2, 7, 6);
        this.diaLine(x, y, 1, 7, 3, -1);
        this.horLine(x, y, 4, 5, 2);
        this.block(x, y, 2, 8);

    }



    private con_jem(x: number, y: number) {
        this.con_haa(x, y);
        this.block(x, y, 4, 9);
    }

    private sep_jem(x: number, y: number) {
        this.sep_haa(x, y);
        this.block(x, y, 4, 7);
    }


    private end_jem(x: number, y: number) {
        this.end_haa(x, y);
        this.block(x, y, 4, 7);
    }

    private con_kha(x: number, y: number) {
        this.con_haa(x, y);
        this.block(x, y, 4, 3);
    }

    private sep_kha(x: number, y: number) {
        this.sep_haa(x, y);
        this.block(x, y, 5, 1);
    }


    private end_kha(x: number, y: number) {
        this.end_haa(x, y);
        this.block(x, y, 5, 1);
    }


    private sep_dal(x: number, y: number) {
        this.diaLine(x, y, 2, 6, 3, -1);
        this.horLine(x, y, 2, 7, 5);
    }

    private con_dal(x: number, y: number) {
        this.diaLine(x, y, 2, 6, 3, -1);
        this.horLine(x, y, 2, 7, 6);
    }

    private sep_dta(x: number, y: number) {
        this.diaLine(x, y, 2, 6, 3, -1);
        this.horLine(x, y, 2, 7, 5);
        this.block(x, y, 4, 2);
    }

    private con_dta(x: number, y: number) {
        this.diaLine(x, y, 2, 6, 3, -1);
        this.horLine(x, y, 2, 7, 6);
        this.block(x, y, 4, 2);
    }



    private raa(x: number, y: number) {
        this.diaLine(x, y, 1, 7, 4, 1);
        this.horLine(x, y, 5, 10, 3);
    }

    private raa_alf(x: number, y: number) {
        this.raa(x, y);
        this.verLine(x, y, 5, 1, 7);

    }

    private zaa(x: number, y: number) {
        this.raa(x, y);
        this.block(x, y, 1, 5);
    }

    private zaa_alf(x: number, y: number) {
        this.raa_alf(x, y);
        this.block(x, y, 1, 5);

    }


    private abs_sen(x: number, y: number) {
        this.horLine(x, y, 1, 7, 5);
        this.block(x, y, 1, 6);
        this.block(x, y, 3, 6);
        this.block(x, y, 5, 6);
    }

    private beg_sen(x: number, y: number) {
        this.abs_sen(x, y);
        this.horLine(x, y, 6, 7, 2);
    }
    private sep_sen(x: number, y: number) {
        this.abs_sen(x, y);
        this.verLine(x, y, 5, 8, 2);
        this.horLine(x, y, 5, 10, 2);
        this.verLine(x, y, 7, 7, 4);
    }

    private beg_shn(x: number, y: number) {
        this.beg_sen(x, y);
        this.zHorLine(x, y, 2, 4, -1);
    }
    private sep_shn(x: number, y: number) {
        this.sep_sen(x, y);
        this.zHorLine(x, y, 2, 4, -1);

    }

    private abs_sad(x: number, y: number) {
        this.horLine(x, y, 1, 5, 3);
        this.horLine(x, y, 1, 7, 5);
        this.block(x, y, 1, 6);
        this.block(x, y, 4, 6);

    }

    private beg_sad(x: number, y: number) {
        this.abs_sad(x, y);
        this.horLine(x, y, 6, 7, 2);
        this.block(x, y, 6, 6);
    }

    private sep_sad(x: number, y: number) {
        this.abs_sad(x, y);
        this.verLine(x, y, 5, 8, 2);
        this.horLine(x, y, 5, 10, 2);
        this.verLine(x, y, 7, 7, 4);
    }

    private beg_dad(x: number, y: number) {
        this.beg_sad(x, y);
        this.block(x, y, 2, 3);
    }
    private sep_dad(x: number, y: number) {
        this.sep_sad(x, y);
        this.block(x, y, 2, 3);

    }

    private tta(x: number, y: number) {
        this.abs_sad(x, y);
        this.horLine(x, y, 6, 7, 2);
        this.verLine(x, y, 3, 1, 4);

    }


    private tda(x: number, y: number) {
        this.tta(x, y);
        this.block(x, y, 1, 3);
    }

    private seb_abs_ain(x: number, y: number) {
        // this.block(x,y,4,4);
        this.diaLine(x, y, 5, 4, 3, 1);
        this.block(x, y, 7, 7);
        this.diaLine(x, y, 5, 10, 3, -1);
        this.block(x, y, 4, 10);
        this.diaLine(x, y, 1, 8, 3, 1);
    }

    private end_abs_ain(x: number, y: number) {
        this.block(x, y, 3, 4);
        this.block(x, y, 7, 6);
        this.block(x, y, 7, 7);
        this.diaLine(x, y, 5, 10, 3, -1);
        this.block(x, y, 4, 10);
        this.block(x, y, 2, 6);
        this.block(x, y, 1, 7);
        this.diaLine(x, y, 2, 9, 2, 1);

    }
    private seb_ain_h(x: number, y: number) {
        this.horLine(x, y, 3, 3, 3);
        this.horLine(x, y, 3, 5, 4);
        this.block(x, y, 5, 3);
        this.block(x, y, 5, 4);
    }
    private sep_ain(x: number, y: number) {
        this.seb_abs_ain(x, y);
        this.seb_ain_h(x, y);
    }

    private end_ain(x: number, y: number) {
        this.end_abs_ain(x, y);
        this.seb_ain_h(x, y);

    }
    private beg_abs_ain(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.horLine(x, y, 3, 4, 3);
    }


    private beg_ain(x: number, y: number) {
        this.beg_abs_ain(x, y);
        this.block(x, y, 2, 5);
        this.verLine(x, y, 5, 5, 2);
    }

    private con_ain(x: number, y: number) {
        this.beg_abs_ain(x, y);
        this.block(x, y, 2, 5);
        this.block(x, y, 3, 6);
        this.block(x, y, 5, 6);
        this.block(x, y, 6, 5);

    }

    private sep_gin(x: number, y: number) {
        this.sep_ain(x, y);
        this.block(x, y, 4, 1);
    }

    private end_gin(x: number, y: number) {
        this.end_ain(x, y);
        this.block(x, y, 4, 1);
    }
    private end_gin_nnn(x: number, y: number) {
        this.end_gin(x, y);
        this.horLine(x, y, 3, 1, 3);
    }

    private sep_gin_nnn(x: number, y: number) {
        this.sep_gin(x, y);
        this.horLine(x, y, 3, 1, 3);
    }
    private beg_gin(x: number, y: number) {
        this.beg_ain(x, y);
        this.block(x, y, 4, 2);
    }

    private con_gin(x: number, y: number) {
        this.con_ain(x, y);
        this.block(x, y, 4, 2);

    }

    private beg_gin_nnn(x: number, y: number) {
        this.beg_ain(x, y);
        this.block(x, y, 3, 2);
        this.block(x, y, 4, 1);
        this.block(x, y, 5, 2);

    }

    private con_gin_nnn(x: number, y: number) {
        this.con_ain(x, y);
        this.block(x, y, 3, 2);
        this.block(x, y, 4, 1);
        this.block(x, y, 5, 2);

    }
    private beg_faa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 1, 4, 3);
        this.verLine(x, y, 2, 4, 2);
        this.block(x, y, 1, 2);

    }
    private sep_faa(x: number, y: number) {
        this.beg_faa(x, y);
        this.block(x, y, 7, 6);

    }

    private con_faa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 3, 4, 3);
        this.verLine(x, y, 4, 4, 2);
        this.block(x, y, 3, 2);

    }


    private beg_qaa(x: number, y: number) {
        this.beg_faa(x, y);
        this.block(x, y, 3, 2);

    }
    private sep_qaa(x: number, y: number) {
        this.sep_faa(x, y);
        this.block(x, y, 3, 2);

    }

    private con_qaa(x: number, y: number) {
        this.con_faa(x, y);
        this.block(x, y, 5, 2);

    }

    private beg_qaa_nnn(x: number, y: number) {
        this.beg_qaa(x, y);
        this.block(x, y, 2, 1);

    }
    private sep_qaa_nnn(x: number, y: number) {
        this.sep_qaa(x, y);
        this.block(x, y, 2, 1);

    }

    private con_qaa_nnn(x: number, y: number) {
        this.con_qaa(x, y);
        this.block(x, y, 4, 1);

    }

    private kaf(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.horLine(x, y, 1, 5, 6);
        this.block(x, y, 1, 6);
        this.diaLine(x, y, 4, 2, 3, 1);

    }

    private beg_lam(x: number, y: number) {
        this.verLine(x, y, 1, 1, 6);
        this.horLine(x, y, 1, 7, 7);
    }

    private mid_lam(x: number, y: number) {
        this.con_alf(x, y);
        this.horLine(x, y, 5, 7, 3);

    }


    private end_lam(x: number, y: number) {
        this.verLine(x, y, 1, 1, 8);
        this.block(x, y, 2, 9);
        this.horLine(x, y, 3, 10, 3);
        this.block(x, y, 6, 9);
        this.verLine(x, y, 7, 6, 3);
    }

    private lam_alf(x: number, y: number) {
        this.verLine(x, y, 1, 1, 6);
        this.horLine(x, y, 1, 7, 6);
        this.verLine(x, y, 4, 1, 6);
    }


    private beg_mem(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.horLine(x, y, 1, 8, 2);


    }



    private mid_mem(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.horLine(x, y, 2, 8, 2);

    }


    private end_mem(x: number, y: number) {
        this.horLine(x, y, 1, 6, 2);
        this.horLine(x, y, 1, 7, 2);
        this.diaLine(x, y, 3, 8, 3, 1);
        this.block(x, y, 6, 10);


    }



    private beg_non(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 1, 5, 2);
        this.block(x, y, 4, 3);

    }

    private mid_non(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 4, 5, 2);
        this.block(x, y, 4, 3);

    }

    private end_non(x: number, y: number) {
        this.verLine(x, y, 1, 7, 2);
        this.block(x, y, 2, 9);
        this.horLine(x, y, 3, 10, 3);
        this.block(x, y, 6, 9);
        this.verLine(x, y, 7, 7, 2);
        this.block(x, y, 4, 5);

    }


    private mid_hha(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.zHorLine(x, y, 2, 9, 1);
        this.zHorLine(x, y, 2, 5, -1);
        this.block(x, y, 2, 6);
        this.block(x, y, 2, 8);
        this.block(x, y, 4, 6);
        this.block(x, y, 4, 8);


    }



    private end_hha(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 2, 1, 6);
        this.diaLine(x, y, 3, 2, 5, 1);


    }




    // waww
    private waw(x: number, y: number) {

        this.verLine(x, y, 1, 6, 2);
        this.verLine(x, y, 2, 6, 2);
        this.diaLine(x, y, 1, 8, 3, 1);
        this.horLine(x, y, 3, 10, 4);

    }

    private waw_hmz(x: number, y: number) {
        this.hmz(x, y, 1, 1);
        this.waw(x, y);

    }

    private waw_alf(x: number, y: number) {
        this.waw(x, y);
        this.verLine(x, y, 5, 1, 7);

    }

    private yaa_hmz_nn(x: number, y: number) {
        this.hmz(x, y, 5, 1);
        this.yaa(x, 1);
        this.horLine(x, y, 1, 10, 2);

    }


    private beg_yaa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 1, 5, 2);
        this.block(x, y, 3, 9);
        this.block(x, y, 5, 9);
    }

    private con_yaa(x: number, y: number) {
        this.horLine(x, y, 1, 7, 7);
        this.verLine(x, y, 4, 5, 2);
        this.block(x, y, 3, 9);
        this.block(x, y, 5, 9);
    }

    private yaa(x: number, y: number) {
        this.horLine(x, y, 4, 10, 4);
        this.verLine(x, y, 7, 7, 3);
        this.horLine(x, y, 2, 5, 3);
        this.horLine(x, y, 1, 10, 2);

        this.block(x, y, 6, 6);
        this.block(x, y, 4, 6);
        this.block(x, y, 2, 6);
        this.block(x, y, 1, 7);
        this.zVerLine(x, y, 4, 7, -1);

    }

    private per(x: number, y: number) {
        this.horLine(x, y, 3, 6, 2);
        this.horLine(x, y, 3, 7, 2);
    }

    private qus(x: number, y: number) {
        this.diaLine(x, y, 2, 3, 3, -1);
        this.diaLine(x, y, 5, 1, 3, 1);
        this.block(x, y, 2, 4);
        this.block(x, y, 4, 10);
        this.block(x, y, 4, 8);
        this.block(x, y, 7, 4);
        this.block(x, y, 7, 5);
        this.diaLine(x, y, 2, 5, 3, 1);

    }


    private cma(x: number, y: number) {
        this.per(x, y);
        this.block(x, y, 4, 5);

    }

    private acs(x: number, y: number) {
        this.verLine(x, y, 3, 1, 7);
        this.verLine(x, y, 3, 9, 2);


    }

    private vod(x: number, y: number) {
        this.horLine(x, y, 2, 7, 5);

    }


    private cln(x: number, y: number) {
        this.verLine(x, y, 3, 4, 2);
        this.verLine(x, y, 3, 7, 2);
    }


    private one(x: number, y: number) {
        this.sep_alf(x, y);
    }

    private two(x: number, y: number) {
        this.verLine(x, y, 6, 1, 7);
        this.horLine(x, y, 2, 1, 4);

    }


    private thr(x: number, y: number) {
        this.verLine(x, y, 6, 1, 7);
        this.horLine(x, y, 2, 2, 4);
        this.block(x, y, 2, 1);
        this.block(x, y, 4, 1);

    }


    private fur(x: number, y: number) {
        this.horLine(x, y, 2, 1, 4);
        this.verLine(x, y, 6, 2, 2);
        this.horLine(x, y, 2, 4, 4);
        this.verLine(x, y, 6, 5, 2);
        this.horLine(x, y, 2, 7, 4);

    }


    private fiv(x: number, y: number) {
        this.zHorLine(x, y, 3, 2, -1);
        this.zVerLine(x, y, 6, 3, 1);
        this.zHorLine(x, y, 3, 6, 1);
        this.zVerLine(x, y, 2, 3, -1);

    }

    private six(x: number, y: number) {
        this.verLine(x, y, 2, 1, 7); // pffset by 1 on sx
        this.horLine(x, y, 3, 1, 4); // offset by 1 on sx

    }


    private svn(x: number, y: number) {
        this.verLine(x, y, 6, 1, 5);
        this.verLine(x, y, 2, 1, 5);
        this.zHorLine(x, y, 3, 6, 1);
    }


    private egt(x: number, y: number) {
        this.verLine(x, y, 6, 3, 5);
        this.verLine(x, y, 2, 3, 5);
        this.zHorLine(x, y, 3, 2, -1);

    }



    private nin(x: number, y: number) {
        this.verLine(x, y, 3, 1, 7);
        this.horLine(x, y, 4, 1, 2);
        this.verLine(x, y, 5, 2, 2);
        this.horLine(x, y, 4, 3, 1);


    }


    private zro(x: number, y: number) {
        this.horLine(x, y, 5, 7, 1);
    }

    private fbl(x: number, y: number) {

        for (let i = 1; i <= 10; ++i) {
            this.horLine(x, y, 1, i, 7);
        }

    }

}
