let state = 0;
function setup() {
  createCanvas(500, 500);
  textAlign (CENTER);

}

function draw() {
switch (state) {
  case 0:
    background ("grey");
    text ("How long does it take for YA to change a light bulb in my apt?", width/2, height/2);
    break;
    case 1:
      background ("blue");
      text ("No seriously, it's dark and I'm scared :(", width/2, height/2);
    break;

}
}
function mouseReleased () {
  state++;
  if (state > 1) state = 0;
}
