function setup() {
  createCanvas(500, 650);
}
function draw() {
  background("blue");
  if (mouseIsPressed) {
    background ("black");
  }
    
  
  
  fill("purple");
  quad(260, 235, 230, 240, 200, 600, 350, 600);
  beginShape()
  vertex(150,180);
  vertex(190,130);
  vertex(315,136);
  vertex(355,183);
  vertex(250,302);
  endShape(CLOSE);
  beginShape()
  vertex(344,581);
  vertex (368,343);
  vertex (338,415);
  vertex (370,383);
  vertex (385,442);
  endShape(CLOSE);
  
  fill ("green");
  if (mouseIsPressed) {
 fill ("orange");
  arc(200,190,50,50,50,175);
  arc(305,190,50,50,50,175);
    circle (250,257,50)
  arc(150,178,150,110,4,18,);
  arc(355,185,150,110,4,18,);
    text("The nightime is when Spero becomes the apex predator they're meant to be...", 25, 46)
    text ("Spero can see up to 100 meters at night without any issues", 35, 350);
  arc(355,185,150,110,4,18,);
    fill("yellow");
    ellipse (375,75,50,50,50,);
    
  } else {
    fill ("white");
  ellipse (432, 42, 38);
  ellipse (465, 42, 38);
  ellipse (445, 25, 38);
    ellipse (208, 42, 38);
  ellipse (240, 39, 38);
  ellipse (220, 25, 38);
    ellipse (52, 60, 38);
    ellipse (33, 40, 38);
    ellipse (23, 67, 38);
    fill ("green")
    rect(1,600,600);
    arc(200,190,50,50,330.8,150);
  arc(305,190,50,50,330.8,150);
  arc(150,178,150,110,4,18,);
  arc(355,185,150,110,4,18,);
  circle (250,257,50)
  text ("Spero generally hates the daytime, they find the light much too bright and can hardly see", 25,98)
  }

 curveVertex(80, 80);
 curveVertex(180, 180);
curveVertex (80, 80);
  curveVertex(180,180);

}







//// time log:
//// 9.12; 39min-setting up some of the shapes
//// 9.12; 26min-configured quad into a body. Researched custom shaping.
//// 9.12; 22min-Inserted mouse coordinate tracker. Used it to help me plot the shape of the head.
///9.13; 47min- Set up fill colors, tweeked ears to fit more flush with head, added mouse press commands for the background, eyes, and ears. Added backstory text.
///9.14; 31min- added the final touches, including grass, clouds, the sky, and the moon. Removed mouse tracker.
