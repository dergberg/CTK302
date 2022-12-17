var bubbles = [];
let url = "";
let i1, i2;


function setup() {
  let key = "1kY6AFvztGfgBWwbD9MUL38UvgChZxcu6b0Vc5HD8oPU" // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(800, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  i1 = loadImage ("assets/heygooglecheckoutmyportfolio.png");
  i2 = loadImage ("assets/snowflakeclipart.png");
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Hot or iced coffee?"],
        data[i]["Minecraft or Call of Duty?"],
        data[i]["Cats or Dogs?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background(i1);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(coffee, minecraft, dogs) {
    // only the order of these parameters matters!
    this.coffee = coffee;
    this.minecraft = minecraft;
    this.dogs = dogs;
    this.pos = createVector (random( 5, 700), random(height));
    this.vel = createVector (0,random(2,6,));
  }

  display() {
    stroke("black");
    fill ("black");
    image (i2, this.pos.x, this.pos.y, 100, 100);
    fill("black");
    textSize (25);
    text(
      this.coffee + "\n" + this.minecraft + "\n" + this.dogs,
      this.pos.x +45,
      this.pos.y+25
    );
  
     this.pos.add(this.vel);
    if (this.pos.y>height) this.pos.y = 0;
    if (this.pos.x<0) this.pos.x = 0;
    
  }
    
  
}
