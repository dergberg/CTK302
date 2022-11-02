let cars = [];
let frogPos;
let state = 0;
let timer = 15;
let i1,i2,i3,i4,i5, i6;
let zucks = [];
let x= 0;
let s1, s2, s3;

function preload (){
  i1= loadImage ("assets/modifiedlich.png");
  i2= loadImage ("assets/zuckbuck.png");
  i3= loadImage ("assets/dergasset.png");
  i4= loadImage ("assets/gamewinscreen.png");
  i5= loadImage ("assets/gamescreen.png");
  i6= loadImage ("assets/losescreen.png");
  s1= loadSound ("assets/coinsound.wav");
  s2= loadSound ("assets/youlose.wav");
  s3= loadSound ("assets/youwin.wav");
}

function setup() {
  createCanvas(900, 900);
  //imageMode(CENTER);
  rectMode(CENTER);

  // Spawn objects

  for (let i = 0; i < 8; i++) {
    cars.push(new Car());
  }
  for ( let h = 0; h < 5; h++){
    zucks.push(new Zucks());
   
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: // menu screen
      background(100);
      background (i5, 900, 900);
      fill(random(255), random(255), random(255));
      textSize(30);
      text("Click to Begin", x, 200);
      x += 3;
      if (x > 900) {
        x = 0;
      }
      fill("black");
      text("Collect the ZuckBucks to win a prize!", width/2-250, height/2);
      break;

    case 1: // game screen
      game();
      textSize(50);
      fill ("black");
      text(timer,width / 2, height / 2);
      text("Timer:", width/2-160, height/2);
      text("Zucks:", width/2-160, height/2+80);
       
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
      if (timer < 1) {
        timer = 0;
        state = 3;
        s2.play();
      }
      break;

    case 2: // win screen
      background(100);
      imageMode (CENTER);
      image (i4, width/2, height/2);
      fill("white");
      textSize(30);
      text("Enjoy your new Mark Zuckerboat!", width / 2 -300, height / 2);

      break;

    case 3: // lose screen
      background(100);
      image (i6, 0, 0);
      fill("white");
      text("you lost!", width / 2, height / 2);

      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; // go to game
      break;

    case 2: // win state
      resetTheGame();
      state = 0;
      break;

    case 3: // lose state
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background(i5);

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  
  
    // collision detection
    if (cars[i].pos.dist(frogPos) < 50) {
      //cars.splice(i, 1);
      s2.play();
      state = 3;
    }
  }
  for (let h = 0; h < zucks.length; h++) {
    zucks[h].display();
    zucks[h].move();
   
    if (zucks[h].pos.dist(frogPos)< 60) {
      zucks.splice(h, 1);
      s1.play();
    }
     
  }
  if (zucks.length ==0){
    state = 2;
   }
   fill ("black");
  text(zucks.length, width/2, height/2 +80);

  // if (cars.length <= 0) {
  //   timer = 0;
  //   state = 2;
  // }

  // add a "frog"
  //fill("green");
  
  image(i3,frogPos.x, frogPos.y, 105, 105);
  checkForKeys();
}


function resetTheGame() {
  cars = [];
  zucks = [];
  timer = 15;
  imageMode ();
  image(i3,frogPos.x, frogPos.y, 105, 105);
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
  for ( let h = 0; h < 5; h++) {
    zucks.push(new Zucks());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(0, random(3));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.o = random(100);
    this.size = (120);
  }

  display() {
  // this can be text, images, or shapes
  fill(this.r, this.g, this.b, this.o);
  image (i1, this.pos.x, this.pos.y, this.size, 80);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
class Zucks {
  constructor() {
  this.pos = createVector(random(width), 100); // initialize your attributes here
  this.velocity = createVector(0, random(3));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.o = random(100);
  this.size = (150);
}
display () {
    image (i2, this.pos.x, this.pos.y,this.size,55);
}
move() {
  this.pos.add(this.velocity);
  if (this.pos.x > width) this.pos.x = 0;
  if (this.pos.x < 0) this.pos.x = width;
  if (this.pos.y > height) this.pos.y = 0;
  if (this.pos.y < 0) this.pos.y = height;
}
}


 
  

