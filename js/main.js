let backgroundImage;
let canvasPlayScreen;

function preload() {
  backgroundImage = loadImage("/images/background.png");
}

function setup() {
  //   frameRate(30);
  createCanvas(600, 750);

  // canvasPlayScreen.position(0, 300);
}

function draw() {
  background(backgroundImage);
}
