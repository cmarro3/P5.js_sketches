function setup() {
  createCanvas(800, 800);
  loop();
  background('#000000');
}

function draw() {
  stroke(0);
  stroke('#ff0000');
  noFill();
  doubleCirclePattern(frameCount, frameCount, random() * 100, random() * 30)
}

function doubleCirclePattern(leftX,leftY,lenght, dist){
  ellipse(leftX,leftY, leftX, leftY+lenght);
  ellipse(leftX+dist,leftY, leftX+dist, leftY+lenght);
}
function mouseClicked(){
  doubleCirclePattern(mouseX,mouseY, random() * 10, random() * 20);
}