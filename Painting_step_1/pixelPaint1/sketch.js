// painting with particle pixels
let video;
let vScale = 16;
let particle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width / vScale, height / vScale);
	particle = new Particle(320, 240);
}

function draw() {
	video.loadPixels();
	particle.update();
	particle.show();
}