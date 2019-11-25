
let f;


function setup() {
  createCanvas(800, 400);
  f = new Fredrick();
}




function draw(){
	background("blue");
    f.drawFredrick();
}


class Fredrick {

	constructor(x,y,color){
		    this.x = 200;
    		this.y = 100;
        this.color=("white");
	}
	drawFredrick(){  // draw a ball on the screen at x,y
    fill(this.color)
    rect(100,100,50,50);
    rect(150,100,50,50);
    rect(100,150,50,50);
    rect(50,150,50,50);
    rect(100,200,50,50);
	}
	moveFredrick(){
		// if (mousePressed)
    this.x = mouseX();
    this.y = mouseY();

}}
