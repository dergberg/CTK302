var myState = 0;
var timer = 0;
var font;
var x = 0;
var backdrop;
let mic;
let y = 337;
var vol = 0;
let turtle;
let fturtle;
let cturtle;
let jail;

var wilhelm
var gam;


function preload() {
  font = loadFont('assets/BLUECHERIES.ttf');
  turtle = loadImage('assets/mitchnf.png');
  fturtle = loadImage('assets/wavymitchgif.gif');
  cturtle = loadImage ('assets/crustymitch(small).png');
  jail = loadImage ('assets/straighttojail.png')
  gam = loadSound('assets/smashingolmitch.mp3');
  wilhelm = loadSound ("assets/wilhelm-scream.wav");
}

function setup() {
  // put setup code here
  createCanvas(420, 400);

  mic = new p5.AudioIn();
textFont(font); // SETS the font
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

}

function draw() {
  // put drawing code here
  background ('black');

  
  switch (myState) {

    case 0: 
      //background("#ffcb08");
      image(turtle, 0, 0);
      fill("white");
      textSize(20);


      fill(random(255), random(255), random(255));

      textSize(30);

      text("Click to Begin", x, 200);
      x += 3;
      if (x > 280) {
        x = 0;
      }
    

      break;

    case 1:
      //background(100);
      image(turtle, 0, 0);
      fill ("white");
      textSize(30);
      text("Ask Mitch about literally any issue", 10, 250);
      
      vol = mic.getLevel();
      if (vol >= 0.1) {

        myState = 2;
        gam.play();
      
      }
  
  

      break;

    case 2:
      //background(100);
      image(fturtle, 0, 0);
       fill ('white') ;
       textSize (20);
      text ("OMG, what have you done?? \nGive him a poke and see if he's okay.",10, 75);
       textSize (30);
       
       
       
       //var c = document.getElementById ("myVideo");
// Create an element <video>
//var v = document.createElement ("video");
// Set the attributes of the video
//v.src = ("assets/wavymitch.mp4");
//v.controls = true;

  
    
      break;

    case 3:
      //background(200);
      image(cturtle, 5, 20);
      textSize (30);
      text ("GOODNESS SAKE LOOK WHAT YOU DID", 5, 200);
      //y = y - 10;
      //if (y <= 0) {
       // myState = 4;
       
       if (!wilhelm.isPlaying()){
        wilhelm.play();
       }
       
       
        
        timer++;
        if (timer > 1.75*60) {
        timer = 0;
        myState = 4;
       }

       break;
      


    case 4:
    textSize(35);
      text("Straight to jail!", 200, 350);
      image (jail, 05, 20);
      if (myState=4){
        wilhelm.stop();
      }

      //  background("#ffcb08");
      break;
  }
}


function mouseReleased() {
 if (myState == 0) {
    myState = 1;
  }
  if (myState == 2) {
  myState = 3;
  }
 
  if (myState == 4) {
    myState = 0;
 
    
}


  console.log(mouseX + "," + mouseY);
}

function touchStarted() {
  getAudioContext().resume();
}
