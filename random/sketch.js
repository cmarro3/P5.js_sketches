let angle=0;
function setup() {
  createCanvas(720, 500,WEBGL);
}

function draw() {
  background(175);
  
for(let a =-20;a<TWO_PI;a+=5){
  normalMaterial();
  translate(a+50,0)  
  rotateZ(sin(angle));
  rotateZ(cos(angle));
  cone(20,40,12,10);
  angle+=0.00003
 }
for(let a =-20;a<TWO_PI;a+=5){
  normalMaterial();
  translate(a+80,0)  
  rotateZ(sin(angle));
  rotateZ(cos(angle));
  cone(20,40,12,10);
  angle+=0.00003
 }
for(let a =-20;a<TWO_PI;a+=2){
  normalMaterial();
  translate(a+110,0)  
  rotateZ(sin(angle));
  rotateZ(cos(angle));
  cone(20,40,12,10);
  angle+=0.00003
 }
for(let a =-20;a<TWO_PI;a+=2){
  normalMaterial();
  translate(a+140,0)  
  rotateZ(sin(angle));
  rotateZ(cos(angle));
  cone(20,40,12,10);
  angle+=0.00003
 }  
  
}