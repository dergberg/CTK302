let cars = [] ;
let i1
let state = 0;
function preload (){
  i1= loadImage ("assets/streetpeople.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // Spawn objects

  // for (let i = 0 ; i < 20 ; i++) {
  //   cars.push(new Car()) ;
  // }
  
  // initialize the "frog position" vector
 
}

function draw() {
  switch (state) {
case 0:
  background(100);
      text("Say hi to all of the wonderful people", width / 2, height / 2);
      break;
  case 1:

  background(i1);
  cars.push(new Car()) ;

  // operate on every car
   for (let i = 0 ; i < cars.length ; i++) {
     cars[i].display() ;
     cars[i].move() ;
     if (cars[i].a <= 0 ) {
      cars.splice(i,1);
     }
   }
   break;


  }
  
  
  // add a "frog"
  
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; // go to game
      break;

    case 2: // win state
    
      state = 0;
      break;
  }
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(mouseX, mouseY); // initialize your attributes here
    this.velocity = createVector(random(-.8, .8), random(-10, -5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random (255);
    this.o = (250);
    this.size = random(42,42) ;
  }
  // methods

  display() {
 
    // this can be text, images, or shapes
    fill(this.r, this.g, this.b, this.o, this.a); 
    text("Hi", this.pos.x, this.pos.y, this.size, 42);
     // image(this.img, this.pos.x, this.pos.y) ;
  }

  move() {
    this.pos.add(this.velocity);
    this.a = this.a -5;
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}

