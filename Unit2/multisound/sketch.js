let state = -1;
function preload () {
  s1 = loadSound("assets/Abyss(mp3).mp3");
  s2 = loadSound ("assets/lich.mp3");
  s3 = loadSound ("assets/Andria.mp3");
  }
function setup() {
  createCanvas(800, 800);
  i1 = loadImage ("assets/Abysss_thumb.png");
  i2 = loadImage ("assets/lichthumb.png");
  i3 = loadImage ("assets/cover.png");
  imageMode (CENTER);
}

function draw() {

  background(100);

  
  switch (state) {
case -1:

  text("Click to play or whatever", 100, 100);
  break;
    case 0:
      background ("blue");
      image(i1, width/2, height/2);
    text("Abyss -Yeah, real original I know", 100, 100);
      if (!s1.isPlaying()) {
       s1.play();
      }
      break;

    case 1:
      background ("purple");
      image(i2, width/2, height/2);
      text("(lich)-The abrasiveness is the point", 100, 100);
      if (!s2.isPlaying()) {
        s2.play();
       }
      
      break;

    case 2:
      background ("black");
      image(i3, width/2, height/2, 400, 400);
      fill ("white");
    text("Andria- La Dispute. This dude sounds like that guy who always screams MY LEG in Spongebob", 100, 100,);
      if (!s3.isPlaying()) {
        s3.play();
       }
      
      
      break;

  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;

}
function touchStarted() {
  getAudioContext().resume();
}
