import { Hen } from "./hen.js";
import { Chick } from "./chick.js";
import { Fox } from "./fox.js";
import { Worm } from "./worm.js";

let backgroundImage;
let canvasPlayScreen;

let hen1;
let worms = [];
let fox1;
let wormCount = 0;

function preload() {
  backgroundImage = loadImage("../images/background-big.png");
}

window.preload = preload;

function setup() {
  frameRate(30);
  createCanvas(backgroundImage.width, backgroundImage.height);

  //the fox will show up from random location in the canvas
  fox1 = new Fox(random(width), random(height));
  hen1 = new Hen(width / 2, height / 2);

  // Add the click event listener for the canvas
  canvasPlayScreen = document.querySelector("#defaultCanvas0");
  canvasPlayScreen.addEventListener("click", mouseClicked);

  //limit the canvas where the worms can pop up
  const wormImage = loadImage("../images/worm.png");
  const visibleWidth = width - wormImage.width;
  const visibleHeight = height - wormImage.height;

  for (let i = 0; i < 5; i++) {
    const x = random(visibleWidth);
    const y = random(visibleHeight);
    const worm = new Worm(x, y);
    worms.push(worm);
  }
}

window.setup = setup;

function draw() {
  background(backgroundImage);
  indicator();
  //worm
  for (let i = 0; i < worms.length; i++) {
    const worm = worms[i];
    worm.draw();
  }
  // Check if the hen is eating and draw the appropriate image
  if (hen1.isEating) {
    image(hen1.eatingHen, hen1.x, hen1.y);
  } else {
    hen1.draw();
  }
  hen1.move();

  // Draw and move the chicks
  for (let i = 0; i < hen1.chicks.length; i++) {
    const chick = hen1.chicks[i];
    chick.draw();
    chick.chickMove();
  }

  fox1.draw();
  fox1.foxMove();
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

      // Update worm count
      wormCount++;

      //change the image when hen is eating
      hen1.eatWorm();
      // Exit the loop as we have found the clicked worm
      break;
    }
  }
}

function indicator() {
  push();
  fill(255);
  textSize(16);
  text("Worm eaten: " + wormCount, 20, 30);
  text("Chick hatched: " + Math.floor(wormCount / 3), 20, 50);
  pop();
}
