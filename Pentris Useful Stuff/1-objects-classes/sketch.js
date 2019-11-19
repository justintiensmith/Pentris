function setup() {
  createCanvas(1500, 500);
  background("purple");
}


//
//   function mouseReleased(){
//
//   }
// }

function draw(){
  ulysess();
  vector();
  william();
  xavier();
  yosef();
  zachary();

  translate(940,0);
  grid();

  let colorcheck = get (mouseX, mouseY);
  print(colorcheck)

  if (colorcheck[0]==255 && colorcheck[1]==255 && colorcheck[2]==255 && colorcheck[3]==255){

  print ('it works')

}
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

function ulysess() {
  beginShape(ulysess);
vertex(250, 50);
vertex(300, 50);
vertex(300, 100);
vertex(350, 100);
vertex(350, 50);
vertex(400, 50);
vertex(400, 50);
vertex(400, 150);
vertex(250, 150);
vertex(250, 50);
  endShape();
}



function vector(){
  beginShape(vector);
vertex(50, 250);
vertex(100, 250);
vertex(100, 350);
vertex(200, 350);
vertex(200, 350);
vertex(200, 400);
vertex(50, 400);
vertex(50,250);
  endShape();
}

function william(){
  beginShape(william);
vertex(50, 50);
vertex(50, 100);
vertex(100, 100);
vertex(100, 150);
vertex(150, 150);
vertex(150, 200);
vertex(200, 200);
vertex(200,100);
vertex(150,100);
vertex(150,50);
vertex(50,50);
  endShape();
}

function xavier(){
  beginShape(xavier);
vertex(300, 250);
vertex(350, 250);
vertex(350, 300);
vertex(400, 300);
vertex(400, 350);
vertex(350, 350);
vertex(350, 400);
vertex(300, 400);
vertex(300, 350);
vertex(250, 350);
vertex(250, 300);
vertex(300, 300);
vertex(300, 250);
  endShape();
}

function yosef(){
  beginShape(xavier);
vertex(450, 100);
vertex(550, 100);
vertex(550, 50);
vertex(600, 50);
vertex(600, 100);
vertex(650, 100);
vertex(650, 150);
vertex(450, 150);
vertex(450, 100);
  endShape();
}

function zachary(){
  beginShape(xavier);
vertex(450, 250);
vertex(550, 250);
vertex(550, 350);
vertex(600, 350);
vertex(600, 400);
vertex(500, 400);
vertex(500, 300);
vertex(450, 300);
vertex(450, 250);
  endShape();
}
