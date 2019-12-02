
let F;
// let I;


function setup() {
  createCanvas(1500, 500);
  F = new Fredrick();
  // I = new Ivanka
}

// clicked();{
//   let d = dist(mouseX, mouseY, this.x, this.y)
//   print ('spookey')
// }



function draw(){
	background("red");
    F.drawFredrick();
    // F.moveFredrick();
    //I.drawIvanka();



      let colorcheck = get (mouseX, mouseY);
      print(colorcheck)

      if (colorcheck[0]==255 && colorcheck[1]==255 && colorcheck[2]==255 && colorcheck[3]==255){
      print ('white detected')
    }
}



class Fredrick {

	constructor(x,y,color){
		    this.x = 100;
    		this.y = 100;
        this.color=("white");
	}

	drawFredrick(){
    fill(this.color)
    rect(100,100,50,50);
    rect(150,100,50,50);
    rect(100,150,50,50);
    rect(50,150,50,50);
    rect(100,200,50,50);
	}
}


// class Ivanka {
//
// 	constructor(x,y,color){
// 		    this.x = 200;
//     		this.y = 100;
//         this.color=("white");
// 	}
// 	drawIvanka(){  // draw a ball on the screen at x,y
//       fill(this.color);
//       rect(250,100,50,50);
//       rect(250,150,50,50);
//       rect(250,200,50,50);
//       rect(250,250,50,50);
//       rect(250,300,50,50);
//     }
// 	}

//
// //create an empty array called balls
//
// let balls = [];
// let rectangles = [];
// let triangles = [];
//
// function setup() {
//   createCanvas(800, 400);
//
// }
//
// function draw(){
//   background(252,128,128);
//
// for (let i = 0; i < rectangles.length; i++) {
//   rectangles[i].drawRect();
//   rectangles[i].moveRect();
// }
//
// 	for (let i = 0; i < balls.length; i++) {
// 	 balls[i].drawBall();
//    balls[i].moveBall();
// }
//
// 	for (let i = 0; i < triangles.length; i++) {
//    triangles[i].drawTriangle();
//    triangles[i].moveTriangle();
//   }
// }
//
// function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
//   let  b = new Ball(200, 200);
//   let  r = new Rect (100, 100);
//   let  t = new Triangle (250,100);
//   balls.push(b);
//   console.log(balls);
//   rectangles.push(r);
//   console.log(rectangles);
//   triangles.push(t);
//   console.log(triangles);
// }
//
// //ball class from which to create new balls with similar properties.
// class Ball {
//
// 	constructor(x,y){ //every ball needs an x value and a y value
// 		    this.x = x;
//     		this.y = y;
// 	}
//   	drawBall(){  // draw a ball on the screen at x,y
//       		stroke(0);
//       		fill("red");
//   		    ellipse(this.x,this.y,10,10);
//   }
//   	moveBall(){ //update the location of the ball, so it moves across the screen
//   		this.x = this.x+2;
//   		this.y = this.y+.5;
// 	}
// }
//
// class Rect {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   drawRect(){
//     stroke(0);
//     fill("blue")
//     rect(this.x,this.y,10,10)
// }
//   moveRect(){
//     this.x = this.x+1;
//     this.y = this.y+1
//   }
// }
//
// class Triangle {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   drawTriangle(){
//     stroke(0);
//     fill("green")
//     triangle(this.x,this.y, this.x+10,this.y-20,this.x+20,this.y)
// }
//   moveTriangle(){
//     this.x = this.x+2.5;
//     this.y = this.y+1
//
//   }
// }
