let x = 0;
function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("BLUECHERIES.ttf") ;
}

function draw() {
  background (100);
  textSize (250);
  textFont (f1, 78);
  text( "horse hockey", x, 250);
  x+=5;
  if (x > width) {
    x = -500;

  }

}
