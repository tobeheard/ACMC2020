/// <reference path="../TSDef/p5.global-mode.d.ts" />

let vid;
let vScale = 16;
const flock = [];

function setup() {
  createCanvas(640, 380);

  frameRate(5);
  // background(150);
  vid = createCapture(VIDEO);
  vid.size(width / vScale, height / vScale);
  // vid.hide();

  pixelDensity(1);
  noStroke();
  for (let i = 0; i < 400; i++) { //create a bunch
    flock.push(new Boid()); //of boid class
  }


}

function draw() {
  vid.loadPixels();

  background(150);
  for (let boid of flock) { // boid iterats over flock
    boid.edges();
    boid.flock(flock);
    boid.update(); //position
    boid.show(); //what it is (draw)

  }

}