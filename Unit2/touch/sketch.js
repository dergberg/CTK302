let numberOfTouches ;
let i1, i2, i3 ;


function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/bloom.jpeg") ;
  i2 = loadImage("assets/ogsubpop.jpeg") ;
  i3 = loadImage("assets/sunnday.jpeg") ;
  imageMode (CENTER) ;
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("touch the screen to begin your journey", 5, 22) ; 
      break ;
      
      case 1: 
       text("Bloom- who could forget this gem! (kinda sarcasm tho)", 5, 22) ; 
      // put a picture here
      image(i1, 200, 200, 50, 50);
      break ;
      
      case 2:
      text("I may or may not have had to do a presentation on SubPop", 5, 22) ; 
            // put a picture here
            image(i2, 200, 200, 50+50, 50);
      break ;
      
      case 3:
     text("This album is pretty good", 5, 22) ; 
            // put a picture here
            image(i3, 200, 200, 50, 50);
      break ;
    
      
  }
  
}