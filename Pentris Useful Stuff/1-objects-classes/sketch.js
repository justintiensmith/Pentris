function setup() {
  createCanvas(1440, 500);
  background("purple");
  translate(940,0);
  grid();
  U = new ulysess(200, 200, "white");
  V = new vector (200,200, "white");
  W = new william (200,200, "white");
  X = new xavier (200,200, "white");
  Y = new yosef (200,200, "white");
  Z = new zachary (200,200, "white");
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

function draw(){
  U.drawUlysess ();
  V.drawVector ();
  W.drawWilliam ();
  X.drawXavier ();
  Y.drawYosef ();
  Z.drawZachary ();
}

function keyPressed() {
if(keyIsDown(39)){
  background("purple");
  translate(940,0);
  grid();
  a += 50
  }
}

// function keyPressed() {
// if(keyIsDown(40)){
//   background("purple");
//   translate(940,0);
//   grid();
//   b += 50
//   }
// }
//
// function keyPressed() {
// if(keyIsDown(37)){
//   background("purple");
//   translate(940,0);
//   grid();
//   c += 50
//   }
// }
//
// function keyPressed() {
// if(keyIsDown(38)){
//   background("purple");
//   translate(940,0);
//   grid();
//   d += 0
//   }
// }

let a = 0
let b = 0
let c = 0
let d = 0

class ulysess {
  constructor(x,y) {
        this.x = x;
        this.y = y;
  }
  drawUlysess(){
  rect(50 + a + a, 50 + b + b, 50, 50);
  rect(50 + a, 100 - a + c, 50, 50);
  rect(100, 100, 50, 50);
  rect(150 - a - c, 100 + a + c, 50, 50);
  rect(150 - c, 50 + a + a + b + b, 50, 50);
   }
}

class vector {
	constructor(x,y) {
    this.x = x;
    this.y = y;
	}
	drawVector(){
    rect(50, 250, 50, 50);
    rect(50, 300, 50, 50);
    rect(50, 350, 50, 50);
    rect(100, 350, 50, 50);
    rect(150, 350, 50, 50);
	}
}

class william {
	constructor(x,y) {
		    this.x = x;
    		this.y = y;
	}
	drawWilliam(){
    rect(250, 50, 50, 50);
    rect(300, 50, 50, 50);
    rect(300, 100, 50, 50);
    rect(350, 100, 50, 50);
    rect(350, 150, 50, 50);
 }
}

class xavier {
	constructor(x,y) {
		    this.x = x;
    		this.y = y;
	}
	drawXavier(){
    rect(300, 250, 50, 50);
    rect(250, 300, 50, 50);
    rect(300, 300, 50, 50);
    rect(350, 300, 50, 50);
    rect(300, 350, 50, 50);
 }
}

class yosef {
	constructor(x,y) {
		    this.x = x;
    		this.y = y;
	}
	drawYosef(){
    rect(450, 100, 50, 50);
    rect(500, 100, 50, 50);
    rect(550, 100, 50, 50);
    rect(550, 50, 50, 50);
    rect(600, 100, 50, 50);
 }
}

class zachary {
	constructor(x,y) {
		    this.x = x;
    		this.y = y;
	}
	drawZachary(){
    rect(450, 250, 50, 50);
    rect(500, 250, 50, 50);
    rect(500, 300, 50, 50);
    rect(500, 350, 50, 50);
    rect(550, 350, 50, 50);
 }
}
