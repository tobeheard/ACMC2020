let vid;
let vScale = 16;

function setup() {
  createCanvas(640, 480);
  vid = createCapture(VIDEO);
  // video.size(width / vScale, height / vScale);
  vid.hide();
  noStroke();
}

function draw() {
  background(0);
  vid.loadPixels();
  for (var y = 0; y < height; y += 10) {
    for (var x = 0; x < width; x += 10) {
      var offset = ((y * width) + x) * 4;
      fill(vid.pixels[offset],
        vid.pixels[offset + 1],
        vid.pixels[offset + 2]);
      rect(x, y, 10, 10);
    }
  }
}