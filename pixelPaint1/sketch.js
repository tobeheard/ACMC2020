// painting with particle pixels
let video;
let vScale = 16;
let particles = []; //empty array to hold particles

function setup() {
	createCanvas(640, 480);
	frameRate(15);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width / vScale, height / vScale);
	for (let i = 0; i < 50; i++) { //using for loop fill the array
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