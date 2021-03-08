function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  textSize(12);
  text(films[1].Main_Genre, 0,200);
  text(films[1].title, 0,230);
  fill(255,0,0)
  ellipse (20,20,films[1].imdb_rating,films[1].imdb_rating);
}
