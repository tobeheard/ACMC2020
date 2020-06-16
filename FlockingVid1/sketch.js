/// <reference path="../TSDef/p5.global-mode.d.ts" />

let vid;
let vScale = 16;
const flock = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(5);
  // background(150);
  vid = createCapture(VIDEO);
  vid.size(width / vScale, height / vScale);
  vid.hide();

  pixelDensity(1);
  noStroke();
  for (let i = 0; i < 400; i++) { //create a bunch
    flock.push(new Boid()); //of boid class
  }

  for (var py = 0; py < vid.height; py += 10) {
    for (var px = 0; px < vid.width; px += 10) {
      var offset = ((py * vid.width) + px) * 4;
      fill(vid.pixels[offset + 0],
        vid.pixels[offset + 1],
        vid.pixels[offset + 2]);
      // rect(px, py, 10, 10);
    }
  }
}

// boids are black
function draw() {
  vid.loadPixels();

  // background(150);
  for (let boid of flock) { // boid iterats over flock
    boid.edges();
    boid.flock(flock);
    boid.update(); //position
    boid.show(); //what it is (draw)

  }

}