
let F;
let I;


function setup() {
  createCanvas(1500, 500);
  F = new Fredrick();
  I = new Ivanka
}

clicked();{
  let d = dist(mouseX, mouseY, this.x, this.y)
  print ('spookey')
}



function draw(){
	background("blue");
    F.drawFredrick();
    F.moveFredrick();
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
	drawFredrick(){  // draw a ball on the screen at x,y
    fill(this.color)
    rect(100,100,50,50);
    rect(150,100,50,50);
    rect(100,150,50,50);
    rect(50,150,50,50);
    rect(100,200,50,50);
	}
  // moveFredrick();{
  //     if(mousePressed){
  //       this.x = 100

      }

  }
}

class Ivanka {

	constructor(x,y,color){
		    this.x = 200;
    		this.y = 100;
        this.color=("white");
	}
	drawIvanka(){  // draw a ball on the screen at x,y
      fill(this.color);
      rect(250,100,50,50);
      rect(250,150,50,50);
      rect(250,200,50,50);
      rect(250,250,50,50);
      rect(250,300,50,50);
    }
	}
