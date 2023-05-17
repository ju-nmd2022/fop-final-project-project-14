import { Hen } from "../js/hen.js";
import { Chick } from "../js/chick.js";
import { Fox } from "../js/fox.js";
import { Worm } from "../js/worm.js";

let backgroundImage;
let canvasPlayScreen;
let hen;
let worms = [];
let fox;
let wormCount = 0;
let gameStartTime;
let gameState = "start";
let foxSpeed = 4; // Default fox speed

function preload() {
  backgroundImage = loadImage("./images/background-big.png");
}

window.preload = preload;

function setup() {
  frameRate(30);
  createCanvas(backgroundImage.width, backgroundImage.height);

  // Store the start time of the game,millis() is a built-in function that returns the number of milliseconds that have elapsed since the program started running.
  gameStartTime = millis();

  //the fox will show up from random location in the canvas
  fox = new Fox(width / 4, height / 4, foxSpeed);
  hen = new Hen(width / 2, height / 2);

  // Add the click event listener for the canvas
  canvasPlayScreen = document.querySelector("#defaultCanvas0");
  canvasPlayScreen.addEventListener("click", mouseClicked);

  //limit the canvas where the worms can pop up
  const wormImage = loadImage("./images/worm.png");
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
  // indicator();

  //------------screens--------------
  if (gameState === "start") {
    startScreen();
  } else if (gameState === "play") {
    playScreen();

    // Check for collision between hen and fox
    if (hen.collidesWith(fox)) {
      // Handle collision between hen and fox
      gameState = "lose";
    }

    // Check for collision between fox and chicks
    for (let i = 0; i < hen.chicks.length; i++) {
      const chick = hen.chicks[i];
      if (chick.collidesWith(fox)) {
        // Handle collision between chick and fox
        gameState = "lose";
      }
    }
  } else if (gameState === "lose") {
    gameOver();
  }
}

window.draw = draw;

function mouseClicked() {
  // Check if the mouse is clicked on a worm
  for (let i = 0; i < worms.length; i++) {
    const worm = worms[i];
    //Check if the hen is close enough to the worm
    const dx = hen.x - worm.x;
    const dy = hen.y - worm.y;
    const distance = dist(hen.x, hen.y, worm.x, worm.y);
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
      hen.eatWorm();
      // Exit the loop as we have found the clicked worm
      break;
    }
  }
}
window.mouseClicked = mouseClicked;

//------------------start or restar the game---------------
function keyPressed() {
  if (keyCode === 32 && gameState === "start") {
    gameState = "play";
  } else if (keyCode === 32 && gameState === "lose") {
    gameState = "play";
    resetGame();
  }
}
window.keyPressed = keyPressed;

function indicator() {
  // Calculate the elapsed time in minutes
  const elapsedTime = millis() - gameStartTime;
  const seconds = Math.floor(elapsedTime / 1000);

  push();
  fill(255);
  textSize(16);
  text("Worm eaten: " + wormCount, 20, 30);
  text("Chicken hatched: " + Math.floor(wormCount / 3), 20, 50);
  text("You survived: " + seconds + " seconds", 20, 70);
  pop();
}

function startScreen() {
  push();
  translate(0, 0);
  fill(255);
  textSize(22);
  textAlign(CENTER);
  push();
  textSize(40);
  textStyle(BOLD);
  text("Chicken Survive game", width / 2, height / 2 - 100);
  pop();
  text("Avoid the cunning fox!", width / 2, height / 2 - 30);
  text("Use arrow or AWSD keys to control the move,", width / 2, height / 2);
  text("Click mouse on the worm to eat them.", width / 2, height / 2 + 30);
  push();
  textStyle(BOLD);
  text("Press space key to start playing", width / 2, height / 2 + 60);
  pop();
  pop();
}

function playScreen() {
  indicator();
  // below is the playing screen mechanics
  //worm
  for (let i = 0; i < worms.length; i++) {
    const worm = worms[i];
    worm.draw();
  }

  // Check if the hen is eating and draw the appropriate image
  if (hen.isEating) {
    image(hen.eatingHen, hen.x, hen.y);
  } else {
    hen.draw();
  }
  hen.move();

  // Draw and move the chicks
  for (let i = 0; i < hen.chicks.length; i++) {
    const chick = hen.chicks[i];
    chick.draw();
    chick.chickMove();
  }

  fox.draw();
  fox.foxMove();
}

function gameOver() {
  // Draw "Game Over" text
  push();
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2 - 50);
  push();
  textSize(22);
  text("Press space key to play again", width / 2, height / 2);
  pop();
  pop();
}

function resetGame() {
  // Reset any necessary variables or objects
  wormCount = 0;
  worms = [];
  gameState = "start"; // Set the game state back to "start"

  // Reset hen, chicks, fox, and any other game elements
  hen = new Hen(width / 2, height / 2);
  fox = new Fox(width / 4, height / 4, foxSpeed);

  // Initialize worms and other elements as needed
  const wormImage = loadImage("./images/worm.png");
  const visibleWidth = width - wormImage.width;
  const visibleHeight = height - wormImage.height;

  for (let i = 0; i < 5; i++) {
    const x = random(visibleWidth);
    const y = random(visibleHeight);
    const worm = new Worm(x, y);
    worms.push(worm);
  }

  gameStartTime = millis(); // Reset the game start time
}
