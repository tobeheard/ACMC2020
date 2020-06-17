// AParish video mirror whoa

let kitty;
let vScale = 3;

function preload() {
  kitty = createCapture(VIDEO);
  // kitty.size(windowWidth / vScale, windowHeight / vScale);
  kitty.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);

}

function draw() {
  background(255);
  noStroke();
  kitty.loadPixels();
  // kitty.pixels
  for (let x = 0; x < kitty.width; x += 10) {
    for (let y = 0; y < kitty.height; y += 10) {
      let offset = ((y * kitty.width) + x) * 4;
      let r = kitty.pixels[offset];
      let g = kitty.pixels[offset + 1];
      let b = kitty.pixels[offset + 2];
      let a = kitty.pixels[offset + 3];
      fill(r, g, b, a);
      ellipse(
        map(x, 0, kitty.width, 0, width),
        map(y, 0, kitty.height, 0, height),
        map(mouseX, 0, width, 5, 50),
        map(mouseY, 0, height, 5, 50));
    }
  }
}

function mousePressed() {
  console.log(kitty.get(mouseX, mouseY));
}