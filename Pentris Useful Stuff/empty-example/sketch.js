let rotation = 0

function setup() {
  angleMode(DEGREES)
  createCanvas (1500, 500);
  background ("purple");
  U = new ulysess ();
  V = new vector ();
  W = new william ();
  X = new xavier ();
  Y = new yosef ();
  Z = new zachary ();
}

function keyPressed() {
if(keyIsDown(32)){
  rotation += 90
  }
}

function draw(){
  background("purple")
  U.drawUlysess (200,200,rotation);
  V.drawVector(200,200, rotation);
  W.drawWilliam(200,200, rotation);
  X.drawXavier(200,200, rotation);
  Y.drawYosef(200,200, rotation);
  Z.drawZachary(200,200, rotation);

  translate(940,0);
  grid();

  if (overlap) {
  console.log(collision)
}
}

function grid() {
  line(50, 50, 50, 450);
  line(100, 50, 100, 450);
  line(150, 50, 150, 450);
  line(200, 50, 200, 450);
  line(250, 50, 250, 450);
  line(300, 50, 300, 450);
  line(350, 50, 350, 450);
  line(400, 50, 400, 450);
  line(450, 50, 450, 450);
  line(50, 50, 450, 50);
  line(50, 100, 450, 100);
  line(50, 150, 450, 150);
  line(50, 200, 450, 200);
  line(50, 250, 450, 250);
  line(50, 300, 450, 300);
  line(50, 350, 450, 350);
  line(50, 400, 450, 400);
  line(50, 450, 450, 450);
}

class ulysess {
	constructor() {
	}
	drawUlysess(x,y,r){
    push();
    translate (x,y);
    rotate (r);
    rect(-75, -50, 50, 50, 5,5,0,0);
    rect(-75, 0, 50, 50, 0,0,0,5);
    rect(-25, 0, 50, 50);
    rect(25, 0, 50, 50,0,0,5,0);
    rect(25, -50, 50, 50,5,5,0,0);
    pop();
	}
}

class vector {
	constructor() {
	}
	drawVector(x,y,r){
    translate (200,0)
    push();
    translate (x,y);
    rotate (r);
    rect(-75, -75, 50, 50);
    rect(-75, -25, 50, 50);
    rect(-75, 25, 50, 50);
    rect(-25, 25, 50, 50);
    rect(25, 25, 50, 50);
    pop();
	}
}

class william {
	constructor() {
	}
	drawWilliam(x,y,r){
    translate (200,0)
    push();
    translate (x,y);
    rotate (r);
    rect(-75, -75, 50, 50);
    rect(-25, -75, 50, 50);
    rect(-25, -25, 50, 50);
    rect(25, -25, 50, 50);
    rect(25, 25, 50, 50);
    pop();
 }
}

class xavier {
	constructor() {
	}
	drawXavier(x,y,r){
    translate (400,0)
    push();
    translate (x,y);
    rotate (r);
    rect(-25, 75, 50, 50);
    rect(-75, -25, 50, 50);
    rect(-25, -25, 50, 50);
    rect(25, -25, 50, 50);
    rect(-25, 25, 50, 50);
    pop();
 }
}

class yosef {
	constructor() {
	}
	drawYosef(x,y,r){
    translate (600,0)
    push();
    translate (x,y);
    rotate (r);
    rect(450, 100, 50, 50);
    rect(500, 100, 50, 50);
    rect(550, 100, 50, 50);
    rect(550, 50, 50, 50);
    rect(600, 100, 50, 50);
    pop();
 }
}

class zachary {
	constructor() {
	}
	drawZachary(x,y,r){
    translate (800,0)
    push();
    translate (x,y);
    rotate (r);
    rect(450, 250, 50, 50);
    rect(500, 250, 50, 50);
    rect(500, 300, 50, 50);
    rect(500, 350, 50, 50);
    rect(550, 350, 50, 50);
    pop();
 }
}
