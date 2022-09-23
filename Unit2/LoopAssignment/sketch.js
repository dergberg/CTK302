let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      background("red");
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          rect(i, j, 20, 20);
        }
      }
      break;
    case 1:
      background("blue");
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i < width; i += 25) {
          ellipse (i, j, 20, 20);
        }
      }
      break;
    case 2:
      background("purple");
      for (let j = 0; j <= height; j += 20) {
        for (let i = 0; i < width; i += 25) {
          triangle (i, j, 30,30,30,30)
        }
      }
      break;
    case 3:
      background ("orange");
      for (let j = 0; j <= height; j += 32) {
        for (let i = 0; i < width; i += 32) {
          beginShape ()
          vertex (i,j);
          vertex (160, 130);
          vertex (230,20)
          endShape (CLOSE);
        }
      }
      break;
    case 4:
      background("green");
      for (let j = 0; j <= height; j += 32) {
        for (let i = 0; i < width; i += 32) {
          beginShape ()
          vertex (70,80);
          vertex (160,50);
          vertex (32, 25);
          vertex (i,j);
          vertex (-200, 45);
          vertex (i,j);
          endShape (CLOSE);
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
