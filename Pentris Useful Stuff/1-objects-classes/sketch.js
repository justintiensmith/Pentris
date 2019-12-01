let rotation = 0

function setup() {
  angleMode(DEGREES)
  createCanvas (1500, 500);
  background ("purple");
  U = new ulysess ();
  V = new vector ();
//   W = new william (300, 69, "white");
//   X = new xavier (250,40, "red");
//   Y = new yosef (200,200, "white");
//   Z = new zachary (200,200, "white");
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
  // V.moveVector ();
  // W.drawWilliam();
  // W.moveWilliam ();
  // X.drawXavier();
  // X.moveXavier ();
  // Y.drawYosef();
  // U.moveYosef ();
  // Z.drawZachary();
  // Z.moveZachary ();
//
//   translate(940,0);
//   grid();
//
//   let colorcheck = get (mouseX, mouseY);
//   print(colorcheck)
//
//   if (colorcheck[0]==255 && colorcheck[1]==255 && colorcheck[2]==255 && colorcheck[3]==255){
//   print ('it works')
// }
}
//
// function grid() {
//   line(50, 50, 50, 450);
//   line(100, 50, 100, 450);
//   line(150, 50, 150, 450);
//   line(200, 50, 200, 450);
//   line(250, 50, 250, 450);
//   line(300, 50, 300, 450);
//   line(350, 50, 350, 450);
//   line(400, 50, 400, 450);
//   line(450, 50, 450, 450);
//   line(50, 50, 450, 50);
//   line(50, 100, 450, 100);
//   line(50, 150, 450, 150);
//   line(50, 200, 450, 200);
//   line(50, 250, 450, 250);
//   line(50, 300, 450, 300);
//   line(50, 350, 450, 350);
//   line(50, 400, 450, 400);
//   line(50, 450, 450, 450);
// }

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
