function setup(){
  createCanvas(1500, 500);
}

function draw(){
  background("purple");
  Fredrick();
  Ivanka();
  Lorelai();
  Nathaniel();
  Theodore();
  Pilar();
}


function Fredrick(){
  fill("white")
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
  fill("white")
  beginShape();
  vertex(250, 100);
  vertex(300, 100);
  vertex(300, 350);
  vertex(250, 350);
  endShape();
}

function Lorelai(){
  fill("white")
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
  fill("white")
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

function Theodore(){
  fill("white")
  beginShape();
  vertex(800, 100);
  vertex(950, 100);
  vertex(950, 150);
  vertex(900, 150);
  vertex(900, 250);
  vertex(850, 250);
  vertex(850, 150);
  vertex(800, 150);
  endShape();
}

function Pilar(){
  fill("white")
  beginShape();
  vertex(700, 100);
  vertex(750, 100);
  vertex(750, 250);
  vertex(650, 250);
  vertex(650, 150);
  vertex(700, 150)
  endShape();
}
