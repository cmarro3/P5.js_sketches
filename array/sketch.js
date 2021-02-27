const index = 0;
const data = ["red", "green", "blue",  "cyan", "magenta", "yellow", "black"]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  textSize(32);
  text(data[index], 12, 200)
  mousePressed();
}

function mousePressed(){
  index= index + 1;
}
