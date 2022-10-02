let state = 0;
let timer = 0;

function setup() {
  createCanvas(500, 500);
  textAlign (CENTER);

}

function draw() {
switch (state) {
  case 0:
    background ("grey");
    text ("why did the cow rebuff the bull", width/2, height/2);
    break;
    case 1:
      background ("blue");
      text ("because....", width/2, height/2);
      break;
    case 2:
      background ("purple");
      text ("they weren't in the moooo-d", width/2, height/2);
break;
}
timer++;
if (timer > 3* 60){ 
  timer = 0;
  state++ ;
  if (state > 3) {
    state = 0;
  }
}
}