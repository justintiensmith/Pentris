
//let F;
let I;
let x = 100
let y = 100



function setup() {
  createCanvas(1500, 500);
  //F = new Fredrick();
  I = new Ivanka(10,10)
}








function draw(){
	background("blue");
    //F.drawFredrick();
    I.drawIvanka();




      let colorcheck = get (mouseX, mouseY);
      print(colorcheck)

      if (colorcheck[0]==255 && colorcheck[1]==255 && colorcheck[2]==255 && colorcheck[3]==255){
        I.x = mouseX
        I.y = mouseY
    }
}



// //class Fredrick {
//
// 	constructor(x,y,color){
// 		    this.x = 100;
//     		this.y = 100;
//         this.color=("white");
//         //this.speed = speed;
// 	}
//
// 	drawFredrick(){
//     fill(this.color)
//     rect(100,100,50,50);
//     rect(150,100,50,50);
//     rect(100,150,50,50);
//     rect(50,150,50,50);
//     rect(100,200,50,50);
// 	}
// }





//}
class Ivanka {

	constructor(x,y,color){
        this.color=("white");
        this.x = x;
        this.y = y;

	}
	drawIvanka(){  // draw a ball on the screen at x,y
      fill(this.color);
      rect(this.x,this.y,50,50);
      rect(this.x, this.y+50, 50, 50);
      rect(this.x,this.y+100,50,50);
      rect(this.x,this.y+150,50,50);
      rect(this.x,this.y+200,50,50);

    }
	}
