function setup() {
  createCanvas(1440, 500);
  background("purple");
  U = new ulysess(200, 200, "white");
  // V = new vector (200,200, "white");
  // W = new william (200,200, "white");
  // X = new xavier (200,200, "white");
  // Y = new yosef (200,200, "white");
  // Z = new zachary (200,200, "white");
}

function draw(){
  U.drawUlysess ();
  // V.drawVector ();
  // W.drawWilliam ();
  // X.drawXavier ();
  // Y.drawYosef ();
  // Z.drawZachary ();
}

// function keyPressed() {
// if(keyIsDown(39)){
//   background("purple");
//   a += 50
//   }
// }
//
// function keyPressed() {
// if(keyIsDown(40)){
//   background("purple");
//   b += 50
//   }
// }

function keyPressed() {
if(keyIsDown(37)){
  background("purple");
  c += 50
  }
}

// function keyPressed() {
// if(keyIsDown(38)){
//   background("purple");
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
//
// class vector {
// 	constructor() {
// 	}
// 	drawVector(x,y,r){
//     translate (200,0)
//     push();
//     translate (x,y);
//     rotate (r);
//     rect(-75, -75, 50, 50);
//     rect(-75, -25, 50, 50);
//     rect(-75, 25, 50, 50);
//     rect(-25, 25, 50, 50);
//     rect(25, 25, 50, 50);
//     pop();
// 	}
// }
//
// class william {
// 	constructor(x,y) {
// 		    this.x = x;
//     		this.y = y;
// 	}
// 	drawWilliam(){
//     rect(50, 50, 50, 50);
//     rect(100, 50, 50, 50);
//     rect(100, 100, 50, 50);
//     rect(150, 100, 50, 50);
//     rect(150, 150, 50, 50);
//  }
// }
//
// class xavier {
// 	constructor(x,y) {
// 		    this.x = x;
//     		this.y = y;
// 	}
// 	drawXavier(){
//     rect(300, 250, 50, 50);
//     rect(250, 300, 50, 50);
//     rect(300, 300, 50, 50);
//     rect(350, 300, 50, 50);
//     rect(300, 350, 50, 50);
//  }
// }
//
// class yosef {
// 	constructor(x,y) {
// 		    this.x = x;
//     		this.y = y;
// 	}
// 	drawYosef(){
//     rect(450, 100, 50, 50);
//     rect(500, 100, 50, 50);
//     rect(550, 100, 50, 50);
//     rect(550, 50, 50, 50);
//     rect(600, 100, 50, 50);
//  }
// }
//
// class zachary {
// 	constructor(x,y) {
// 		    this.x = x;
//     		this.y = y;
// 	}
// 	drawZachary(){
//     rect(450, 250, 50, 50);
//     rect(500, 250, 50, 50);
//     rect(500, 300, 50, 50);
//     rect(500, 350, 50, 50);
//     rect(550, 350, 50, 50);
//  }
// }
