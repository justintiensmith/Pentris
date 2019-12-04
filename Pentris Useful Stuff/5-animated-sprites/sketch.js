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
  Z = new zachary (100,700,0, false);

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
        if(Z.moving==true){
            Z.r += 90
            print("rotating Z")
        }
    }
}

function mousePressed(){
    colorcheck = get (mouseX, mouseY);
    print(colorcheck)
      if (colorcheck[0]==235 && colorcheck[1]==235 && colorcheck[2]==56 && colorcheck[3]==255){
          print ('picked up U')
          U.moving = true;
          V.moving = false;
          W.moving = false;
     }
     if (colorcheck[0]==245 && colorcheck[1]==245 && colorcheck[2]==66 && colorcheck[3]==255){
         print ('picked up V')
         V.moving = true;
         U.moving = false;
         W.moving = false;
     }
      if (colorcheck[0]==128 && colorcheck[1]==128 && colorcheck[2]==255 && colorcheck[3]==255){
          W.moving = true;
          U.moving = false;
          V.moving = false;
      }
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
    else {
       U.moving = false;
       V.moving = false;
       W.moving = false;
       print("released the piece")
    }

}

function draw(){
  background("purple")
  U.drawUlysess ();
  V.drawVector();
  W.drawWilliam();
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
        fill(235,235,56,255)
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
            fill(245, 245, 66,255)
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
            fill(128,128,255)
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
            fill(128,128,255)
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
	drawYosef(x,y,r){
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

class zachary {
	constructor(x,y,r,moving) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.moving = moving;
	}
	drawZachary(x,y,r){
    push();
    translate (this.x,this.y)
    rotate (this.r);
    rect(450, 250, 50, 50);
    rect(500, 250, 50, 50);
    rect(500, 300, 50, 50);
    rect(500, 350, 50, 50);
    rect(550, 350, 50, 50);
    pop();
 }
}
