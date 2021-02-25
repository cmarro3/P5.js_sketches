const x = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(0);
  background('#000000');
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}

function draw() {
  stroke('#ff0000');
  noFill();
  doubleCirclePattern(frameCount, frameCount, random() * 100, random() * 30)
}

function mouseClicked(){
  doubleCirclePattern(mouseX,mouseY, random() * 10, random() * 20);
}
