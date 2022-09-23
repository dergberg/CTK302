
let x = 0;
function setup() {
  createCanvas(500, 500);
}

function draw() {
background (100);
  push() ;
translate (0,x);
  avatar() ;
  x += 3;
  if (x > width) {
    x = -750;
  }
  pop() ;
}



function avatar () {
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

  arc(200,190,50,50,50,175);
  arc(305,190,50,50,50,175);
    circle (250,257,50)
  arc(150,178,150,110,4,18,);
  arc(355,185,150,110,4,18,);


}