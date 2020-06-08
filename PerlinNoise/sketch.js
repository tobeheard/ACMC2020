/// <reference path="../TSDef/p5.global-mode.d.ts" />

// prelin noise particle pixels
let video;
let vScale = 16;
let particles = []; //empty array to hold particles

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  for (let i = 0; i < 200; i++) { //using for loop fill the array
    particles[i] = new Particle(random(width), random(height));
  }
  background(51);
}

function draw() {
  // background(51);
  video.loadPixels();
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }
}