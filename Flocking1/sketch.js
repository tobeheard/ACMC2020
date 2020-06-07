const flock = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 200; i++) { //create a bunch
    flock.push(new Boid()); //of boid class
  }
}

function draw() {
  background(51)

  for (let boid of flock) { // boid iterats over flock
    boid.edges();
    boid.flock(flock);
    boid.update(); //position
    boid.show(); //what it is (draw)
  }
}