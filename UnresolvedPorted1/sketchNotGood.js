/// <reference path="../TSDef/p5.global-mode.d.ts" />

// trying A Parrish new?? this hack did not work out
// https://creative-coding.decontextualize.com/video/
// Modified by me!

// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// http://www.generative-gestaltung.de
/**
 * pixel mapping. each pixel is translated into a new element (word)
 * 
 * KEYS
 * 1                 : toogle font size mode (dynamic/static)
 * 2                 : toogle font color mode (color/b&w)
 * arrow up/down     : maximal fontsize +/-
 * arrow right/left  : minimal fontsize +/-
 * s                 : save png
 * p                 : save pdf
 * r                 : record video (no sound!)
 */

// import processing.pdf.*;
// import java.util.Calendar;
// import processing.video.*;

// let savePDF = false;
// boolean recording=false;  //with recording options



let fontSizeMax = 20;
let fontSizeMin = 10;
let spacing = 12; // line height
let kerning = 0.5; // between letters

let fontSizeStatic = false;
let blackAndWhite = false;

// PFont font;

let video, words, txt;
let vScale = 16;

function preload() {
  words = loadStrings("covid.txt");
}


function setup() {
  pixelDensity(1);
  frameRate(5);
  // fullscreen();
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  // video.hide();

  textFont("Times");
  textSize(10);

  //println(video.width+" x "+video.height);
  //load the text and chop it up and set to lowercase

  txt = words.join('\n');
  txt.split(' ');

} //setup



function draw() {

  background(255);
  video.loadPixels();
  // textAlign(LEFT);
  //textAlign(LEFT,CENTER); //// also nice!
  let x = 0,
    y = 10,
    counter = 0;
  // while (y < height) {
  //   // translate position (display) to position (video image)
  //   let imgX = map(x, 0, width, 0, video.width);
  //   let imgY = map(y, 0, height, 0, video.height);
  for (let vY = 0; vY < video.height; vY += 5) {
    for (let vX = 0; vX < video.width; vX += 5) {
      let offset = ((vY * video.width) + vX) * 4;
      let imgX = (vX / video.width) * width;
      let imgY = (vY / video.height) * height;

      // get current color
      let c = color(video.get(imgX, imgY));
      // let greyscale = round(red(c) * 0.222 + green(c) * 0.707 + blue(c) * 0.071);
    }
    push();
    // translate(x, y);

    // if (fontSizeStatic) {
    //   textFont(font, fontSizeMax);
    //   if (blackAndWhite) fill(greyscale);
    //   else fill(c);
    // } else {
    //   // greyscale to fontsize
    //   let fontSize = map(greyscale, 0, 255, fontSizeMax, fontSizeMin);
    //   fontSize = max(fontSize, 1);
    //   textSize(fontSize);
    //   if (blackAndWhite) fill(0);
    //   else fill(c);
    // }

    let letter = txt.charAt(counter);
    text(letter, 0, 0);
    let letterWidth = textWidth(letter) + kerning;
    // for the next letter ... x + letter width
    x += letterWidth; // update x-coordinate
    pop();

    // linebreaks
    if (x + letterWidth >= width) {
      x = 0;
      y += spacing; // add line height
    }

    counter++;
    if (counter > txt.length - 1)
      counter = 0;
  }

  // if (savePDF) {
  //   savePDF = false;
  //   endRecord();
  // }
  // if (recording){//recording a video of sketch
  // saveFrame("output/test_1_#####.png");
  //  }
}


function keyReleased() {
  if (key == 's' || key == 'S') saveFrame(timestamp() + "_##.png");
  if (key == 'p' || key == 'P') savePDF = true;
  // change render mode
  if (key == '1') fontSizeStatic = !fontSizeStatic;
  // change color stlye
  if (key == '2') blackAndWhite = !blackAndWhite;
  println("fontSizeMin: " + fontSizeMin + "  fontSizeMax: " + fontSizeMax + "   fontSizeStatic: " + fontSizeStatic + "   blackAndWhite: " + blackAndWhite);
}

function keyPressed() {
  // change fontSizeMax with arrowkeys up/down 
  if (keyCode == UP) fontSizeMax += 2;
  if (keyCode == DOWN) fontSizeMax -= 2;
  // change fontSizeMin with arrowkeys left/right
  if (keyCode == RIGHT) fontSizeMin += 2;
  if (keyCode == LEFT) fontSizeMin -= 2;
  //fontSizeMin = max(fontSizeMin, 2);
  //fontSizeMax = max(fontSizeMax, 2);
  if (key == 'r' || key == 'R') {
    recording = !recording;
  }
}

// // timestamp
// function timestamp() {
//   Calendar now = Calendar.getInstance();
//   return String.format("%1$ty%1$tm%1$td_%1$tH%1$tM%1$tS", now);
// }