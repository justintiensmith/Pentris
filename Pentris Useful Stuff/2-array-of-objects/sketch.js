let colorcheck;

function setup() {
  createCanvas(1500, 500);
  angleMode(DEGREES)
  createCanvas (1500, 600);
  background ("purple");
  I = new Ivanka (50,150, 0, false);
  F = new Fredrick (175,150, 0, false);
  L = new Lorelai (300, 150, 0, false);
  N = new Nathaniel (250, 400, 0, false);
  T = new Theodore (475, 200, 0, false);
  P = new Pilar (600, 300, 0, false);
  U = new Ulysess (450, 100, 0 , false);
  V = new Vector (450,500, 0, 0, false);
  W = new William (150,450, 0, 0, false);
  X = new Xavier (175,300, 0, 0, false);
  Y = new Yosef (625,150, 0, 0, false);
  Z = new Zachary (725,450, 0, 0, false);
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
          if(U.moving==true){
              U.r += 90
              print("rotating I")
        }
        if(F.moving==true){
            F.r += 90
            print("rotating F")
        }
        if(V.moving==true){
            V.r += 90
            print("rotating F")
        }
        if(W.moving==true){
            W.r += 90
            print("rotating F")
        }
        if(X.moving==true){
            X.r += 90
            print("rotating F")
        }
        if(Y.moving==true){
            Y.r += 90
            print("rotating F")
        }
        if(Z.moving==true){
            Z.r += 90
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
          W.moving = false;
          X.moving = false;
          Y.moving = false;
          Z.moving = false;
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
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
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
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
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
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
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
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
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
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
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
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
     }

     if (colorcheck[0]==255 && colorcheck[1]==128 && colorcheck[2]==0 && colorcheck[3]==255){
         print ('picked up I')
         I.moving = false;
         F.moving = false;
         L.moving = false;
         N.moving = false;
         T.moving = false;
         P.moving = false;
         U.moving = false;
         V.moving = true;
         W.moving = false;
         X.moving = false;
         Y.moving = false;
         Z.moving = false;
     }

     if (colorcheck[0]==255 && colorcheck[1]==51 && colorcheck[2]==255 && colorcheck[3]==255){
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
         Y.moving = false;
         Z.moving = false;
     }

     if (colorcheck[0]==102 && colorcheck[1]==255 && colorcheck[2]==255 && colorcheck[3]==255){
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
         Y.moving = false;
         Z.moving = false;
     }

     if (colorcheck[0]==255 && colorcheck[1]==0 && colorcheck[2]==127 && colorcheck[3]==255){
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
         X.moving = false;
         Y.moving = true;
         Z.moving = false;
     }

     if (colorcheck[0]==153 && colorcheck[1]==76 && colorcheck[2]==0 && colorcheck[3]==255){
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
         X.moving = false;
         Y.moving = false;
         Z.moving = true;
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
    if(Z.moving == true){
        Z.x=mouseX;
        Z.y=mouseY;
    }
}

function mouseReleased(){

    colorcheck = get(mouseX,mouseY)

    if (I.moving == true){
      if (I.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      I.moving=false
      I.x = round(mouseX/50)*50;
      I.y = round(mouseY/50)*50;
      }
      else {
      I.moving = false;
      I.x = 50;
      I.y = 150;
      print("F was not on the purple")
      }
      }

    if (P.moving == true){
      if (P.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      P.moving=false
      P.x = round(mouseX/50)*50;
      P.y = round(mouseY/50)*50;
      }
      else {
      P.moving = false;
      P.x = 300;
      P.y = 150;
      print("F was not on the purple")
      }
      }

    if (U.moving == true){
      if (U.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      U.moving=false
      U.x = round(mouseX/50)*50;
      U.y = round(mouseY/50)*50;
      }
      else {
      U.moving = false;
      U.x = 250;
      U.y = 400;
      print("F was not on the purple")
      }
      }

    if (T.moving == true){
      if (T.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      T.moving=false
      T.x = round(mouseX/50)*50;
      T.y = round(mouseY/50)*50;
      }
      else {
      T.moving = false;
      T.x = 475;
      T.y = 200;
      print("F was not on the purple")
      }
      }

    if (L.moving == true){
      if (L.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      L.moving=false
      L.x = round(mouseX/50)*50;
      L.y = round(mouseY/50)*50;
      }
      else {
      L.moving = false;
      L.x = 600;
      L.y = 300;
      print("F was not on the purple")
      }
      }

    if (N.moving == true){
      if (N.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      N.moving=false
      N.x = round(mouseX/50)*50;
      N.y = round(mouseY/50)*50;
      }
      else {
      N.moving = false;
      N.x = 450;
      N.y = 100;
      print("F was not on the purple")
      }
      }

    if (F.moving == true){
      if (F.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      F.moving=false
      F.x = round(mouseX/50)*50;
      F.y = round(mouseY/50)*50;
      }
      else {
      F.moving = false;
      F.x = 450;
      F.y = 500;
      print("F was not on the purple")
      }
      }
    if (V.moving == true){
      if (V.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      V.moving=false
      V.x = round(mouseX/50)*50;
      V.y = round(mouseY/50)*50;
      }
      else {
      V.moving = false;
      V.x = 150;
      V.y = 450;
      print("F was not on the purple")
      }
    }

    if (W.moving == true){
      if (W.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      W.moving=false
      W.x = round(mouseX/50)*50;
      W.y = round(mouseY/50)*50;
      }
      else {
      W.moving = false;
      W.x = 175;
      W.y = 300;
      print("F was not on the purple")
      }
    }
    if (X.moving == true){
      if (X.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      X.moving=false
      X.x = round(mouseX/50)*50;
      X.y = round(mouseY/50)*50;
      }
      else {
      X.moving = false;
      X.x = 625;
      X.y = 150;
      print("F was not on the purple")
      }
    }
    if (Y.moving == true){
      if (Y.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      Y.moving=false
      Y.x = round(mouseX/50)*50;
      Y.y = round(mouseY/50)*50;
      }
      else {
      Y.moving = false;
      Y.x = 250;
      Y.y = 150;
      print("F was not on the purple")
      }
      }
    if (Z.moving == true){
      if (Z.x>=950&&F.x<=1350&&F.y>=50&&F.y<=450) {
      Z.moving=false
      Z.x = round(mouseX/50)*50;
      Z.y = round(mouseY/50)*50;
      }
      else {
      Z.moving = false;
      Z.x = 250;
      Z.y = 150;
      print("F was not on the purple")
      }
    }
}



function draw(){
  background("purple")
  fill("white");
  textSize(15);
  text("Instruction: Try to move all the pieces to the grid. Click and drag to move pieces and ", 880, 500);
  text("press space to rotate them. (There must be 4 unused squares. use this to your advantage). ", 880, 520);
  text("Reload to restart. Made by Justin and Marco. Have Fun!", 880, 540);
  I.drawIvanka ();
  F.drawFredrick();
  L.drawLorelai();
  N.drawNathaniel();
  T.drawTheodore();
  P.drawPilar();
  U.drawUlysess();
  V.drawVector();
  W.drawWilliam();
  X.drawXavier();
  Y.drawYosef();
  Z.drawZachary();
  translate(950,0);
  grid();
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
  fill(11, 71, 42,255)
  }
  push();
  translate (this.x,this.y);
  rotate (this.r);
  rect(-50, -50, 50, 50);
  rect(-50, 0, 50, 50);
  rect(0, 0, 50, 50);
  rect(50, 0, 50, 50);
  rect(50, -50, 50, 50);
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
  if(this.moving == true){
  noFill();
  }
  else {
  fill(255,128,0,255)
  }
  push();
  translate (this.x,this.y);
  rotate (this.r);
  rect(-50, -100, 50, 50);
  rect(-50, -50, 50, 50);
  rect(-50, 0, 50, 50);
  rect(0, 0, 50, 50);
  rect(50, 0, 50, 50);
  pop();
}
  }

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
  else {
  fill(255,51,255,255)
  }
  push();
  translate (this.x,this.y);
  rotate (this.r);
  rect(-100, -50, 50, 50);
  rect(-50, -50, 50, 50);
  rect(-50, 0, 50, 50);
  rect(0, 0, 50, 50);
  rect(0, 50, 50, 50);
  pop();
  }
  }

class Xavier {
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
    fill(102,255,255,255)
    }
    push();
    translate (this.x,this.y);
    rotate (this.r);
    rect(0, 0, 50, 50);
    rect(-50, 0, 50, 50);
    rect(0, -50, 50, 50);
    rect(0, 50, 50, 50);
    rect(50, 0, 50, 50);
    pop();
    }
    }

class Yosef {
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
  fill(255,0,127,255)
  }
  push();
  translate (this.x,this.y);
  rotate (this.r);
  rect(0, -100, 50, 50);
  rect(0, -50, 50, 50);
  rect(-50, -50, 50, 50);
  rect(0, 0, 50, 50);
  rect(0, 50, 50, 50);
  pop();
  }
  }

class Zachary {
constructor(x,y,r,moving) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.moving = moving;
}
drawZachary(){
  if(this.moving == true){
  noFill();
  }
  else{
  fill(153,76,0,255)
  }
  push();
  translate (this.x,this.y);
  rotate (this.r);
  rect(0, 0, 50, 50);
  rect(0, -50, 50, 50);
  rect(-50, -50, 50, 50);
  rect(0, 50, 50, 50);
  rect(50, 50, 50, 50);
  pop();
  }
  }
