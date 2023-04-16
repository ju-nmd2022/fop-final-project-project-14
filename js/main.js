import { Hen } from "./hen.js";
import { Chick } from "./chick.js";
import { Fox } from "./fox.js";


let backgroundImage;
let canvasPlayScreen;

let hen1;
let chick1;
let fox1;

function preload() {
  backgroundImage = loadImage("/images/background.png");
}

window.preload = preload;

function setup() {
  //   frameRate(30);
  createCanvas(600, 750);

  hen1 = new Hen(200, 200);
  chick1 = new Chick(200, 300);
  fox1 = new Fox(300, 300);

  // canvasPlayScreen.position(0, 300);
}

window.setup = setup;

function draw() {
  background(backgroundImage);

  //example, to see them
  hen1.draw();
  chick1.draw();
  fox1.draw();

}

window.draw = draw;