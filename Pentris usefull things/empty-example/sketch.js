// function setup(){
//   createCanvas(1500, 500);
// }
//
// function draw(){
//   background("purple");
//   Fredrick();
//   Ivanka();
//   Lorelai();
//   Nathaniel();
//   Theodore();
//   Pilar();
// }
//
//
// function Fredrick(){
//   fill("white")
//   beginShape(Fredrick);
//   vertex(100, 100);
//   vertex(200, 100);
//   vertex(200, 150);
//   vertex(150, 150);
//   vertex(150, 250);
//   vertex(100, 250);
//   vertex(100, 200);
//   vertex(50, 200);
//   vertex(50, 150);
//   vertex(100, 150);
//   endShape();
// }
let f;


function setup() {
  createCanvas(800, 400);
  f = new Fredrick(); //make a new ball from the Ball class and call it b.

}




function draw(){
	background("blue");
    f.drawFredrick(); //draw the ball called b (go look in the Ball class for the drawBall function)
    f.moveFredrick()

}


//ball class from which to create new balls with similar properties.
class Fredrick {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = 100;
    		this.y = 100;
        this.color=("red");
        this.speed = speed;
	}
	drawFredrick(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
        beginShape(Fredrick);
        vertex(100, 100);
        vertex(200, 100);
        vertex(200, 150);
        vertex(150, 150);
        vertex(150, 250);
        vertex(100, 250);
        vertex(100, 200);
        vertex(50, 200);
        vertex(50, 150);
        vertex(100, 150);
        endShape();
	}
	moveFredrick(){ //update the location of the ball, so it moves across the screen
		// if (mousePressed)
    // this.x = mouseX();
    // this.y = mouseY();
    if (keyIsDown(UP_ARROW))  //if you hold the up arrow, move up by speed
       this.y -= this.speed;
	}
}

// function Ivanka(){
//   fill("white")
//   beginShape();
//   vertex(250, 100);
//   vertex(300, 100);
//   vertex(300, 350);
//   vertex(250, 350);
//   endShape();
// }
//
// function Lorelai(){
//   fill("white")
//   beginShape();
//   vertex(350, 100);
//   vertex(400, 100);
//   vertex(400, 250);
//   vertex(450, 250);
//   vertex(450,300);
//   vertex(350,300);
//   endShape();
// }
//
// function Nathaniel(){
//   fill("white")
//   beginShape();
//   vertex(550, 100);
//   vertex(600, 100);
//   vertex(600, 250);
//   vertex(550, 250);
//   vertex(550, 300);
//   vertex(500, 300);
//   vertex(500, 200);
//   vertex(550, 200);
//   endShape();
// }
//
// function Theodore(){
//   fill("white")
//   beginShape();
//   vertex(800, 100);
//   vertex(950, 100);
//   vertex(950, 150);
//   vertex(900, 150);
//   vertex(900, 250);
//   vertex(850, 250);
//   vertex(850, 150);
//   vertex(800, 150);
//   endShape();
// }
//
// function Pilar(){
//   fill("white")
//   beginShape();
//   vertex(700, 100);
//   vertex(750, 100);
//   vertex(750, 250);
//   vertex(650, 250);
//   vertex(650, 150);
//   vertex(700, 150)
//   endShape();
// }
