// painting with particle pixels
let video;
let vScale = 16;
const particles = []; //empty array to hold particles

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(15);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width / vScale, height / vScale);

	for (let i = 0; i < 50; i++) { //using for loop fill the array
		particles[i] = new Particle(random(width), random(height));
	}

	// for (let i = 0; i < 200; i++) { //create a bunch
	// 	flock.push(new Boid()); //of boid class
	// }
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
// 	video.loadPixels();
// 	for (let boid of flock) { // boid iterats over flock
// 		boid.edges();
// 		boid.flock(flock);
// 		boid.update(); //position
// 		boid.show(); //what it is (draw)

// 	}
// }