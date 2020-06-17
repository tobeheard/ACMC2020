/// <reference path="../TSDef/p5.global-mode.d.ts" />

let video;
let vScale = 16;
const flock = [];

function setup() {

  createCanvas(640, 480);
  frameRate(15);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  video.hide();


  noStroke();
  for (let i = 0; i < 400; i++) { //create a bunch
    flock.push(new Boid()); //of boid class
  }



}

// boids are black
function draw() {
  video.loadPixels();
  // background(50);


  for (let boid of flock) { // boid iterats over flock
    boid.edges();
    boid.flock(flock);
    boid.update(); //position
    boid.show();

  }
}