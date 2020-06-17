// AParish ansi video mirror 

// I specifically told my students not to do this
// because it is boring. oh well.

let capture;

function setup() {
  noCanvas();
  capture = createCapture(VIDEO);
  capture.hide();
  frameRate(20);
  //term.write(ansi.styles(['blue', 'bold', 'bg-blue']));
}

let ch = [" ", ".", ",", "+", "x", "X", "@", "#"];

function draw() {

  term.write(ansi.erase.display(2));
  term.write(ansi.cursor.position(0, 0));
  capture.loadPixels();
  let lineNo = 0;
  for (let y = 0; y < capture.width; y += 10) {
    let line = "";
    for (let x = 0; x < capture.height; x += 10) {
      let offset = ((y * capture.width) + x) * 4;
      let g = capture.pixels[offset + 1];
      let idx = int(map(g, 0, 255, 0, ch.length - 1));
      line += ch[idx];
    }
    term.write(ansi.cursor.position(lineNo, 0));
    term.write(line);
    lineNo++;
  }

}