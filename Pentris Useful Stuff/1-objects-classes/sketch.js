
let colorcheck;

function setup() {
  createCanvas(1500, 500);
  angleMode(DEGREES)
  createCanvas (1500, 600);
  background ("purple");
  I = new Ivanka (100,150,0, false);
  F = new Fredrick (250,150,0, false);
  L = new Lorelai (400, 150, 0, false);
  N = new Nathaniel (250, 400, 0, false);
  T = new Theodore (100, 350, 0, false);
  P = new Pilar (450, 350, 0, false);
<<<<<<< Updated upstream
  U = new Ulysess (200, 200 ,0 ,false);
  V = new Vector (200, 400, 0, false);
  W = new William (300, 500, 0, false);
  X = new Xavier (400, 400, 0, false);
}

=======
  U = new ulysess (200, 200 ,0 ,false);
  V = new vector (200, 400, 0, false);

}

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        if(X.moving==true){
            X.r += 90
            print("rotating X")
        }
        if(W.moving==true){
            W.r += 90
            print("rotating W")
        }
=======
>>>>>>> Stashed changes
        if(P.moving==true){
            P.r += 90
            print("rotating P")
        }
        if(N.moving==true){
            N.r += 90
            print("rotating N")
        }
        if(T.moving==true){
            T.r += 90
            print("rotating T")
          }
          if(V.moving==true){
              V.r += 90
              print("rotating V")
            }
          if(U.moving==true){
              U.r += 90
              print("rotating I")
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
          T.moving = false;
          P.moving = false;
          U.moving = false;
          V.moving = false;
<<<<<<< Updated upstream
          W.moving = false;
          X.moving = false;
=======
>>>>>>> Stashed changes
     }

     if (colorcheck[0]==3 && colorcheck[1]==240 && colorcheck[2]==250 && colorcheck[3]==255){
         print ('picked up P')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = true;
         U.moving = false;
         V.moving = false;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
=======
>>>>>>> Stashed changes
    }

     if (colorcheck[0]==245 && colorcheck[1]==245 && colorcheck[2]==66 && colorcheck[3]==255){
         print ('picked up F')
         F.moving = true;
         I.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = false;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
=======
>>>>>>> Stashed changes
     }

     if (colorcheck[0]==3 && colorcheck[1]==250 && colorcheck[2]==7 && colorcheck[3]==255){
         print ('picked up L')
         F.moving = false;
         I.moving = false;
         L.moving = true;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = false;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
=======
>>>>>>> Stashed changes
     }

     if (colorcheck[0]==255 && colorcheck[1]==0 && colorcheck[2]==10 && colorcheck[3]==255){
         print ('picked up L')
         F.moving = false;
         I.moving = false;
         L.moving = false;
         N.moving = true;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = false;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
=======
>>>>>>> Stashed changes
     }

     if (colorcheck[0]==11 && colorcheck[1]==71 && colorcheck[2]==42 && colorcheck[3]==255){
         print ('picked up I')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = true;
         V.moving = false;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
=======
>>>>>>> Stashed changes
     }

     if (colorcheck[0]==3 && colorcheck[1]==40 && colorcheck[2]==255 && colorcheck[3]==255){
         print ('picked up I')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = true;
         P.moving = false;
         U.moving = false;
         V.moving = false;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
     }

     if (colorcheck[0]==219 && colorcheck[1]==129 && colorcheck[2]==16 && colorcheck[3]==255){
         print ('picked up I')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = false;
         W.moving = true;
         X.moving = false;
     }

     if (colorcheck[0]==33 && colorcheck[1]==89 && colorcheck[2]==78 && colorcheck[3]==255){
         print ('picked up I')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = false;
         W.moving = false;
         X.moving = true;
=======
>>>>>>> Stashed changes
     }

     if (colorcheck[0]==209 && colorcheck[1]==71 && colorcheck[2]==202 && colorcheck[3]==255){
         print ('picked up I')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = true;
<<<<<<< Updated upstream
         W.moving = false;
         X.moving = false;
=======
>>>>>>> Stashed changes
     }

      if (colorcheck[0]==128){
          I.moving = false;
          F.moving = false;
          L.moving = false;
          N.moving = false;
          T.moving = false;
          P.moving = false;
          U.moving = false;
          V.moving = false;
<<<<<<< Updated upstream
          W.moving = false;
          X.moving = false;
=======
>>>>>>> Stashed changes
      }
}

function mouseDragged(){

    if(I.moving == true){
        I.x=mouseX;
        I.y=mouseY;
    }

    if(P.moving == true){
        P.x=mouseX;
        P.y=mouseY;
    }

<<<<<<< Updated upstream
    if(W.moving == true){
        W.x=mouseX;
        W.y=mouseY;
    }

    if(X.moving == true){
        X.x=mouseX;
        X.y=mouseY;
    }

=======
>>>>>>> Stashed changes
    if(V.moving == true){
        V.x=mouseX;
        V.y=mouseY;
    }

    if(U.moving == true){
        U.x=mouseX;
        U.y=mouseY;
    }

    if(T.moving == true){
        T.x=mouseX;
        T.y=mouseY;
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
        print("I was not on the purple")
    }

    if (P.moving == true && colorcheck[0]>129){
        P.x = 100;
        P.moving = false;
        print("P was not on the purple")
    }

<<<<<<< Updated upstream
    if (W.moving == true && colorcheck[0]>129){
        W.x = 100;
        W.moving = false;
        print("W was not on the purple")
    }

    if (X.moving == true && colorcheck[0]>129){
        X.x = 100;
        X.moving = false;
        print("X was not on the purple")
    }

=======
>>>>>>> Stashed changes
    if (V.moving == true && colorcheck[0]>129){
        V.x = 100;
        V.moving = false;
        print("V was not on the purple")
    }

    if (U.moving == true && colorcheck[0]>129){
        U.x = 100;
        U.moving = false;
        print("U was not on the purple")
    }

    if (T.moving == true && colorcheck[0]>129){
        T.x = 100;
        T.moving = false;
        print("T was not on the purple")
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
        print("N was not on the purple")
    }

    if (F.moving == true && colorcheck[0]>129){
        F.x = 100;
        F.y=50
        F.moving = false;
        print("F was not on the purple")
    }

    else{
       I.moving = false;
       F.moving = false;
       L.moving = false;
       N.moving = false;
       T.moving = false;
       P.moving = false;
       U.moving = false;
       V.moving = false;
<<<<<<< Updated upstream
       W.moving = false;
       X.moving = false;
=======
>>>>>>> Stashed changes
       print("released the piece")
    }

}

function draw(){
  background("purple")
  I.drawIvanka ();
  F.drawFredrick();
  L.drawLorelai();
  N.drawNathaniel();
  T.drawTheodore();
  P.drawPilar();
  U.drawUlysess();
  V.drawVector();
<<<<<<< Updated upstream
  W.drawWilliam();
  X.drawXavier();
=======
>>>>>>> Stashed changes
  translate(940,0);
  grid();

}



class Ivanka {
	constructor(x,y,r,moving) {
<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    pop();
	}
}

<<<<<<< Updated upstream
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

=======
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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

class Theodore {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawTheodore(){

        if(this.moving == true){
            noFill();
        }
        else{
            fill(3, 40, 255,255)
        }

    //translate (200,0)
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(-50,0,50,50);
    rect(0,0,50,50);
    rect(50,0,50,50);
    rect(0,50,50,50);
    rect(0,100,50,50);
    pop();
	}
}

class Pilar {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawPilar(){

        if(this.moving == true){
            noFill();
        }
        else{
            fill(3, 240, 250,255)
        }

    //translate (200,0)
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(0,0,50,50);
    rect(-50,50,50,50);
    rect(0,50,50,50);
    rect(-50,100,50,50);
    rect(0,100,50,50);
    pop();
	}
}

class Ulysess {
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

class Vector {
	constructor(x,y,r,moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;
	}
	drawVector(){
=======
	}
	drawNathaniel(){

>>>>>>> Stashed changes
        if(this.moving == true){
            noFill();
        }
        else{
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
    pop();
	}
}

<<<<<<< Updated upstream
class William {
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
            fill(219, 129, 16, 255)
        }
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(-75, -75, 50, 50);
    rect(-75, -25, 50, 50);
    rect(-25, -25, 50, 50);
    rect(-25, 25, 50, 50);
    rect(25, 25, 50, 50);
    pop();
	}
}

class Xavier {
=======
class Theodore {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawTheodore(){

        if(this.moving == true){
            noFill();
        }
        else{
            fill(3, 40, 255,255)
        }

    //translate (200,0)
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(-50,0,50,50);
    rect(0,0,50,50);
    rect(50,0,50,50);
    rect(0,50,50,50);
    rect(0,100,50,50);
    pop();
	}
}

class Pilar {
	constructor(x,y,r, moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;

	}
	drawPilar(){

        if(this.moving == true){
            noFill();
        }
        else{
            fill(3, 240, 250,255)
        }

    //translate (200,0)
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(0,0,50,50);
    rect(-50,50,50,50);
    rect(0,50,50,50);
    rect(-50,100,50,50);
    rect(0,100,50,50);
    pop();
	}
}

class ulysess {
>>>>>>> Stashed changes
	constructor(x,y,r,moving) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.moving = moving;
	}
<<<<<<< Updated upstream
	drawXavier(){
=======
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
>>>>>>> Stashed changes
        if(this.moving == true){
            noFill();
        }
        else{
<<<<<<< Updated upstream
            fill(33, 89, 78, 255)
=======
            fill(209, 71, 202, 255)
>>>>>>> Stashed changes
        }
    push();
    translate (this.x,this.y);
    rotate (this.r);
<<<<<<< Updated upstream
    
    rect(-75, -25, 50, 50);
    rect(-25, -25, 50, 50);
    rect(-25, 25, 50, 50);
    rect(25, -25, 50, 50);
=======
    rect(-75, -75, 50, 50);
    rect(-75, -25, 50, 50);
    rect(-75, 25, 50, 50);
    rect(-25, 25, 50, 50);
    rect(25, 25, 50, 50);
>>>>>>> Stashed changes
    pop();
	}
}
