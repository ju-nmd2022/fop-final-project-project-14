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
}

window.preload = preload;

function setup() {
  frameRate(30);
  createCanvas(backgroundImage.width, backgroundImage.height);

  //the fox will show up from random location in the canvas
  fox1 = new Fox(random(width), random(height));

  // Add the click event listener for the canvas
  canvasPlayScreen = document.querySelector("#defaultCanvas0");
  canvasPlayScreen.addEventListener("click", mouseClicked);

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

  // Check if the hen is eating and draw the appropriate image
  if (hen1.isEating) {
    image(hen1.eatingHen, hen1.x, hen1.y);
  } else {
    hen1.draw();
  }
  hen1.move();
  chick1.draw();
  chick1.chickMove();
  fox1.draw();
  fox1.foxMove();

  //worm
  for (let i = 0; i < worms.length; i++) {
    const worm = worms[i];
    worm.draw();
  }
}
window.draw = draw;

function mouseClicked() {
  // Check if the mouse is clicked on a worm
  for (let i = 0; i < worms.length; i++) {
    const worm = worms[i];
    //Check if the hen is close enough to the worm
    const dx = hen1.x - worm.x;
    const dy = hen1.y - worm.y;
    const distance = dist(hen1.x, hen1.y, worm.x, worm.y);
    if (distance < 120 && worm.isClicked(mouseX, mouseY)) {
      // Remove the clicked worm
      worms.splice(i, 1);

      // Add a new worm randomly in the canvas
      const x = random(width);
      const y = random(height);
      const newWorm = new Worm(x, y);
      worms.push(newWorm);
      //change the image when hen is eating
      hen1.eatWorm();
      // Exit the loop as we have found the clicked worm
      break;
    }
  }
}
