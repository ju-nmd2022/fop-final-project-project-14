import { Hen } from "./hen.js"


let backgroundImage;
let canvasPlayScreen;

let hen1;

function preload() {
  backgroundImage = loadImage("/images/background.png");
}

window.preload = preload;

function setup() {
  //   frameRate(30);
  createCanvas(600, 750);

  hen1 = new Hen(200, 200);

  // canvasPlayScreen.position(0, 300);
}

window.setup = setup;

function draw() {
  background(backgroundImage);

  hen1.draw();

}

window.draw = draw;