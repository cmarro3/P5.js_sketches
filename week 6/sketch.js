function setup() {
  createCanvas(400, 400);
  loop();
  background(220);
}

function draw() {
  // doubleVerticalLine(200, 0, 400);
  doubleVerticalLine(frameCount, frameCount, random() * 80, random() * 20 )
}

function doubleVerticalLine(leftX,leftY,lenght, dist){
  line(leftX,leftY, leftX, leftY+lenght);
  line(leftX+dist,leftY, leftX+dist, leftY+lenght);
}
function mouseClicked(){
  doubleVerticalLine(mouseX,mouseY, random() * 80, random() * 20);
}