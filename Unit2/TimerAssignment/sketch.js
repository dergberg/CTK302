let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/header.png") ;
  i2 = loadImage("assets/heygooglecheckoutmyportfolio.png") ;
  i3 = loadImage("assets/bighossderg.png") ;
  imageMode (CENTER) ;
}

function draw() {
  background(220);
  
  switch(state) {
    case 0:
    background ("red");
      image(i1, width / 2, height / 2 , 300, 300) ;
      text("my website header", 150, 40);
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 1;
      }
      break;
      case 1:
      background ("blue");
      image(i2, width / 2, height / 2 , 300, 300) ;
      text("I think google would really appreciate my creativity", 70, 40);
      timer++;
      if (timer > 2*60) {
        timer = 0;
        state = 2;
      }
      break;
      case 2:
      background ("purple");
      image(i3, width / 2, height / 2 , 300, 300) ;
      text("I took home gold and ate some combos", 105, 40);
      timer++;
      if (timer > 5*60) {
        timer = 0;
        state = 0;
      }
      break;
  }
  
}