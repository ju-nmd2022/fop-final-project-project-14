import { Hen } from "./hen.js";
import { Chick } from "./chick.js";
import { Fox } from "./fox.js";
import { Worm } from "./worm.js";

let backgroundImage;
let canvasPlayScreen;

let hen1;
let chick1;
let worms = [];
let fox1;

function preload() {
  backgroundImage = loadImage("/images/background-big.png");

  hen1 = new Hen(200, 200);
  chick1 = new Chick(170, 300);
  fox1 = new Fox(500, 400);
}

window.preload = preload;

function setup() {
  frameRate(30);
  createCanvas(backgroundImage.width, backgroundImage.height);

  // canvasPlayScreen.position(0, 300);

  for (let i = 0; i < 5; i++) {
    const x = random(width);
    const y = random(height);
    const worm = new Worm(x, y);
    worms.push(worm);
  }
}

window.setup = setup;

function draw() {
  background(backgroundImage);

  //example, to see them
  hen1.draw();
  hen1.move();

  chick1.draw();
  chick1.chickMove();
  fox1.draw();

  fox1.foxMove();
  // fox1.changeDirection();


  //worm

  for (let i = 0; i < worms.length; i++) {
    const worm = worms[i];
    worm.draw();
  }
}
window.draw = draw;
