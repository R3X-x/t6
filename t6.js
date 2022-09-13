let canv = document.querySelector ("#myCanvas")
let ctx=canv.getContext("2d")

class personaje{
    constructor(x, y, angle, r){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.r = r;
    }
    dibujarse (){
        ctx.translate (this.x, this.y);
        ctx.rotate (this.angle*Math.PI/180);
        ctx.beginPath();
        ctx.arc (0, 0, this.r, 0, 2*Math.PI);
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (0, 0, this.r/2, 0.25*Math.PI, 0.75*Math.PI);
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI);
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();
        ctx.beginPath ();
        ctx.arc (15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();
        ctx.beginPath();
        ctx.moveTo(-5,0);
        ctx.lineTo(6,5);
        ctx.lineTo(-5,10);
        ctx.stroke();
        ctx.fillStyle = "pink"
        ctx.strokeStyle = "blue";
        ctx.rotate (-this.angle*Math.PI/180);
        ctx.translate (-this.x, -this.y);
    }
}
let Nicolas = new personaje (150, 100, 0, 30)
Nicolas.dibujarse ()
let Daniel = new personaje (300, 100, 45, 50)
Daniel.dibujarse ()
let Felipe = new personaje (450, 300, -45, 70)
Felipe.dibujarse ()
let Patricia = new personaje (800, 500, -180, 90)
Patricia.dibujarse ()