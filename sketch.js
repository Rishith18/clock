var mn, hr, sc;


function setup() {
  createCanvas(800,400);
}

function draw() {
  hr = hour();
  mn = minute();
  sc = second();

  background(0);  
  translate(400,200);
  angleMode(DEGREES);
  rotate(-90);
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  drawSprites();
}