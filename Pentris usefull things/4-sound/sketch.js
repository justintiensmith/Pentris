let colorcheck;

function setup() {
  createCanvas(1500, 500);
  angleMode(DEGREES)
  createCanvas (1500, 500);
  background ("purple");
  I = new Ivanka (200,200,0, false);
  F = new Fredrick (300,200,0, false);
  L = new Lorelai (300, 200, 0, false);
  N = new Nathaniel (250, 300, 0, false);

}

function keyPressed() {
    if(keyIsDown(32)){ //spacebar
        if(I.moving==true){
            I.r += 90
            print("rotating I")
        }
        if(L.moving==true){
            L.r += 90
            print("rotating L")
        }

        if(N.moving==true){
            N.r += 90
            print("rotating N")
        }
        if(F.moving==true){
            F.r += 90
            print("rotating F")
        }
    }

}

function mousePressed(){
    colorcheck = get (mouseX, mouseY);
    print(colorcheck)

      if (colorcheck[0]==150 && colorcheck[1]==3 && colorcheck[2]==250 && colorcheck[3]==255){
          print ('picked up I')
          I.moving = true;
          F.moving = false;
          L.moving = false;
          N.moving = false;
     }

     if (colorcheck[0]==245 && colorcheck[1]==245 && colorcheck[2]==66 && colorcheck[3]==255){
         print ('picked up F')
         F.moving = true;
         I.moving = false;
         L.moving = false;
         N.moving = false;
     }

     if (colorcheck[0]==3 && colorcheck[1]==250 && colorcheck[2]==7 && colorcheck[3]==255){
         print ('picked up L')
         F.moving = false;
         I.moving = false;
         L.moving = true;
         N.moving = false;
     }

     if (colorcheck[0]==255 && colorcheck[1]==0 && colorcheck[2]==10 && colorcheck[3]==255){
         print ('picked up L')
         F.moving = false;
         I.moving = false;
         L.moving = false;
         N.moving = true;
     }

      if (colorcheck[0]==128){
          I.moving = false;
          F.moving = false;
          L.moving = false;
          N.moving = false;

      }
}

function mouseDragged(){

    if(I.moving == true){
        I.x=mouseX;
        I.y=mouseY;
    }

    if(F.moving == true){
        F.x=mouseX;
        F.y=mouseY;
    }

    if(L.moving == true){
        L.x=mouseX;
        L.y=mouseY;
    }

    if(N.moving == true){
        N.x=mouseX;
        N.y=mouseY;
    }
}

function mouseReleased(){

    colorcheck = get(mouseX,mouseY)

    if (I.moving == true && colorcheck[0]>129){
        I.x = 100;
        I.moving = false;
        print("U was not on the purple")
    }

    if (L.moving == true && colorcheck[0]>129){
        L.x = 100;
        L.y=30
        L.moving = false;
        print("L was not on the purple")
    }

    if (N.moving == true && colorcheck[0]>129){
        N.x = 90;
        N.y=40
        N.moving = false;
        print("L was not on the purple")
    }

    if (F.moving == true && colorcheck[0]>129){
        F.x = 100;
        F.y=50
        F.moving = false;
        print("V was not on the purple")
    }

    else{
       I.moving = false;
       F.moving = false;
       L.moving = false;
       N.moving = false;
       print("released the piece")
    }

}

function draw(){
  background("purple")
  I.drawIvanka ();
  F.drawFredrick();
  L.drawLorelai();
  N.drawNathaniel();
  translate(940,0);
  grid();

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

class Ivanka {
	constructor(x,y,r,moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawIvanka(){
    if(this.moving == true){
        noFill();
    }
    else{
        fill(150, 3, 250, 255)
    }

    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(0,-100,50,50);
    rect(0,-50,50,50);
    rect(0,0,50,50);
    rect(0,50,50,50);
    rect(0,100,50,50);
    pop();
	}
}

class Fredrick {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawFredrick(){

        if(this.moving == true){
            noFill();
        }
        else{
            fill(245, 245, 66,255)
        }

    //translate (200,0)
    push();
    translate (this.x,this.y);
    rotate (this.r);
      rect(0,-100,50,50);
      rect(50,-100,50,50);
      rect(-0,-50,50,50);
      rect(-50,-50,50,50);
      rect(0,0,50,50);
    pop();
	}
}

class Lorelai {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;
}
  drawLorelai(){

      if(this.moving == true){
          noFill();
      }
      else{
          fill(3, 250, 7,255)
      }

  //translate (200,0)
  push();
  translate (this.x,this.y);
  rotate (this.r);
  rect(0,-100,50,50);
  rect(0,-50,50,50);
  rect(0,0,50,50);
  rect(0,50,50,50);
  rect(50,50,50,50);
  pop();

}
}

class Nathaniel {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawNathaniel(){

        if(this.moving == true){
            noFill();
        }
        else{
            fill(255, 0, 10,255)
        }

    //translate (200,0)
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(0,50,50,50);
    rect(0,0,50,50);
    rect(50,-50,50,50);
    rect(50,0,50,50);
    rect(50,-100,50,50);
    pop();
	}
}
