function setup(){
  createCanvas(1500, 500);
}

function draw(){
  background("purple");
  Fredrick();
  Ivanka();
  Lorelai();
  Nathaniel();
}


function Fredrick(){
  fill("yellow")
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

function Ivanka(){
  fill("blue")
  beginShape();
  vertex(250, 100);
  vertex(300, 100);
  vertex(300, 350);
  vertex(250, 350);
  endShape();
}

function Lorelai(){
  fill("green")
  beginShape();
  vertex(350, 100);
  vertex(400, 100);
  vertex(400, 250);
  vertex(450, 250);
  vertex(450,300);
  vertex(350,300);
  endShape();
}

function Nathaniel(){
  fill("green")
  beginShape();
  vertex(550, 100);
  vertex(600, 100);
  vertex(600, 250);
  vertex(550, 250);
  vertex(550, 300);
  vertex(500, 300);
  vertex(500, 200);
  vertex(550, 200);
  endShape();
}
