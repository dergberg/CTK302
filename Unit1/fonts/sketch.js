function setup() {
  createCanvas(500, 500);
  f1 = loadFont ("assets/BLUECHERIES.ttf") ;
  f2 = loadFont ("assets/KOActivistaFont.ttf")
  f3 = loadFont ("assets/AvocadoDays.ttf")

  textAlign (CENTER) ;
}

function draw() {
  background("black") ;
fill("white") ;
textFont (f1, 48) ;
text("wassup", width/2, 100) ;
textFont (f2, 48);
text ("Sometimes I really like to...", width/2, 300);
textFont (f3, 48) ;
text ("shlapppa da bass", width/2, 450);

}
