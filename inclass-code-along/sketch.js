const flights = [0,1,0,0,11,19,21]
const yunit;
const xuint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xunit = windowWidth/50;
  yunit = windowHeight/30;
  noLoop();
}

function drawStep(x,y){
  const lowerY = y;
  const upperY = y - yunit;
  const leftX = x;
  const rightX = x + xuint;

  line(leftX,lowerY,leftX,upperY)
  line(leftX,upperY,rightX,upperY)

  for(i = 0; i < flights.length; i=i+1 ){
    const baseX = 30 + i *30;
    const baseY = 0.9 * height;
    const day = i +1 
    text('Day' + day, baseX,baseY);
    for(j = 0; j <flights[i]; j=j+1){
      const thisX = baseX + xunit*j;
      const thisY = baseY - yunit*j-20;
      drawStep(thisX,thisY);
    }
  }
}


function draw() {
  text('Extra Credit')
  background(220);
  drawStep(100,100);
}
