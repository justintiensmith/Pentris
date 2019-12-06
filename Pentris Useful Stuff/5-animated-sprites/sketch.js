let colorcheck;

function setup() {
  createCanvas(1500, 500);
  angleMode(DEGREES)
  createCanvas (1500, 500);
  background ("purple");
  U = new ulysess (100,100,0, false);
  V = new vector (300,100,0, false);
  W = new william (500,100,0, false);
  X = new xavier (100,300,0, false);
  Y = new yosef (100,500,0, false);
  // Z = new zachary (100,700,0, false);

}

function keyPressed() {
    if(keyIsDown(32)){ //spacebar
        if(U.moving==true){
            U.r += 90
            print("rotating U")
        }
        if(V.moving==true){
            V.r += 90
            print("rotating V")
        }
        if(W.moving==true){
            W.r += 90
            print("rotating W")
        }
        if(X.moving==true){
            X.r += 90
            print("rotating X")
        }
        if(Y.moving==true){
            Y.r += 90
            print("rotating Y")
        }
        // if(Z.moving==true){
        //     Z.r += 90
        //     print("rotating Z")
        // }
    }
}

function mousePressed(){
    colorcheck = get (mouseX, mouseY);
    print(colorcheck)
      if (colorcheck[0]== 11 && colorcheck[1]== 71 && colorcheck[2]== 42 && colorcheck[3]== 255){
          print ('picked up U')
          U.moving = true;
          V.moving = false;
          W.moving = false;
          X.moving = false;
          Y.moving = false;
          // Z.moving = false;
     }
     if (colorcheck[0]== 209 && colorcheck[1]== 71 && colorcheck[2]== 202 && colorcheck[3]== 255){
         print ('picked up V')
         U.moving = false;
         V.moving = true;
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         // Z.moving = false;
     }
      if (colorcheck[0]== 219 && colorcheck[1]== 129 && colorcheck[2]== 26 && colorcheck[3]== 255){
          U.moving = false;
          V.moving = false;
          W.moving = true;
          X.moving = false;
          Y.moving = false;
          // Z.moving = false;
      }
      if (colorcheck[0]== 33 && colorcheck[1]== 89 && colorcheck[2]== 78 && colorcheck[3]== 255){
          U.moving = false;
          V.moving = false;
          W.moving = false;
          X.moving = true;
          Y.moving = false;
          // Z.moving = false;
      }
      if (colorcheck[0]== 59 && colorcheck[1]== 14 && colorcheck[2]== 64 && colorcheck[3]==255){
          U.moving = false;
          V.moving = false;
          W.moving = false;
          X.moving = false;
          Y.moving = true;
          // Z.moving = false;
      }
      // if (colorcheck[0]== 84 && colorcheck[1]== 57 && colorcheck[2]== 16 && colorcheck[3]== 255){
      //     U.moving = false;
      //     V.moving = false;
      //     W.moving = false;
      //     X.moving = false;
      //     Y.moving = false;
      //     // Z.moving = true;
      // }
}

function mouseDragged(){

    if(U.moving == true){
        U.x=mouseX;
        U.y=mouseY;
    }

    if(V.moving == true){
        V.x=mouseX;
        V.y=mouseY;
    }

    if(W.moving == true){
        W.x=mouseX;
        W.y=mouseY;
    }

    if(X.moving == true){
        X.x=mouseX;
        X.y=mouseY;
    }

    if(Y.moving == true){
        Y.x=mouseX;
        Y.y=mouseY;
    }

    // if(Z.moving == true){
    //     Z.x=mouseX;
    //     Z.y=mouseY;
    // }
}

function mouseReleased(){

    colorcheck = get(mouseX,mouseY)

    if (U.moving == true && colorcheck[0]>129){
        U.x = 100;
        U.y = 100;
        U.moving = false;
        print("U was not on the purple")
    }
    if (V.moving == true && colorcheck[0]>129){
        V.x = 300;
        V.y = 100;
        V.moving = false;
        print("V was not on the purple")
    }
    if (W.moving == true && colorcheck[0]>129){
        W.x = 500;
        W.y = 100;
        W.moving = false;
    }
    if (X.moving == true && colorcheck[0]>129){
        X.x = 700;
        X.y = 100;
        X.moving = false;
    }
    if (Y.moving == true && colorcheck[0]>129){
        Y.x = 900;
        Y.y = 100;
        Y.moving = false;
    }
    // if (Z.moving == true && colorcheck[0]>129){
    //     Z.x = 1100;
    //     Z.y = 100;
    //     Z.moving = false;
    // }
    else {
       U.moving = false;
       V.moving = false;
       W.moving = false;
       X.moving = false;
       Y.moving = false;
       // Z.moving = false;
       print("released the piece")
    }
}

function draw(){
  background("purple")
  U.drawUlysess();
  V.drawVector();
  W.drawWilliam();
  X.drawXavier();
  Y.drawYosef();
  // Z.drawZachary();
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

class ulysess {
	  constructor(x,y,r,moving) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = moving;
   	}
	  drawUlysess(){
    if(this.moving == true){
    noFill();
    }
    else{
    fill(11, 71, 42, 255)
    }
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(-75, -50, 50, 50);
    rect(-75, 0, 50, 50);
    rect(-25, 0, 50, 50);
    rect(25, 0, 50, 50);
    rect(25, -50, 50, 50);
    pop();
	 }
   }

class vector {
	  constructor(x,y,r,moving) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = moving;
	  }
  	drawVector(){
    if(this.moving == true){
    noFill();
    }
    else{
    fill(209, 71, 202, 255)
    }
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(-75, -75, 50, 50);
    rect(-75, -25, 50, 50);
    rect(-75, 25, 50, 50);
    rect(-25, 25, 50, 50);
    rect(25, 25, 50, 50);
    pop();
  	}
    }

class william {
	  constructor(x,y,r,moving) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = moving;
  	}
    drawWilliam(){
    if(this.moving == true){
    noFill();
    }
    else{
    fill(219,129,26,255)
    }
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(-75, -75, 50, 50);
    rect(-25, -75, 50, 50);
    rect(-25, -25, 50, 50);
    rect(25, -25, 50, 50);
    rect(25, 25, 50, 50);
    pop();
    }
    }

class xavier {
	  constructor(x,y,r,moving) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = moving;
	  }
    drawXavier(){
    if(this.moving == true){
    noFill();
    }
    else{
    fill(33,89,78,255)
    }
    push();
    translate (this.x,this.y)
    rotate (this.r);
    rect(-25, 75, 50, 50);
    rect(-75, -25, 50, 50);
    rect(-25, -25, 50, 50);
    rect(25, -25, 50, 50);
    rect(-25, 25, 50, 50);
    pop();
    }
    }

class yosef {
	  constructor(x,y,r,moving) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = moving;
	  }
	  drawYosef(){
    if(this.moving == true){
    noFill();
    }
    else{
    fill(59,14,64,255)
    push();
    translate (this.x,this.y)
    rotate (this.r);
    rect(450, 100, 50, 50);
    rect(500, 100, 50, 50);
    rect(550, 100, 50, 50);
    rect(550, 50, 50, 50);
    rect(600, 100, 50, 50);
    pop();
    }
    }
//
// class zachary {
//     constructor(x,y,r,moving) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.moving = moving;
// 	  }
//     drawZachary(){
//     if(this.moving == true){
//     noFill();
//     }
//     else{
//     fill(84,57,16,255)
//     push();
//     translate (this.x,this.y)
//     rotate (this.r);
//     rect(450, 250, 50, 50);
//     rect(500, 250, 50, 50);
//     rect(500, 300, 50, 50);
//     rect(500, 350, 50, 50);
//     rect(550, 350, 50, 50);
//     pop();
//     }
//     }
